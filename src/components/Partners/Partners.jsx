"use client";

import {
  SvrilIcon,
  SisiphusIcon,
  LeafIcon,
  DotMatrixIcon,
  CircleIcon,
  CatalogueIcon,
  QuoteIcon,
} from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";

export const Partners = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div
      id="partners"
      className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12"
    >
      <div className="flex flex-col items-center mt-12">
        <DotMatrixIcon />
        <p className="mt-5 text-6xl text-dark-300 font-semibold">
          {t("OUR_PARTNERS")}
        </p>
        <p className="mt-5 text-base font-semibold text-dark">
          {t("JOIN_4000_COMPANIES")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-20">
        <div className="flex items-center gap-4">
          <LeafIcon />
          <p>Layers</p>
        </div>
        <div className="flex items-center gap-4">
          <SisiphusIcon />
          <p>Sisiphus</p>
        </div>
        <div className="flex items-center gap-4">
          <CircleIcon />
          <p>Layers</p>
        </div>
        <div className="flex items-center gap-4">
          <CatalogueIcon />
          <p>Layers</p>
        </div>
        <div className="flex items-center gap-4">
          <QuoteIcon />
          <p>Layers</p>
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
