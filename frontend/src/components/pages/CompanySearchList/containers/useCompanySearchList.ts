import useSWR from "swr";
import { Corporate } from "@/api/types";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useCompanySearchList = (name: string) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error, isLoading } = useSWR<Corporate>(
    `${backendUrl}/api/corporate?name=${name}`,
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
