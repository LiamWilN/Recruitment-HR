import React from 'react';
import JobPosting from './JobPosting';
import Recruitment from './Recruitment';
import AdminCenter from './AdminCenter';

const Hero = ({ content }) => {
  const contentMap = {
    'Admin Center': <AdminCenter />,
    'Recruitment': <Recruitment />,
    'Job Posting': <JobPosting />,
  };

  const displayContent = contentMap[content] || 'Admin Center';

  return (
    <>
      <div className="h-[90%] md:h-[85%] w-svw bg-slate-100 flex items-center justify-center">
        {
          displayContent
        }
      </div>
    </>
  );
};

export default Hero;
