import Home from "@/containers/Home";

export default async function Page({ params: { lng } }) {
  return <Home lng={lng} />;
}
