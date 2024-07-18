/** corporate APIのリクエストパラメータ型 */
// TODO: テーブル定義に合わせる
export interface CompanySearchParams {
  name?: string;
  corporateNumber?: string;
  existFlg?: string;
  corporateType?: string;
  prefecture?: string;
  city?: string;
  capitalStockFrom?: string;
  capitalStockTo?: string;
  employeeNumberFrom?: string;
  employeeNumberTo?: string;
  foundedYear?: string;
  salesArea?: string;
  businessItem?: string;
  unifiedQualification?: string;
  unifiedQualificationSub01?: string;
  unifiedQualificationSub02?: string;
  unifiedQualificationSub03?: string;
  unifiedQualificationSub04?: string;
  netSalesSummaryOfBusinessResultsFrom?: string;
  netSalesSummaryOfBusinessResultsTo?: string;
  netIncomeLossSummaryOfBusinessResultsFrom?: string;
  netIncomeLossSummaryOfBusinessResultsTo?: string;
  totalAssetsSummaryOfBusinessResultsFrom?: string;
  totalAssetsSummaryOfBusinessResultsTo?: string;
  nameMajorShareholders?: string;
  averageContinuousServiceYears?: string;
  averageAge?: string;
  monthAveragePredeterminedOvertimeHours?: string;
  femaleWorkersProportion?: string;
  year?: string;
  ministry?: string;
  source?: string;
  page?: string;
  limit?: string;
}
