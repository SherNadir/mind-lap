import Dashboard from "@/containers/Dashboard";

export default async function Page({ params: { lng } }) {
  return <Dashboard lng={lng} />;
}
