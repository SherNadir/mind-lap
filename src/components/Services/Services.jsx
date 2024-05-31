"use client";

import {
  ServiceIcon,
  MentorsIcon,
  CalenderIcon,
  AIIcon,
  AssesmentIcon,
  ExploreIcon,
  GamifiedIcon,
} from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

export const Services = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center mt-14 pb-12">
      <div className="flex flex-col items-center w-4/5">
        <p className="mt-5 text-4xl text-primary font-semibold">
          {t("OUR_SERVICES")}
        </p>
        <p className="mt-20 lg:mt-5 text-6xl text-dark-300 font-semibold">
          {t("WHY_SHOULD_YOU_CHOOSE")}
        </p>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mt-10">
        <div className=" border-primary rounded-[18px]  flex shadow-sm blur-14 flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <MentorsIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("EXPERIENCE_MENTORS")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("EXPERIENCE_DESCRIPTION")}
          </p>
        </div>
        <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <CalenderIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("CREATIVE_PROGRAMS")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("CREATIVE_DESCRIPTION")}
          </p>
        </div>
        <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <AIIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("CAREER_FINDER")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("CAREER_DESCRIPTION")}
          </p>
        </div>
        <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <AssesmentIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("CAREER_ASSESMENT")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("ASSESMENT_DESCRIPTION")}
          </p>
        </div>
        <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <ExploreIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("EXPLORE_CAREER")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("EXPLORE_CAREER_DESCRIPTION")}
          </p>
        </div>
        <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8 hover:border hover:border-primary cursor-pointer">
          <GamifiedIcon />
          <p className="mt-7 text-4xl font-medium text-dark">
            {t("PERSONALIZED_GAMIFIED")}
          </p>
          <p className="mt-7 text-sm font-normal text-dark-400">
            {t("PERSONALIZED_GAMIFIED_DESCRIPTION")}
          </p>
        </div>
      </div>
      <div className="absolute top-10 left-10">
        <ServiceIcon />
      </div>
      <div className="absolute top-10 right-10">
        <ServiceIcon />
      </div>
    </div>
  );
};
