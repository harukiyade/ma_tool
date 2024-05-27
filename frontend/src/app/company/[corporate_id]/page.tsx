import { CompanyDetail } from "@/components/pages/CompanySearchList/CompanyDetail/containers";

export default function Page({ params }: { params: { corporate_id: string } }) {
  return <CompanyDetail id={params.corporate_id} />;
}
