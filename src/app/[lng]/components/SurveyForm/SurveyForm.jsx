"use client";

import { SvrilIcon } from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

export const SurveyForm = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12 mt-12 ">
      <div className="flex flex-col items-center mt-12">
        <p className="mt-5 text-6xl text-dark-300 font-semibold">
          {t("TAKE_THE_SURVEY")}
        </p>
        <p className="w-4/5 lg:w-full mt-5 text-base font-normal text-dark">
          {t("HELP_US_UNDERSTAND")}
        </p>
      </div>
      <div className="w-11/12 sm:w-1/2 m-auto justify-center">
        <div className="flex flex-col  items-start w-full justify-center mt-6">
          <label className="text-sm font-medium text-dark">{t("NAME")}</label>
          <input
            type="text"
            placeholder={t("ENTER_YOUR_NAME")}
            className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
          ></input>
        </div>
        <div className="flex flex-col  items-start w-full justify-center mt-6">
          <label className="text-sm font-medium text-dark">{t("AGE")}</label>
          <input
            type="text"
            placeholder={t("ENTER_YOUR_AGE")}
            className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
          ></input>
        </div>
        <div className="flex flex-col  items-start w-full justify-center mt-6">
          <label className="text-sm font-medium text-dark">
            {t("EXPERIENCE_WITH_JOB_SEARCH")}
          </label>
          <input
            type="text"
            placeholder={t("BREIFLY_DESCRIBE_YOUR_EXPERIENCE")}
            className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
          ></input>
        </div>
        <button
          className={`mt-6 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
        >
          {t("SUBMIT")}
        </button>
      </div>

      <div className="absolute top-10 left-10">
        <SvrilIcon />
      </div>
      <div className="absolute top-10 right-10">
        <SvrilIcon />
      </div>
    </div>
  );
};
