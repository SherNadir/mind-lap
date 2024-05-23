"use client";
import React from "react";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Job from "@/components/Job";
import SurveyForm from "@/components/SurveyForm";
import CourseNews from "@/app/[lng]/components/CourseNews";

export const Dashboard = ({ lng }) => {
  return (
    // relative h-[calc(100vh-15rem)]
    <div className="w-full m-auto">
      <Hero lng={lng} />

      <Partners lng={lng} />

      <Services lng={lng} />

      <Survey lng={lng} />

      <Job lng={lng} />

      <SurveyForm lng={lng} />
      <CourseNews lng={lng} />
    </div>
  );
};
