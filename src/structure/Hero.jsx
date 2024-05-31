import React from "react";
import JobPosting from "../components/JobPosting";
import Recruitment from "../components/Recruitment";
import AdminCenter from "../components/AdminCenter";

const Hero = ({ content }) => {
  const contentMap = {
    "Admin Center": <AdminCenter />,
    Recruitment: <Recruitment />,
    "Job Posting": <JobPosting />,
  };

  const displayContent = contentMap[content] || "Admin Center";

  return (
    <>
      <div className="h-4/6 w-full bg-slate-100 flex items-center justify-center">
        {displayContent}
      </div>
    </>
  );
};

export default Hero;
