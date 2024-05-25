/** corporate APIのリクエストパラメータ型 */
export interface CorporateQueryParams {
  name: string;
  corporate_number?: string;
  exist_flg?: string;
  corporate_type?: string;
  prefecture?: string;
  city?: string;
  capital_stock_from?: string;
  capital_stock_to?: string;
  employee_number_from?: string;
  employee_number_to?: string;
  founded_year?: string;
  sales_area?: string;
  business_item?: string;
  unified_qualification?: string;
  unified_qualification_sub01?: string;
  unified_qualification_sub02?: string;
  unified_qualification_sub03?: string;
  unified_qualification_sub04?: string;
  net_sales_summary_of_business_results_from?: string;
  net_sales_summary_of_business_results_to?: string;
  net_income_loss_summary_of_business_results_from?: string;
  net_income_loss_summary_of_business_results_to?: string;
  total_assets_summary_of_business_results_from?: string;
  total_assets_summary_of_business_results_to?: string;
  name_major_shareholders?: string;
  average_continuous_service_years?: string;
  average_age?: string;
  month_average_predetermined_overtime_hours?: string;
  female_workers_proportion?: string;
  year?: string;
  ministry?: string;
  source?: string;
  page?: string;
  limit?: string;
}
