"use client";

import { SvrilIcon } from "@/svgs/icons";
import Image from "next/image";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

export const Job = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative flex flex-col  min-h-[320px] justify-center pb-12">
      <div className="w-4/5 m-auto flex flex-col lg:flex lg:flex-row gap-4 lg:gap-16">
        <div className="flex flex-col mt-12">
          <div className="flex-col text-center lg:text-start">
            <p className="mt-5 text-6xl text-dark-300 font-semibold">
              {t("HOW_CAN")}
              <span className="text-primary"> {t("AI_HELP")}</span>
              <br />
              {t("IN_JOB_SEARCHES")}
            </p>
            <p className="mt-5 text-base font-normal text-dark">
              {t("SHARE_YOUR_OPINION")}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              className={`mt-12 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
            >
              {t("SHARE_YOUR_INSIGHTS")}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 gap-10">
          <div className="flex-col sm:flex sm:flex-row border p-4 gap-4 rounded-lg w-full">
            <div className="min-w-[100px] sm:max-w-[100px]">
              <Image
                src="/images/skillz.jpg"
                alt="Hero Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <p className="mt-5 text-base text-primary font-semibold">
                {t("PERSONIALIZED_RECOMENDATIONS")}
              </p>
              <p className="mt-1 text-base font-normal text-dark">
                {t("AI_CAN_PROVIDE")}
              </p>
            </div>
          </div>
          <div className="flex-col sm:flex sm:flex-row border p-4 gap-4 rounded-lg w-full">
            <div className="min-w-[100px] sm:max-w-[100px]">
              <Image
                src="/images/job.jpg"
                alt="Hero Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <p className="mt-5 text-base text-primary font-semibold">
                {t("EFFICIENT_JOB_MATCHING")}
              </p>
              <p className="mt-1 text-base font-normal text-dark">
                {t("DISCOVER_HOW_AI_CAN_MATCH")}
              </p>
            </div>
          </div>
        </div>
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
