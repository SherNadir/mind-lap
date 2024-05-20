"use client";

import { SvrilIcon } from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

export const Survey = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12 mt-12">
      <div className="flex flex-col items-center mt-12">
        <p className="mt-5 text-base text-primary font-semibold">
          {t("AI_ON_JOB_FINDING")}
        </p>
        <p className="w-4/5 lg:w-full mt-5 text-6xl text-dark-300 font-semibold">
          {t("SURVEY")}: {t("IMPACT_OF_AI_ON")}
          <span className="text-primary"> {t("JOB_FINDING")}</span>
          <br />
          {t("FOR_TEENS")}
        </p>
        <p className="w-4/5 lg:w-full mt-5 text-base font-normal text-dark">
          {t("PARTICIPATE_AND_HAVE_AN_INFLUENCE")}
        </p>
      </div>
      <button
        className={`mt-12 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
      >
        {t("TAKE_PART_IN_SURVEY")}
      </button>
      <div className="absolute top-10 left-10">
        <SvrilIcon />
      </div>
      <div className="absolute top-10 right-10">
        <SvrilIcon />
      </div>
    </div>
  );
};
