"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  BackIcon,
  BellIcon,
  Logo,
  PinkRobot,
  QuestionIcon,
} from "@/svgs/icons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import { ArrowDownIcon } from "@/svgs/icons";
import { navigation } from "./data";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

export const Dashboard = ({ lng }) => {
  const { t } = useTranslation(lng);
  const [activeLink, setActiveLink] = useState("home");
  const menuItems = ["Update Profile Image", "Account Settings", "Log Out"];
  const pathname = usePathname();
  const router = useRouter();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];

  // useEffect(() => {
  //   setActiveLink(`/${lastPart}`);
  // }, [router, pathname]);

  const newLocale = pathname.includes("/en") ? "de" : "en";
  return (
    <div className="my-[5.5rem] md:my-0  w-full bg-[#E9EFF2]">
      <div className="relative  w-full m-auto flex h-full">
        <div className="w-full m-6 bg-white p-8">
          <div className="flex justify-between items-center">
            <div className="bg-grey-100 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:text-primary">
              <BackIcon />
            </div>
            <div>
              <p className="text-4xl font-bold text-dark-700">Self Discovery</p>
            </div>
            <div className="">
              <QuestionIcon />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-8">
            <div>
              <p className="text-4xl font-medium text-dark-700">
                Career Explorer
              </p>
            </div>
            <div>
              <p className="text-sm font-normal text-dark-700">
                Compare yourself with the professional world
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex rounded-lg bg-primary py-3 w-[280px] items-center justify-center ">
                <p className="text-white text-sm font-medium">
                  Internal Questions
                </p>
              </div>
              <div className="flex rounded-lg bg-white border border-dark-700 py-3 w-[280px] items-center justify-center ">
                <p>Directory of Professions</p>
              </div>
              <div className="flex rounded-lg bg-white border border-dark-700 py-3 w-[280px] items-center justify-center ">
                <p>Career choice check</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-20">
            <div className="w-[60%]">
              <div className="flex gap-4 border border-dark-900 rounded-lg py-5 px-3 w-[40%] mb-6">
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

              <div className="flex flex-col gap-4 border border-dark-900 rounded-lg py-2 px-3  mb-6">
                <div className="flex items-center gap-2 border-b border-grey-700 py-3">
                  <Image
                    src={"/images/compassColor.png"}
                    alt="compasss colored"
                    width={50}
                    height={50}
                  />
                  <p>Interest Compass</p>
                </div>
                <div className="flex items-center gap-2 border-b border-grey-700 py-3">
                  <Image
                    src={"/images/booksColor.png"}
                    alt="compasss colored"
                    width={50}
                    height={50}
                  />
                  <p>Making a list of Professions</p>
                </div>
                <div className="flex items-center gap-2 py-3">
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
            <div className="w-[40%]">
              <Image
                src={"/images/kidsImage.png"}
                alt="kids"
                width={520}
                height={520}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
