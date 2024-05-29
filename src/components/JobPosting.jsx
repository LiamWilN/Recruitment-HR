import React, { useState } from 'react';
import JSONDetails from '../assets/contents.details.json';
import RecruitmentPicture from '../assets/recruitment.png';
import { RecruitmentImage } from './Image';

const JobPosting = () => {
  const CompanyDetails = JSONDetails.Companies;
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
    <div className="h-h95p w-w90p shadow-lg rounded-lg bg-white flex flex-col md:flex-row overflow-hidden">
      <div className="hidden md:flex flex-col items-center justify-center grow bg-gray-100 p-4">
        <RecruitmentImage src={RecruitmentPicture} alt="Recruitment" />
        <h1 className="font-bold text-2xl">Post a Job</h1>
        <h4>Be precise when posting a Job.</h4>
      </div>
      <form className="flex flex-col grow p-4 overflow-y-auto">
        <div className="flex md:hidden border-b-2 pb-2 mb-4">
          <h1 className="text-lg font-semibold">Create a Job Posting</h1>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="company" className="font-bold text-lg mb-1">Company</label>
          <select name="Companies" id="company" className="w-full p-2 bg-slate-100 rounded-lg border">
            {CompanyDetails.map((item) => (
              <option value={item.title} key={item.id}>{item.title}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-bold mb-1">
            Include Salary Range?
            <input type="checkbox" checked={showSalaryRange} onChange={handleCheckboxChange} className="ml-2" />
          </label>
          {showSalaryRange && (
            <div className="flex flex-col md:flex-row md:items-center p-2 bg-slate-100 rounded-lg border">
              <input type="text" id="lower-bound" value={lowerBound} onChange={handleLowerBoundChange} placeholder="Minimum Salary" className="w-full md:w-1/2 p-2 mb-2 md:mb-0 md:mr-4 bg-white border rounded-lg" />
              <input type="text" id="upper-bound" value={upperBound} onChange={handleUpperBoundChange} placeholder="Maximum Salary" className="w-full md:w-1/2 p-2 bg-white border rounded-lg" />
            </div>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="position" className="font-bold text-lg mb-1">Position</label>
          <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>
      </form>
    </div>
  );
};

export default JobPosting;
