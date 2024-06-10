"use client";

import React from "react";
import { BackIcon, InfoIcon } from "@/svgs/icons";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";

export const ContentWrapper = ({ lng, pageName = "Home", children }) => {
  const { t } = useTranslation(lng);
  const router = useRouter();

  return (
    <div className="mb-0 mt-16 lg:mt-0 md:my-0  w-full bg-grey-1000">
      <div className="relative  w-full m-auto flex h-full">
        <div className="w-full m-6 bg-white p-8">
          <div className="flex justify-between items-center">
            <div
              className="bg-grey-100 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:text-primary"
              onClick={() => router.push(`/${lng}/dashboard`)}
            >
              <BackIcon />
            </div>
            <div>
              <p className="text-4xl font-bold text-dark-700">{pageName}</p>
            </div>
            <div className="text-dark-70 cursor-pointer">
              <InfoIcon className="w-8 h-8" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
