"use client";

import React from "react";
import { PinkRobot } from "@/svgs/icons";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

export const Discovery = ({ lng }) => {
  const { t } = useTranslation(lng);

  return (
    <div className="min-h-[75vh]">
      <div className="mt-10 flex flex-col gap-5">
        <div>
          <p className="text-4xl font-medium text-dark-700">Career Explorer</p>
        </div>
        <div>
          <p className="text-sm font-normal text-dark-700">
            Compare yourself with the professional world
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-wrap rounded-lg bg-primary h-10 w-full lg:w-[280px] items-center justify-center ">
            <p className="text-white text-sm font-medium">Internal Questions</p>
          </div>
          <div className="flex rounded-lg bg-white border border-dark-700 h-10 w-full lg:w-[280px] items-center justify-center ">
            <p>Directory of Professions</p>
          </div>
          <div className="flex rounded-lg bg-white border border-dark-700 h-10 w-full lg:w-[280px] items-center justify-center ">
            <p>Career choice check</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-10 flex-wrap xl:flex-nowrap w-full h-[380px]">
        <div className="w-full xl:w-[50%]">
          <div className="flex gap-4 border border-dark-900 rounded-lg py-5 px-3 mb-6 h-32 min-h-32">
            <div className="">
              <PinkRobot className="w-20 h-20" />
            </div>
            <div className="">
              <p className="text-4xl font-medium text-dark-700 flex">
                Career Assesment
              </p>
              <p className="text-sm font-normal text-dark">
                Discover your interests
              </p>
            </div>
          </div>

          <div className="flex flex-col border border-dark-900 rounded-lg px-3  mb-6">
            <div className="flex items-center gap-2 border-b border-grey-700 p-3">
              <Image
                src={"/images/compassColor.png"}
                alt="compasss colored"
                width={50}
                height={50}
              />
              <p>Interest Compass</p>
            </div>
            <div className="flex items-center gap-2 border-b border-grey-700 p-3">
              <Image
                src={"/images/booksColor.png"}
                alt="compasss colored"
                width={50}
                height={50}
              />
              <p>Making a list of Professions</p>
            </div>
            <div className="flex items-center gap-2 p-3">
              <Image
                src={"/images/startColor.png"}
                alt="compasss colored"
                width={50}
                height={50}
              />
              <p>Checking your favorite Professions</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center xl:justify-start xl:w-[50%]">
          <Image
            src={"/images/kidsImage.png"}
            alt="kids"
            width={470}
            height={470}
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};
