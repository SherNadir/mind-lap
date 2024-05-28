import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { SvrilIcon, BookIcon } from "@/svgs/icons";
import Image from "next/image";

export const Company = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="content bg-white w-full pt-10">
      <div className="w-4/5 flex-col md:flex md:flex-row items-center  m-auto mb-8">
        <div className="w-full lg:w-4/5 h-[28rem] bg-[#E2E8F0] rounded-l-2xl px-4 lg:pl-20 lg:pr-4 flex flex-col gap-4 md:gap-8 justify-center items-center md:items-start">
          <p className="text-2xl md:text-6xl text-dark text-center lg:text-start">
            {t("GET_IN_TOUCH")}
          </p>
          <p
            className={`text-sm md:text-4xl font-medium text-dark-200 text-center md:text-start`}
          >
            {t("SCHOOL_DESC")}
          </p>
          <div className="flex justify-center md:justify-start mb-10 md:mb-0 gap-5">
            <button
              className={`text-base font-medium text-white bg-primary py-3 px-8 rounded-full hover:bg-primary-200`}
            >
              {t("GET_STARTED")}
            </button>
            <button
              className={`text-base font-bold text-dark border-2 border-dark py-3 px-8 rounded-full hover:bg-dark hover:text-white`}
            >
              Explore All Career
            </button>
          </div>
        </div>

        <div className="w-2/6 h-[28rem] hidden lg:block">
          <Image
            src="/images/man.png"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};
