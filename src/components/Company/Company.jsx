import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { SvrilIcon, BookIcon } from "@/svgs/icons";
import Image from "next/image";

export const Company = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="content bg-white w-full ">
      <div className="w-4/5 flex-col md:flex md:flex-row items-center gap-4 m-auto my-8 ">
        <div className=" md:w-3/5 bg-[#E2E8F0] rounded-2xl pl-20 py-5">
          <p className="text-6xl text-dark text-center md:text-start">
            {t("GET_IN_TOUCH")}
          </p>
          <p
            className={`text-4xl font-medium text-dark-200 text-center md:text-start`}
          >
            {t("SCHOOL_DESC")}
          </p>
          <div className="flex justify-center md:justify-start mb-10 md:mb-0">
            <button
              className={`text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
            >
              {t("GET_STARTED")}
            </button>
          </div>
        </div>

        <div className="w-2/5 m-auto md:w-1/2 ">
          <div className="w-10/12 m-auto md:w-1/2 ">
            <Image
              src="/images/man.png"
              alt="Hero Image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
