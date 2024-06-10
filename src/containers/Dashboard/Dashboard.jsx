"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import ContentWrapper  from '@/components/ContentWrapper';
import Home from "@/components/Home";

export const Dashboard = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
      <Home lng={lng} />
  );
};
