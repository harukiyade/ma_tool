import axios from "axios";
import useSWR from "swr";
import { CampanySearchParams } from "@/api/corporate/ReqTypes";
import { CorporateDetailList } from "@/api/corporate/ResTypes";

const fetcher = async (url: string, params: CampanySearchParams) => {
  const response = await axios.post(url, params);
  return response.data;
};

const useCompanySearchList = (params: CampanySearchParams) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR<CorporateDetailList>(
    { url: `${backendUrl}/api/companies`, params },
    ({ url, params }) => fetcher(url, params),
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
    isError: error,
  };
};

export default useCompanySearchList;
