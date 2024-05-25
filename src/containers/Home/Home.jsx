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
import RoadMap from "@/components/RoadMap";
import School from "@/components/School";
import Company from "@/components/Company";

export const Home = ({ lng }) => {
  return (
    <div className=" w-full m-auto">
      <Hero lng={lng} />

      <Partners lng={lng} />

      <Services lng={lng} />

      <Survey lng={lng} />

      <RoadMap lng={lng} />

      <CourseNews />

      <Job lng={lng} />

      <SurveyForm lng={lng} />

      <MeetTeam lng={lng} />

      <School lng={lng} />

      {/* <Company lng={lng} /> */}
    </div>
  );
};
