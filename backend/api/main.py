from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()
api_token = "6IGiKYADLPU7YdsqRHPOtSWU8mJcyAgm"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
async def hello_world():
    return {"message": "Hello, World!!!!"}

@app.get("/api/corporate")
async def get_corporate_data():
    try:
        headers = {
            "Accept": "application/json",
            "X-hojinInfo-api-token": api_token
        }
        url = "https://info.gbiz.go.jp/hojin/v1/hojin"
        params = {
            "name": "パーソル"  # ここにクエリパラメータを設定する
        }
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()  # エラーチェック
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)