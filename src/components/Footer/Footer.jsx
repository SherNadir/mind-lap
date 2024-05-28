import { FacebookIcon } from "@/svgs/FacebookIcon";
import { LinkedinIcon } from "@/svgs/LinkedinIcon";
import { LogoBorder } from "@/svgs/LogoBorder";
import { TwitterIcon } from "@/svgs/TwitterIcon";
import Link from "next/link";
import React from "react";
import Input from "../Input";
import { Logo } from "@/svgs/Logo";

export const Footer = () => {
  return (
    <div className="bg-dark-700 py-20">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-10">
            <div className="text-center">
              <div className="text-white">
                <Logo />
              </div>
            </div>
            <div>
              <p className="text-grey-600">
                CAREER-MATCH is the largest talent platform in Swaziland and
                Zurich for career development and recruitment.
              </p>
            </div>
            <div className="flex">
              <Link href={"#"} className="py-2 pr-6 border-r border-grey-500">
                <FacebookIcon
                  className={
                    "text-white hover:text-primary hover:cursor-pointer"
                  }
                />
              </Link>
              <Link href={"#"} className="py-2 px-5 border-r border-grey-500">
                <LinkedinIcon
                  className={
                    "text-white hover:text-primary hover:cursor-pointer"
                  }
                />
              </Link>
              <Link href={"#"} className="py-2 px-5">
                <TwitterIcon
                  className={
                    "text-white hover:text-primary hover:cursor-pointer"
                  }
                />
              </Link>
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-medium">Help Links</h1>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                href={"#"}
                className="font-light text-lg text-grey-600 hover:text-primary w-fit "
              >
                How its Work
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-grey-600 hover:text-primary w-fit "
              >
                Mentor
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-grey-600 hover:text-primary w-fit "
              >
                Carrier Guidance
              </Link>
              <Link
                href={"#"}
                className="font-light text-lg text-grey-600 hover:text-primary w-fit "
              >
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-medium">Subscribe Our Newsletter</h1>
            <p className="text-grey-600 mt-6">
              Get the freshest job news and articles delivered to your inbox
              every week.
            </p>
            <div className="mt-6">
              <Input
                placeholder={"Email Address"}
                buttonText={"Submit"}
                noBorder
                fontSize={"text-base"}
                buttonSize={"text-base px-4 py-2"}
                padding={"px-5  py-2"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
