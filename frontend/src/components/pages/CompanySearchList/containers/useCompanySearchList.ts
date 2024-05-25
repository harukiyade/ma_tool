import useSWR from "swr";
import { Corporate } from "@/api/corporate/ResTypes";
import { CorporateQueryParams } from "@/api/corporate/ReqTypes";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useCompanySearchList = (params: CorporateQueryParams) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // パラメータオブジェクトをクエリ文字列に変換する関数
  const queryParamsToString = (params: CorporateQueryParams): string => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value);
      }
    });
    return queryParams.toString();
  };

  /** クエリパラメータとして使用できる文字列に変換(パラメータはURLエンコード化される) */
  const query = queryParamsToString(params);

  const { data, error, isLoading } = useSWR<Corporate>(
    `${backendUrl}/api/corporate?${query}`,
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

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useCompanySearchList;
