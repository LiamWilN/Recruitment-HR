import React from "react";
import RecruitmentPicture from "../assets/recruitment.png";
import { RecruitmentImage } from "./Image";
import JobPostingForm from "./JobPostingForm";

const JobPosting = () => {
  return (
    <div className="w-full h-full shadow-xl rounded-lg bg-white flex flex-col md:flex-row overflow-hidden">
      <div className="hidden md:flex flex-col items-center justify-center grow bg-gray-100 p-4">
        <RecruitmentImage src={RecruitmentPicture} alt="Recruitment" />
        <h1 className="font-bold text-2xl">Post a Job</h1>
        <h4>Be precise when posting a Job.</h4>
      </div>
      <JobPostingForm />
    </div>
  );
};

export default JobPosting;
