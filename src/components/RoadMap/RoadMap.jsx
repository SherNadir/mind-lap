"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import {
  AppIcon,
  CheckIcon,
  HeartIcon,
  LayerIcon,
  LighteningIcon,
  PathIcon,
  StarIcon,
  SvrilIcon,
} from "@/svgs/icons";

export const RoadMap = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative">
      <div className=" flex flex-col items-center text-start  min-h-[320px] justify-center pb-12 mt-12 w-4/5 m-auto">
        <div className="flex flex-col items-start mt-12 w-full">
          <p className="mt-5 text-base text-primary font-semibold">
            {t("OUR_ROAD_MAP")}
          </p>
          <p className="w-4/5 lg:w-full mt-5 text-6xl text-dark-300 font-semibold">
            {t("OUR_CAREER")}
            <span className="text-primary"> {t("GUIDANCE_PLATFORM")}</span>
            <br />
            {t("ROAD_MAP")}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center bg-primary">
                <CheckIcon className="min-w-4 min-h-4 max-w-4 max-h-4 text-white" />
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <AppIcon className="min-w-8 min-h-8 max-w-8 max-h-8 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                1.{t("CREATE_AI_POWERED_APP")}
              </p>
              <p className="mt-5 text-dark font-normal">
                {t("DEVELOPMENT_OF_APP")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center border">
                <p className="text-sm text-dark">02</p>
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <StarIcon className="min-w-8 min-h-8 max-w-8 max-h-8 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                2.{t("INTEGRATION")}
              </p>
              <p className="mt-5 text-dark font-normal">{t("IMPLEMENT")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center border">
                <p className="text-sm text-dark">03</p>
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <LayerIcon className="min-w-8 min-h-8 max-w-8 max-h-8 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                3.{t("JOB_PORTAL")}
              </p>
              <p className="mt-5 text-dark font-normal">
                {t("CENTRAL_PORTAL")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center border">
                <p className="text-sm text-dark">04</p>
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <HeartIcon className="min-w-8 min-h-8 max-w-8 max-h-8 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                4.{t("COACHING")}
              </p>
              <p className="mt-5 text-dark font-normal">{t("EMBARK")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center border">
                <p className="text-sm text-dark">05</p>
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <PathIcon className="min-w-5 min-h-5 max-w-5 max-h-5 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                5.{t("EXPANSION")}
              </p>
              <p className="mt-5 text-dark font-normal">{t("ADAPTING")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full min-w-8 min-h-8 max-w-8 max-h-8 text-white flex items-center justify-center border">
                <p className="text-sm text-dark">06</p>
              </div>
              <div className="line h-1 bg-primary w-full"></div>
            </div>
            <div>
              <div className="rounded-full min-w-14 min-h-14 max-w-14 max-h-14 text-white flex items-center justify-center bg-primary">
                <LighteningIcon className="min-w-6 min-h-6 max-w-6 max-h-6 text-white" />
              </div>
              <p className="mt-5 text-base text-dark font-semibold">
                6.{t("COMING_SOON")}
              </p>
              <p className="mt-5 text-dark font-normal">{t("DESC")}</p>
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
