import React from 'react';
import JobPosting from './JobPosting';

const Hero = ({ content }) => {
  const contentMap = {
    'Admin Center': 'Admin Center',
    'Recruitment': 'Recruitment',
    'Job Posting': <JobPosting />,
  };

  const displayContent = contentMap[content] || 'Admin Center';

  return (
    <>
      <div className="h-svh w-svw bg-slate-100 flex items-center justify-center ">
        {
          displayContent
        }
      </div>
    </>
  );
};

export default Hero;
