"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Logo } from "@/svgs/icons";
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
    <div className="my-[5.5rem] md:my-0 ">
      <div className="relative bg-[#E9EFF2] w-full m-auto flex h-[85vh]">
        <div className=" bg-white h-auto w-80 my-6  px-6 pt-10 hidden md:flex flex-col justify-between">
          <div>
            {navigation?.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={cls(
                    `flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer hover:bg-primary hover:text-white  ${
                      activeLink === item.id
                        ? "text-white bg-primary"
                        : "text-dark"
                    }`
                  )}
                  href={`/${item.href}`}
                >
                  <div className="flex items-center">
                    <button type="button">{item.icon}</button>
                    <div className="ml-2.5">
                      <p className="  text-sm	">{item.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="h-10 bg-grey-800 w-full rounded-xl flex items-center justify-center mb-5 hover:bg-grey-300 cursor-pointer">
            <p className="text-white">logout</p>
          </div>
        </div>
        <div className="w-full m-6 bg-white p-6">
          <p>{t("SCHOOL_DESC")}</p>
        </div>
      </div>
    </div>
  );
};
