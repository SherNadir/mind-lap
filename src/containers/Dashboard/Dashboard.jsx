"use client";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import Hero from "@/app/[lng]/components/Hero";
import Partners from "@/app/[lng]/components/Partners";
import Services from "@/app/[lng]/components/Services";
import Survey from "@/app/[lng]/components/Survey";
import Job from "@/app/[lng]/components/Job";
import SurveyForm from "@/app/[lng]/components/SurveyForm";

export const Dashboard = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative h-[calc(100vh-15rem)] w-full m-auto">
      <Hero lng={lng} />

      <Partners lng={lng} />

      <Services lng={lng} />

      <Survey lng={lng} />

      <Job lng={lng} />

      <SurveyForm lng={lng} />
    </div>
  );
};
