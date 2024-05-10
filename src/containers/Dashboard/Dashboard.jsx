"use client";

import { urbanist } from "@/app/fonts";
import Image from "next/image";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="relative h-[calc(100vh-15rem)] flex w-full m-auto">
      <div className="content w-4/5  m-auto">
        <div className="w-full flex flex-col text-center lg:text-start lg:w-3/5 ">
          <p className={`text-4xl text-dark ${urbanist.className} `}>
            Make bigger futures for our kids.
          </p>
          <p className="mt-[44px] text-6xl text-primary">MINDELAP</p>
          <p className="mt-0 text-6xl text-dark-100">
            Discover Your Dream Career
          </p>
          <p
            className={`text-4xl font-medium text-dark-200 ${urbanist.className}`}
          >
            Embark on a career adventure with FuturePath Explorer! Our
            child-friendly AI guides young explorers through exciting career
            possibilities based on their interests. Safe, fun, and educational –
            start discovering future dreams today!
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
      </div>
    </div>
  );
};
