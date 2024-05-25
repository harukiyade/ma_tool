import useSWR from "swr";
import { Corporate } from "@/api/types";

const useCompanySearchList = () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error, isLoading } = useSWR<Corporate>(
    `${backendUrl}/api/corporate`,
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
