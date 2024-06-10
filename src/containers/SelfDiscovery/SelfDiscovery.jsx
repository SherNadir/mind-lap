"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import ContentWrapper from "@/components/ContentWrapper";
import Discovery from "@/components/Discovery";

export const SelfDiscovery = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <ContentWrapper lng={lng} pageName="Self Discovery">
      <Discovery lng={lng} />
    </ContentWrapper>
  );
};
