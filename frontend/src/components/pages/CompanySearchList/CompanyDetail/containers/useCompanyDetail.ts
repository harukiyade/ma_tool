import axios from "axios";
import useSWR from "swr";
import { CompanySearchParams } from "@/api/corporate/ReqTypes";
import { CorporateDetail } from "@/api/corporate/ResTypes";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const useCompanyDetail = (
  param: Pick<CompanySearchParams, "corporateNumber">
) => {
  /** バックエンドAPIへのエンドポイント */
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  /** 初期データ取得API */
  const { data, error, isLoading } = useSWR<CorporateDetail>(
    `${backendUrl}/api/companies/detail?corporateNumber=${param.corporateNumber}`,
    fetcher,
    {
      onSuccess(data) {
        return data;
      },
      onError(error) {
        console.log("swr returns error", error);
      },
    }
  );

  /** 企業名 */
  const name = data?.name ?? "";

  /** 基本情報に使用する情報(抜粋) */
  const basicInfo: BasicInfoType = {
    companyUrl: data?.companyUrl ?? "",
    postalCode: data?.postalCode ?? "",
    location: data?.location ?? "",
    businessItems: data?.businessItems ?? [],
    foundingYear: data?.foundingYear ?? 0,
    representativeName: data?.representativeName ?? "",
  };

  return {
    name,
    basicInfo,
    isError: error,
    isLoading,
  };
};

export type BasicInfoType = Pick<
  CorporateDetail,
  | "companyUrl"
  | "postalCode"
  | "location"
  | "businessItems"
  | "foundingYear"
  | "representativeName"
>;
export default useCompanyDetail;
