from fastapi import FastAPI, HTTPException, Depends,  Request
from fastapi.middleware.cors import CORSMiddleware
from typing import  Dict, Any
from models.corporateRes import CorporateDetailList
from sampleData import sampleData
from models.corporateReq import CorpQueryParams
import requests
import yaml

app = FastAPI()
# TODO: api_tokenは環境ファイルに移動する。(firebase)
api_token = "6IGiKYADLPU7YdsqRHPOtSWU8mJcyAgm"

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

def query_db(db_params: Dict[str, Any]) -> CorporateDetailList:
    # TODO: DBからparamsの条件に合ったデータを取得するクエリを実行する
    
    # TODO: リクエストのパラメータに応じたモックデータが返却できるように実装する。 (モックデータが10件くらい必要)

    return sampleData

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