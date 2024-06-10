"use client";

import React from "react";
import { Sidebar, ChatRoom } from "./elements";
import { useInbox } from "@/contexts/Inbox";
import { useScreenWidth } from "@/hooks";
import ContentWrapper from "@/components/ContentWrapper";

export const AskAI = () => {
  const { selectedContact } = useInbox();
  const width = useScreenWidth();
  return (
    <ContentWrapper pageName="Ask AI">
      <ChatRoom />
    </ContentWrapper>
  );
};
