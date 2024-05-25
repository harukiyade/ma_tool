from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import requests

app = FastAPI()
# TODO: api_tokenは環境ファイルに移動する。
api_token = "6IGiKYADLPU7YdsqRHPOtSWU8mJcyAgm"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET"],
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