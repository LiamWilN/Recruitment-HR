import React from 'react';
import JobPostingForm from './JobPosting';

const Hero = ({ content }) => {
  const contentMap = {
    'Admin Center': 'Welcome to the Home Page',
    'Recruitment': 'About Us',
    'Job Posting': <JobPostingForm />,
  };

  const displayContent = contentMap[content] || 'Welcome to the Home Page';

  return (
    <>
      <div className="h-svh w-svw">
        {
          displayContent
        }
      </div>
    </>
  );
};

export default Hero;
