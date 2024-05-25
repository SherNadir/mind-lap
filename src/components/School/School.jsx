import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { SvrilIcon, BookIcon } from "@/svgs/icons";
import Image from "next/image";

export const School = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative ">
      <div className="absolute top-10 left-10">
        <SvrilIcon />
      </div>
      <div className="absolute top-10 right-10">
        <SvrilIcon />
      </div>
      <div className="content w-full md:w-4/5 flex-col md:flex md:flex-row items-center gap-4 m-auto my-8">
        <div className="w-10/12 m-auto md:w-1/2">
          <Image
            src="/images/schoolImage.png"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-11/12 m-auto md:w-1/2">
          <p className="mt-5 text-6xl text-dark text-center md:text-start">
            {t("GET_IN_TOUCH")}
          </p>
          <p
            className={`text-4xl font-medium text-dark-200 text-center md:text-start`}
          >
            {t("SCHOOL_DESC")}
          </p>
          <div className="flex justify-center md:justify-start mb-10 md:mb-0">
            <button
              className={`mt-12 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
            >
              {t("GET_STARTED")}
            </button>
          </div>
          <div className="w-full flex  justify-center md:justify-end">
            <BookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
