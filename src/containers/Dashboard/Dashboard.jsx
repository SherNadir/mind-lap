"use client";

import {
  SvrilIcon,
  SisiphusIcon,
  LeafIcon,
  DotMatrixIcon,
  CircleIcon,
  CatalogueIcon,
  QuoteIcon,
  ServiceIcon,
  MentorsIcon,
  CalenderIcon,
  AIIcon,
  AssesmentIcon,
  ExploreIcon,
  GamifiedIcon,
} from "@/svgs/icons";
import Image from "next/image";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="relative h-[calc(100vh-15rem)] w-full m-auto">
      <div className="content w-4/5  m-auto mb-[100px]">
        <div className="w-full flex flex-col text-center lg:text-start lg:w-3/5 ">
          <p className={`text-sm sm:text-4xl text-dark mt-10 `}>
            Make bigger futures for our kids.
          </p>
          <p className="mt-[44px] text-7xl sm:text-7xl text-primary">
            MINDELAP
          </p>
          <p className="mt-0 text-5xl sm:text-7xl text-dark-100">
            Discover Your Dream Career
          </p>
          <p className={`text-4xl font-medium text-dark-200 `}>
            Embark on a career adventure with FuturePath Explorer! Our
            child-friendly AI guides young explorers through exciting career
            possibilities based on their interests. Safe, fun, and educational
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
        <div className="flex px-8 py-3 bg-white rounded-full gap-0 sm:gap-4 max-w-[40rem] justify-between border border-grey-light mt-[80px]">
          <div>
            <p className="text-primary text-sm font-normal">
              Register using email address
            </p>
            <p className="text-base font-semibold text-primary">
              student@gmail.com
            </p>
          </div>
          <button
            className={` text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12">
        <div className="flex flex-col items-center mt-12">
          <DotMatrixIcon />
          <p className="mt-5 text-6xl text-dark-300 font-semibold">
            Our Partners
          </p>
          <p className="mt-5 text-base font-semibold text-dark-light">
            Join 4,000+ companies already growing
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-20 mt-20">
          <div className="flex items-center gap-4">
            <LeafIcon />
            <p>Layers</p>
          </div>
          <div className="flex items-center gap-4">
            <SisiphusIcon />
            <p>Sisiphus</p>
          </div>
          <div className="flex items-center gap-4">
            <CircleIcon />
            <p>Layers</p>
          </div>
          <div className="flex items-center gap-4">
            <CatalogueIcon />
            <p>Layers</p>
          </div>
          <div className="flex items-center gap-4">
            <QuoteIcon />
            <p>Layers</p>
          </div>
        </div>
        <div className="absolute top-10 left-10">
          <SvrilIcon />
        </div>
        <div className="absolute top-10 right-10">
          <SvrilIcon />
        </div>
      </div>

      <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center mt-14 pb-12">
        <div className="flex flex-col items-center">
          <p className="mt-5 text-4xl text-primary font-semibold">
            Our Services
          </p>
          <p className="mt-5 text-6xl text-dark-300 font-semibold">
            Why Should you Choose MINDELAP?
          </p>
        </div>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mt-10">
          <div className=" border-primary rounded-[18px]  flex shadow-sm blur-14 flex-col items-center w-full px-10 py-8">
            <MentorsIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
          <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8">
            <CalenderIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
          <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8">
            <AIIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
          <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8">
            <AssesmentIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
          <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8">
            <ExploreIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
          <div className=" border-primary rounded-[18px] shadow-sm blur-14 flex flex-col items-center w-full px-10 py-8">
            <GamifiedIcon />
            <p className="mt-7 text-4xl font-medium text-dark">
              Experience mentors
            </p>
            <p className="mt-7 text-sm font-normal text-dark-400">
              MINDELAP is a dynamic career guidance platform designed
              specifically for kids. We provide engaging, interactive tools to
              help children explore various career paths in a fun and
              educational way. Our{" "}
            </p>
          </div>
        </div>
        <div className="absolute top-10 left-10">
          <ServiceIcon />
        </div>
        <div className="absolute top-10 right-10">
          <ServiceIcon />
        </div>
      </div>

      <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12 mt-12">
        <div className="flex flex-col items-center mt-12">
          <p className="mt-5 text-base text-primary font-semibold">
            AI on Job Finding
          </p>
          <p className="mt-5 text-6xl text-dark-300 font-semibold">
            Survey: Impact Of AI On{" "}
            <span className="text-primary">Job Finding</span>
            <br />
            For Teens
          </p>
          <p className="mt-5 text-base font-normal text-dark">
            Participate and have an influence! We explore how artificial
            intelligence (AI) can improve job searches for young people.
          </p>
        </div>
        <button
          className={`mt-12 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
        >
          Take part in the survey
        </button>
        <div className="absolute top-10 left-10">
          <SvrilIcon />
        </div>
        <div className="absolute top-10 right-10">
          <SvrilIcon />
        </div>
      </div>

      <div className="relative flex flex-col  min-h-[320px] justify-center pb-12">
        <div className="w-4/5 m-auto flex flex-col lg:flex lg:flex-row gap-16">
          <div className="flex flex-col mt-12">
            <div>
              <p className="mt-5 text-base text-primary font-semibold">
                AI on Job Finding
              </p>
              <p className="mt-5 text-6xl text-dark-300 font-semibold">
                Survey: Impact Of AI On{" "}
                <span className="text-primary">Job Finding</span>
                <br />
                For Teens
              </p>
              <p className="mt-5 text-base font-normal text-dark">
                Participate and have an influence! We explore how artificial
                intelligence (AI) can improve job searches for young people.
              </p>
            </div>
            <div>
              <button
                className={`mt-12 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
              >
                Share Your Insight
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12 gap-10">
            <div className="flex border p-4 gap-4 rounded-lg">
              <div className="min-w-[100px]">
                <Image
                  src="/images/skills.png"
                  alt="Hero Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <p className="mt-5 text-base text-primary font-semibold">
                  Personalized Recommendations
                </p>
                <p className="mt-1 text-base font-normal text-dark">
                  AI can provide tailored job suggestions based on your skills
                  and interests.
                </p>
              </div>
            </div>
            <div className="flex border p-4 gap-4 rounded-lg">
              <div className="min-w-[100px]">
                <Image
                  src="/images/search.png"
                  alt="Hero Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <p className="mt-5 text-base text-primary font-semibold">
                  Personalized Recommendations
                </p>
                <p className="mt-1 text-base font-normal text-dark">
                  AI can provide tailored job suggestions based on your skills
                  and interests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-10">
          <SvrilIcon />
        </div>
        <div className="absolute top-10 right-10">
          <SvrilIcon />
        </div>
      </div>

      <div className="relative flex flex-col items-center text-center bg-white min-h-[320px] justify-center pb-12 mt-12 ">
        <div className="flex flex-col items-center mt-12">
          <p className="mt-5 text-6xl text-dark-300 font-semibold">
            Take the Survey
          </p>
          <p className="mt-5 text-base font-normal text-dark">
            Help us understand your perspective on AI in job finding for teens
          </p>
        </div>
        <div className="w-11/12 sm:w-1/2 m-auto justify-center">
          <div className="flex flex-col  items-start w-full justify-center mt-6">
            <label className="text-sm font-medium text-dark">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
            ></input>
          </div>
          <div className="flex flex-col  items-start w-full justify-center mt-6">
            <label className="text-sm font-medium text-dark">Age</label>
            <input
              type="text"
              placeholder="Enter your Age"
              className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
            ></input>
          </div>
          <div className="flex flex-col  items-start w-full justify-center mt-6">
            <label className="text-sm font-medium text-dark">
              Experience with Job Search
            </label>
            <input
              type="text"
              placeholder="Briefly describe your experience"
              className="border bg-grey w-full rounded-[6px] py-2 px-3 mt-1"
            ></input>
          </div>
          <button
            className={`mt-6 text-base font-medium text-white bg-primary py-3 px-8 rounded-full`}
          >
            Submit
          </button>
        </div>

        <div className="absolute top-10 left-10">
          <SvrilIcon />
        </div>
        <div className="absolute top-10 right-10">
          <SvrilIcon />
        </div>
      </div>
    </div>
  );
};
