"use client";
import React from "react";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Job from "@/components/Job";
import SurveyForm from "@/components/SurveyForm";
import MeetTeam from "@/components/MeetTeam";
import CourseNews from "@/components/CourseNews";

export const Home = ({ lng }) => {
  return (
    <div className=" w-full m-auto">
      <Hero lng={lng} />

      <Partners lng={lng} />

      <Services lng={lng} />

      <Survey lng={lng} />

      <CourseNews />

      <Job lng={lng} />

      <SurveyForm lng={lng} />
      <MeetTeam lng={lng} />
    </div>
  );
};
