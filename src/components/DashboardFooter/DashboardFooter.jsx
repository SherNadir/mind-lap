"use client"

import Link from "next/link";
import React from "react";
import { PointerIcon, TextLogo } from "@/svgs/icons";
import Image from "next/image";

export const DashboardFooter = () => {
  return (
    <div className=" py-4 m-6 bg-white ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex lg:flex-row items-center gap-10 md:gap-0 justify-around">
          <div className="flex flex-col gap-10 justify-center">
            <div className="text-center w-full">
              <div className="text-primary">
                <TextLogo className="w-full" />
              </div>
            </div>
            <div>
              <p className="text-dark-700 text-[10px] font-normal">
                Download the app by clicking the link below :
              </p>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex h-8 ">
                <Image
                  src="/images/appleStore.png"
                  alt="Hero Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex  h-8 ">
                <Image
                  src="/images/googlePlay.png"
                  alt="Hero Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="text-dark-700 flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-medium">Help Links</h1>
            <div className="flex flex-col gap-2 mt-6 items-center md:items-start">
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                How its Work
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Mentor
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Carrier Guidance
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center  md:items-start">
            <h1 className="text-2xl font-medium text-dark-700">Legal</h1>
            <div className="flex flex-col gap-2 mt-6 items-center md:items-start">
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Terms
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Privacy
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-dark-700 hover:text-primary w-fit "
              >
                Cookies
              </Link>
            </div>
          </div>
          <div className="text-dark-700 flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-medium">Contact</h1>
            <p className="text-dark-700 mt-6 text-text-lg font-light">
              maxmuster@gmail.com
            </p>
            <div className="text-dark-700 flex items-center md:items-start gap-4 mt-2.5 ">
              <PointerIcon />
              <p className="text-text-lg font-light text-dark-700">
                Zurich Switzerland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
