"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

export const Hero = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="content w-4/5  m-auto mb-10 sm:mb-[100px]">
      <div className="w-full flex flex-col text-center lg:text-start lg:w-3/5 ">
        <p className={`text-4xl text-dark mt-10 `}>{t("FUTURE")}</p>
        <p className="mt-5 lg:mt-[44px] text-6xl sm:text-7xl text-primary">
          MINDELAP
        </p>
        <p className="mt-0 mb-4 text-6xl sm:text-7xl text-dark-100 leading-[60px]">
          {t("DISCOVER_YOUR_DREAM")}
        </p>
        <p className={`text-4xl font-medium text-dark-200 `}>
          {t("DESCRIPTION")}
        </p>
      </div>
      <div className="hidden lg:flex lg:absolute right-0 top-0 w-2/5">
        <Image
          src="/images/heroImage.png"
          alt="Hero Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex px-3 sm:px-8 py-3 bg-white rounded-full gap-0 sm:gap-4 max-w-[40rem] justify-between border border-grey-light mt-10 sm:mt-[80px]">
        <div>
          <p className="text-primary text-sm font-normal">
            {t("REGISTER_YOUR_EMAIL")}
          </p>
          <input
            type="text"
            className="text-base font-semibold text-dark focus:outline-none sm:w-auto w-full"
            placeholder="student@gmail.com"
          ></input>
        </div>
        <button
          className={` text-base font-medium text-white bg-primary py-3 px-3 sm:px-8 rounded-full`}
        >
          {t("SUBMIT")}
        </button>
      </div>
    </div>
  );
};
