"use client";

import React from "react";
import {
  BackIcon,
  CareerFinderIcon,
  DiscoveryIcon,
  ExploreCareersIcon,
  GameIcon,
  GoalsIcon,
  InfoIcon,
  MentorIcon,
  TestIcon,
} from "@/svgs/icons";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";

export const Home = ({ lng }) => {
  const router = useRouter();
  return (
    <div className="mb-0 mt-16 lg:mt-0 md:my-0  w-full ">
      <div className="relative  w-full m-auto flex h-full">
        <div className="w-full m-6  p-8">
          <div className="flex justify-between items-center">
            <div
              className="bg-grey-100 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:text-primary"
              onClick={() => router.push(`/${lng}/dashboard`)}
            >
              <BackIcon />
            </div>
            <div>
              <p className="text-4xl font-bold text-dark-700">Home</p>
            </div>
            <div className="text-dark-70 cursor-pointer">
              <InfoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="grid grid-col gap-5 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  my-6">
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer">
              <div className="flex items-center justify-center">
                <DiscoveryIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Self Discovery
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Explore your Interests and Skills
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <CareerFinderIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  AI Career Finder
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <ExploreCareersIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Explore Careers
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <TestIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Career Assessment
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <GoalsIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Goals
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <MentorIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Ai Mentor
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
            <div className="flex flex-col bg-white w-full md:min-w-40 md:max-w-60  p-6 border-2  drop-shadow-[0_0_0_rgba(186,186,186,0.25)] hover:border-primary cursor-pointer hover:drop-shadow-[0_0_0_rgba(117,212,129,0.25)]">
              <div className="flex items-center justify-center">
                <GameIcon />
              </div>
              <div>
                <p className="text-base font-semibold text-primary text-center mt-3">
                  Personalized Gamified
                </p>
                <p className="text-base font-medium text-dark-700 text-center mt-2">
                  Let AI guide you to your dream career
                </p>
              </div>

              <div>
                <p className="text-xs font-normal text-primary pb-2.5 text-start mt-6">
                  Read more
                </p>
                <div className="w-[60px] h-[2px] bg-warning-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
