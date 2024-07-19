import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { CompanySearchParams } from "@/api/corporate/ReqTypes";
import { CorporateDetailList } from "@/api/corporate/ResTypes";

const fetcher = async (url: string, params: CompanySearchParams) => {
  const response = await axios.post(url, params);
  return response.data;
};

const useCompanySearchList = (params: CompanySearchParams) => {
  /** バックエンドAPIへのエンドポイント */
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  /** 検索パラメータの更新を検知するstate */
  const [apiParams, setApiParams] = useState<CompanySearchParams>(params);

  /** 初期データ取得API */
  const { data, error, isLoading } = useSWR<CorporateDetailList>(
    [`${backendUrl}/api/companies`, apiParams],
    ([url]) => fetcher(url, apiParams),
    {
      onSuccess(data) {
        return data;
      },
      onError(error) {
        console.log("swr returns error", error);
      },
    }
  );

  /** 検索ボタン押下時に検索を走らせる */
  const handleSearch = (params: CompanySearchParams) => {
    setApiParams(params);
    mutate([`${backendUrl}/api/companies`, apiParams]);
  };

  return {
    data,
    isError: error,
    isLoading,
    handleSearch,
  };
};

export default useCompanySearchList;
