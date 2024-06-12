"use client";

import React, { useState } from "react";
import cls from "classnames";
import { navigation } from "./data";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { LogoutIcon } from "@/svgs/LogoutIcon";

export const Sidebar = ({ lng }) => {
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
    <div className="bg-white  w-80 my-6  px-6 pt-10 hidden md:flex flex-col justify-between">
      <div>
        {navigation?.map((item, index) => {
          return (
            <div
              key={index}
              className={cls(
                `flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer hover:bg-primary-200 hover:text-white  ${
                  lastPart === item.id ? "text-white bg-primary" : "text-dark"
                }`
              )}
              onClick={() => router.push(`/${lng}/${item.href}`)}
            >
              <div className="flex items-center">
                <button type="button">{item.icon}</button>
                <div className="ml-2.5">
                  <p className="  text-sm	">{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-12 bg-grey-800 w-full rounded-lg flex items-center justify-start mb-5 hover:bg-grey-300 cursor-pointer gap-4">
        <LogoutIcon className="w-6 h-6 ml-10" />
        <p className="text-white text-base font-semibold">logout</p>
      </div>
    </div>
  );
};
