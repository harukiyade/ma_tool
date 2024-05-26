export default function Page({ params }: { params: { corporate_id: string } }) {
  return <h1>My Page{params.corporate_id}</h1>;
}
