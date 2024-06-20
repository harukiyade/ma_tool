from fastapi import FastAPI, HTTPException, Depends, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any, List
import requests
import yaml

app = FastAPI()
# TODO: api_tokenは環境ファイルに移動する。(firebase)
api_token = "6IGiKYADLPU7YdsqRHPOtSWU8mJcyAgm"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QueryParams(BaseModel):
    name: str = Query(..., description="The name of the company")
    corporate_number: Optional[str] = Query(None, description="")
    exist_flg: Optional[str] = Query(None, description="")
    corporate_type: Optional[str] = Query(None, description="")
    prefecture: Optional[str] = Query(None, description="")
    city: Optional[str] = Query(None, description="")
    capital_stock_from: Optional[str] = Query(None, description="")
    capital_stock_to: Optional[str] = Query(None, description="")
    employee_number_from: Optional[str] = Query(None, description="")
    employee_number_to: Optional[str] = Query(None, description="")
    founded_year: Optional[str] = Query(None, description="")
    sales_area: Optional[str] = Query(None, description="")
    business_item: Optional[str] = Query(None, description="")
    unified_qualification: Optional[str] = Query(None, description="")
    unified_qualification_sub01: Optional[str] = Query(None, description="")
    unified_qualification_sub02: Optional[str] = Query(None, description="")
    unified_qualification_sub03: Optional[str] = Query(None, description="")
    unified_qualification_sub04: Optional[str] = Query(None, description="")
    net_sales_summary_of_business_results_from: Optional[str] = Query(None, description="")
    net_sales_summary_of_business_results_to: Optional[str] = Query(None, description="")
    net_income_loss_summary_of_business_results_from: Optional[str] = Query(None, description="")
    net_income_loss_summary_of_business_results_to: Optional[str] = Query(None, description="")
    total_assets_summary_of_business_results_from: Optional[str] = Query(None, description="")
    total_assets_summary_of_business_results_to: Optional[str] = Query(None, description="")
    name_major_shareholders: Optional[str] = Query(None, description="")
    average_continuous_service_years: Optional[str] = Query(None, description="")
    average_age: Optional[str] = Query(None, description="")
    month_average_predetermined_overtime_hours: Optional[str] = Query(None, description="")
    female_workers_proportion: Optional[str] = Query(None, description="")
    year: Optional[str] = Query(None, description="")
    ministry: Optional[str] = Query(None, description="")
    source: Optional[str] = Query(None, description="")
    page: Optional[str] = Query(None, description="")
    limit: Optional[str] = Query(None, description="")

# FEに渡す用のAPI
@app.post("/api/companies")
async def get_companies(request: Request):
    params = await request.json()
    print("Received request:", params)  # デバッグ用ログ
    query_params = QueryParams(**params)
    results = query_db(query_params.dict(exclude_none=True))
    return results

def query_db(db_params: Dict[str, Any]) -> List[Dict[str, Any]]:
    # TODO: DBからparamsの条件に合ったデータを取得するクエリを実行する
    
    sample_data = [
    {
      "corporate_number": "1010001084833",
      "postal_code": "1000005",
      "location": "東京都千代田区丸の内２丁目４番１号",
      "name": "株式会社パーソル総合研究所",
      "status": "閉鎖",
      "number_of_activity": "0",
      "update_date": "2017-01-25T00:00:00+09:00"
    },
    {
      "corporate_number": "1010001121801",
      "postal_code": "1040053",
      "location": "東京都中央区晴海１丁目８番５－２８０３号",
      "name": "パーソルホールディングス株式会社",
      "status": "-",
      "number_of_activity": "0",
      "update_date": "2020-02-13T00:00:00+09:00"
    },
    ]
    return sample_data

# OpenAPI仕様をFastAPIアプリケーションに追加
with open("openapi.v1.yaml", "r") as f:
    openapi_spec = yaml.safe_load(f)

@app.get("/openapi.json", include_in_schema=False)
async def get_openapi():
    return app.openapi_schema

# 外部APIの呼び出し
@app.get("/api/corporate")
async def get_corporate_data(params: QueryParams = Depends()):
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