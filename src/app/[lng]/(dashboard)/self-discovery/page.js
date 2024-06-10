import SelfDiscovery from "@/containers/SelfDiscovery";

export default async function Page({ params: { lng } }) {
  return <SelfDiscovery lng={lng} />;
}
