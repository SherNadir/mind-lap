"use client";

import {
  LinkedinIcon,
  MailIcon,
  SvrilIcon,
  Tiktok,
  TwitterIcon,
} from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import TeamCard from "@/components/TeamCard";

import ceoImage from "../../../public/images/ceoImage.png";

export const MeetTeam = ({ lng }) => {
  const { t } = useTranslation(lng);

  const teamMembers = [
    {
      image: ceoImage,
      name: "Samir Weber",
      role: `${t("CEO_AND_OWNER")} Career-Match`,
      description: t("OWNER_DESCRIPTION"),
      socials: [
        { icon: <TwitterIcon />, link: "#" },
        {
          icon: <LinkedinIcon height="22" width="22" />,
          link: "#",
        },
        {
          icon: <MailIcon height="22" width="22" />,
          link: "#",
        },
        {
          icon: <Tiktok height="22" width="22" className={"text-white"} />,
          link: "#s",
        },
      ],
    },
  ];
  return (
    <div className="relative flex flex-col text-center bg-primary-100  pb-12 mt-12 ">
      <div className="w-4/5 mx-auto">
        <div className="pt-16 flex flex-col justify-center items-center">
          <p className="text-primary text-base">{t("WHO_WE_ARE")}</p>
          <h1 className="mt-1.5 text-dark-500  text-6xl font-semibold">
            {t("MEET_OUR_CEO")}
          </h1>
          <p
            className="mt-4 text-grey-500 text-xl max-w-[692px]
         "
          >
            {t("TAKE_A_LOOK")}
          </p>
        </div>
        <div className="flex flex-col gap-16 md:gap-8 mt-8 ">
          {teamMembers?.map((member) => {
            return <TeamCard key={`${member}-teammember-`} member={member} />;
          })}
        </div>
      </div>
      <div className="absolute top-10 left-10">
        <SvrilIcon />
      </div>
      <div className="absolute top-10 right-10">
        <SvrilIcon />
      </div>
    </div>
  );
};
