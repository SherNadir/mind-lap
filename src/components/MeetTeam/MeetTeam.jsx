"use client";

import { SvrilIcon } from "@/svgs/icons";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { teamMembers } from "./data";
import TeamCard from "@/components/TeamCard";

export const MeetTeam = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="relative flex flex-col text-center bg-primary-100  pb-12 mt-12 ">
      <div className="container mx-auto">
        <div className="pt-16 flex flex-col justify-center items-center">
          <p className="text-primary text-base">WHO WE ARE</p>
          <h1 className="mt-1.5 text-dark-500  text-6xl font-semibold">
            Meet Our CEO
          </h1>
          <p
            className="mt-4 text-grey-500 text-xl max-w-[692px]
         "
          >
            Just take a look - each member of the team is watching your every
            gesture and will hear your every whisper.
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
