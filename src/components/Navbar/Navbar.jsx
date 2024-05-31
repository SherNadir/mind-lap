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

export const Navbar = ({ lng }) => {
  const [activeLink, setActiveLink] = useState("/");
  const menuItems = ["Update Profile Image", "Account Settings", "Log Out"];
  const pathname = usePathname();
  const router = useRouter();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];

  useEffect(() => {
    setActiveLink(`/${lastPart}`);
  }, [router, pathname, lastPart]);

  const newLocale = pathname.includes("/en") ? "de" : "en";

  return (
    <Disclosure as="div" className="bg-white relative z-10">
      {({ open, close }) => (
        <div>
          <div className="border-b px-5 ">
            <div className="relative py-4 md:w-full xl:w-4/5 m-auto flex justify-between items-center">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center text-grey-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  min-h-9 min-w-9">
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="text-primary">
                <Logo />
              </div>
              <Link
                className="bg-primary w-10 h-8 rounded-full flex lg:hidden items-center  justify-center text-white mr-14 hover:bg-primary-200 cursor-pointer"
                href={`${
                  pathname === "/en" || pathname === "/de"
                    ? `${lng === "en" ? "de" : "en"}`
                    : `/${lng === "en" ? "de" : "en"}/${lastPart}`
                }`}
              >
                {newLocale}
              </Link>
              <div className="hidden lg:flex items-center gap-4">
                <ul className="flex gap-8">
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary":
                          pathname === "/en" || pathname === "/de",
                      }
                    )}
                    onClick={() => router.push("/")}
                  >
                    Home
                  </li>
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary": activeLink === "/dashboard",
                      }
                    )}
                    onClick={() => router.push(`/${lng}/dashboard`)}
                  >
                    Dashboard
                  </li>
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary": activeLink === "/partners",
                      }
                    )}
                    onClick={() => router.push("/partners")}
                  >
                    Partners
                  </li>
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary": activeLink === "/services",
                      }
                    )}
                    onClick={() => router.push("/services")}
                  >
                    Services
                  </li>
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary": activeLink === "/roadmap",
                      }
                    )}
                    onClick={() => router.push("/roadmap")}
                  >
                    Roadmap
                  </li>
                  <li
                    className={cls(
                      "font-bold text-sm cursor-pointer text-dark hover:text-primary",
                      {
                        "text-primary": activeLink === "/team",
                      }
                    )}
                    onClick={() => router.push("/team")}
                  >
                    Team
                  </li>
                </ul>
                <Link
                  className="bg-primary w-[60px] h-8 rounded-full flex items-center  justify-center text-white hover:bg-primary-200 cursor-pointer"
                  href={`${
                    pathname === "/en" || pathname === "/de"
                      ? `${lng === "en" ? "de" : "en"}`
                      : `/${lng === "en" ? "de" : "en"}/${lastPart}`
                  }`}
                >
                  {newLocale}
                </Link>
              </div>
              <div className=" gap-5 hidden lg:flex items-center">
                <button className={` text-sm font-medium text-dark`}>
                  Login
                </button>
                <button
                  className={` text-base font-medium text-white bg-primary py-3 px-8 rounded-[1.25rem] hover:bg-primary-200`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          {open && (
            <div className=" bg-white h-auto">
              <DisclosurePanel className="lg:hidden">
                <div className="pt-6 pb-[1.125rem] px-4 space-y-1">
                  <Menu as="div" className="flex flex-col justify-center">
                    <MenuButton className="relative flex flex-col items-center text-sm rounded-full focus:outline-none mb-6">
                      <Image
                        className="rounded-full mb-2.5"
                        src={"/images/profileImage.png"}
                        alt=""
                        width={80}
                        height={80}
                      />
                      <div className="flex items-center">
                        <p className="mx-2 text-5xl text-grey-400">
                          James Bond
                        </p>
                        <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </MenuButton>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      className="z-10 "
                    >
                      <MenuItems className="absolute top-[13rem] right-[24rem] w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {menuItems?.map((menu, index) => {
                          return (
                            <MenuItem key={`${menu}-option-${index + 1}`}>
                              {({ close }) => (
                                <a
                                  href="#"
                                  className={`${
                                    !close ? "bg-gray-100" : ""
                                  } block px-4 py-2 text-sm text-gray-700`}
                                >
                                  {menu}
                                </a>
                              )}
                            </MenuItem>
                          );
                        })}
                      </MenuItems>
                    </Transition>
                    {navigation?.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          className={cls(
                            `flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer hover:bg-primary hover:text-white  ${
                              activeLink === item.href
                                ? "text-white bg-primary"
                                : "text-dark"
                            }`
                          )}
                          href={`/${item.href}`}
                          onClick={close}
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
                  </Menu>
                </div>
              </DisclosurePanel>
            </div>
          )}
        </div>
      )}
    </Disclosure>
  );
};
