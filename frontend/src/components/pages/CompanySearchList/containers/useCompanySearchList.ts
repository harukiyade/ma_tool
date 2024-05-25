import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useCompanySearchList = () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${backendUrl}/api/corporate`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCompanySearchList;
