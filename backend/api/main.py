from fastapi import FastAPI, HTTPException, Depends,  Request
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials, firestore
from typing import  Dict, Any, List
from api.models.corporate import CorpQueryParams
import requests
import yaml

app = FastAPI()
# TODO: api_tokenは環境ファイルに移動する。(firebase)
api_token = "6IGiKYADLPU7YdsqRHPOtSWU8mJcyAgm"

# firebaseの初期化
cred = credentials.Certificate("../albert-ma-firebase-adminsdk-iat1k-6e7338f40a.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# fibebaseの初期化ファイル(functions/main.py)で取得したdb変数を依存関係として注入する
# def create_app(db):
#     app = FastAPI()

#     def get_db():
#         return db

#     @app.get("/")
#     def read_root(db = Depends(get_db)):
#         # dbを利用してFirestoreにアクセス
#         documents = db.collection('your-collection').stream()
#         data = [doc.to_dict() for doc in documents]
#         return {"data": data}

#     return app

# フロントエンドとバックエンドの通信を許可(CORS対応)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# FEに渡す用のAPI
@app.post("/api/companies")
async def get_companies(request: Request):
    params = await request.json()
    print("Received request:", params)  # デバッグ用ログ
    query_params = CorpQueryParams(**params)
    results = query_db(query_params.dict(exclude_none=True))
    return results

def query_db(db_params: Dict[str, Any]):
    # firestoreとの疎通チェック
    users_ref = db.collection("users")
    docs = users_ref.stream()

    users = [doc.to_dict() for doc in docs]
    return {"users": users}

# def query_db(db_params: Dict[str, Any]) -> List[Dict[str, Any]]:
#     # TODO: DBからparamsの条件に合ったデータを取得するクエリを実行する
    
#     # TODO: リクエストのパラメータに応じたモックデータが返却できるように実装する。 (モックデータが10件くらい必要)
#     sample_data = [
#     {
#       "corporate_number": "1010001084833",
#       "postal_code": "1000005",
#       "location": "東京都千代田区丸の内２丁目４番１号",
#       "name": "株式会社パーソル総合研究所",
#       "status": "閉鎖",
#       "number_of_activity": "0",
#       "update_date": "2017-01-25T00:00:00+09:00"
#     },
#     {
#       "corporate_number": "1010001121801",
#       "postal_code": "1040053",
#       "location": "東京都中央区晴海１丁目８番５－２８０３号",
#       "name": "パーソルホールディングス株式会社",
#       "status": "-",
#       "number_of_activity": "0",
#       "update_date": "2020-02-13T00:00:00+09:00"
#     },
#     ]
#     return sample_data

# OpenAPI仕様をFastAPIアプリケーションに追加
with open("openapi.v1.yaml", "r") as f:
    openapi_spec = yaml.safe_load(f)

@app.get("/openapi.json", include_in_schema=False)
async def get_openapi():
    return app.openapi_schema

# 外部APIの呼び出し
@app.get("/api/corporate")
async def get_corporate_data(params: CorpQueryParams = Depends()):
    try:
        headers = {
            "Accept": "application/json",
            "X-hojinInfo-api-token": api_token
        }
        url = "https://info.gbiz.go.jp/hojin/v1/hojin"
        print(f"Received params: {params.dict(exclude_none=True)}")  # デバッグ情報
        response = requests.get(url, headers=headers, params=params.dict(exclude_none=True)) 
        response.raise_for_status()  # エラーチェック
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)