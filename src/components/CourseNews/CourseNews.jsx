"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import courseBanner from "../../../public/images/courseBanner.png";
import backgroundShapes from "../../../public/images/backgroundShapes.png";
import { BellIcon } from "@/svgs/BellIcon";
import Input from "../Input";

export const CourseNews = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative bg-[#f7fff7] flex  w-full">
      <div className="flex items-end justify-center flex-col relative h-full md:h-[640px] w-11/12 md:w-4/5 m-auto boxShadow-sm ">
        <div className="hidden md:block absolute left-[10%] w-[500px] h-[100%] ">
          <Image src={courseBanner} alt="Course News" fill />
        </div>
        <div
          className="hidden md:flex items-center absolute top-[30%] left-[1rem] bg-white/60 rounded-[16px] shadow boxShadow-md z-10"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className=" pr-8 py-4 pl-9 h-full">
            <BellIcon />
          </div>
          <div className="py-4 pr-6 w-full max-w-[196px]">
            <h1 className="text-dark-500 font-bold text-xl w-full">
              {t("NEW_INTERVIEW")}
            </h1>
            <p className="text-dark-600 text-sm font-medium">
              {t("YOU_HAVE_AN_INTERVIEW_NEXT_WEEK")}
            </p>
          </div>
        </div>
        <div className="overflow-hidden relative top-[24px] flex items-center bg-primary rounded-[2rem] z-0 w-full py-8 px-4 max-w-[1230px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] text-white w-full">
            <h2 className="flex-1 text-3xl font-bold max-w-[436px] text-center">
              {t("NEVER_WANT_TO_MISS_ANY_JOB_COURSES_NEWS")}
            </h2>
            <div className="flex items-center flex-1 z-10 w-full md:w-auto">
              <Input
                placeholder={t("ENTER_YOUR_EMAIL_ADDRESS_HERE")}
                buttonText={t("SUBSCRIBE")}
                padding="p-2"
                fontSize="text-sm"
                buttonSize="items-center justify-center px-3 py-0"
              />
            </div>
            <div>
              <div className="absolute right-[-30%] top-[-350%] w-[884px] h-[844px] rotate-[20deg] z-0">
                <Image src={backgroundShapes} alt="background-shapes" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
