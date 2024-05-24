"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import courseBanner from "../../../public/images/courseBanner.png";
import backgroundShapes from "../../../public/images/backgroundShapes.png";
import { BellIcon } from "@/svgs/BellIcon";
import Input from "../Input";

export const RoadMap = ({ lng }) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center text-start bg-white min-h-[320px] justify-center pb-12 mt-12 w-10/12 m-auto">
      <div className="flex flex-col items-start mt-12 w-full">
        <p className="mt-5 text-base text-primary font-semibold">
          {t("OUR_ROAD_MAP")}
        </p>
        <p className="w-4/5 lg:w-full mt-5 text-6xl text-dark-300 font-semibold">
          {t("OUR_CAREER")}
          <span className="text-primary"> {t("GUIDANCE_PLATFORM")}</span>
          <br />
          {t("FOR_TEENS")}
        </p>
        <p className="w-4/5 lg:w-full mt-5 text-base font-normal text-dark">
          {t("PARTICIPATE_AND_HAVE_AN_INFLUENCE")}
        </p>
      </div>
    </div>
  );
};
