import AskAI from "@/containers/AskAI";
import { InboxProvider } from "@/contexts/Inbox";

export default async function Page({ params: { lng } }) {
  return (
    <InboxProvider>
      <AskAI lng={lng} />
    </InboxProvider>
  );
}
