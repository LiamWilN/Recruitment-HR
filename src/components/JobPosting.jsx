import React, { useState } from 'react';
import JSONDetails from '../assets/contents.details.json'
import RecruitmentPicture from '../assets/recruitment.png'
import { RecruitmentImage } from './Image';
const JobPosting = () => {

  const CompanyDetails = JSONDetails.Companies

  const [showSalaryRange, setShowSalaryRange] = useState(false);
    const [lowerBound, setLowerBound] = useState('');
    const [upperBound, setUpperBound] = useState('');

    const handleCheckboxChange = (e) => {
        setShowSalaryRange(e.target.checked);
    };

    const handleLowerBoundChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setLowerBound(e.target.value);
        }
    };

    const handleUpperBoundChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setUpperBound(e.target.value);
        }
    };
  return (
    <div className='h-h95p w-w90p shadow-lg rounded-lg bg-white flex flex-row'>
      <div className='hidden md:flex flex-col items-center justify-center grow'>
        <RecruitmentImage src={RecruitmentPicture} alt="Recruitment" />
        <h1 className='font-bold text-2xl'>
          Post a Job
        </h1>
        <h4>
          Be precise when posting a Job.
        </h4>
      </div>
      <form action="" className='flex flex-col grow m-4'>
        <label htmlFor="company" className='font-bold text-lg'>Company</label>
        <select name="Companies" id="company" className='mb-2'>
          {
            CompanyDetails.map( item => {
              return (
                <option value={item.title} key={item.id}>{item.title}</option>
              )
            })
          }
        </select >
        
        <label htmlFor="position" className='font-bold text-lg'>Position</label>
          <input type="text" id='position' placeholder='Ex: Warehouse Picker'/>

          <label>
                Include Salary Range?
                <input
                    type="checkbox"
                    checked={showSalaryRange}
                    onChange={handleCheckboxChange}
                />
            </label>
            {showSalaryRange && (
                <div>
                    <input
                        type="text"
                        id="lower-bound"
                        value={lowerBound}
                        onChange={handleLowerBoundChange}
                        placeholder="Enter lower bound"
                    />
                    -
                    <input
                        type="text"
                        id="upper-bound"
                        value={upperBound}
                        onChange={handleUpperBoundChange}
                        placeholder="Enter upper bound"
                    />
                </div>
            )}
      </form>
    </div>
  );
};

export default JobPosting;
