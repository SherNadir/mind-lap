"use client";

import React from "react";
import { Sidebar, ChatRoom } from "./elements";
import { useInbox } from "@/contexts/Inbox";
import { useScreenWidth } from "@/hooks";
import ContentWrapper from "@/components/ContentWrapper";

export const AskAI = ({ lng }) => {
  const { selectedContact } = useInbox();
  const width = useScreenWidth();
  return (
    <ContentWrapper lng={lng} pageName="Ask AI">
      <ChatRoom />
    </ContentWrapper>
  );
};
