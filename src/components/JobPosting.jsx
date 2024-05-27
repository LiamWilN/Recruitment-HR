import React, { useState } from 'react';

const JobPostingForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [salaryRequired, setSalaryRequired] = useState(false);
  const [salary, setSalary] = useState('');
  const [experienceRequired, setExperienceRequired] = useState(false);
  const [experienceYears, setExperienceYears] = useState('');
  const [educationalAttainment, setEducationalAttainment] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [payRateFrequency, setPayRateFrequency] = useState('');
  
  // Example list of companies
  const companies = ['Company A', 'Company B', 'Company C', 'Company D'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company:", company);
    console.log("Position:", position);
    console.log("Location:", location);
    console.log("Salary Required:", salaryRequired ? "Yes" : "No");
    console.log("Salary:", salary);
    console.log("Experience Required:", experienceRequired ? "Yes" : "No");
    console.log("Experience Years:", experienceYears);
    console.log("Educational Attainment:", educationalAttainment);
    console.log("Job Description:", jobDescription);
    console.log("Pay Rate Frequency:", payRateFrequency);
    resetForm();
  };

  const resetForm = () => {
    setCompany('');
    setPosition('');
    setLocation('');
    setSalaryRequired(false);
    setSalary('');
    setExperienceRequired(false);
    setExperienceYears('');
    setEducationalAttainment('');
    setJobDescription('');
    setPayRateFrequency('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Company</label>
            <select
              id="company"
              className="input-field"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            >
              <option value="">Select company</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-medium mb-1">
                <input
                  type="checkbox"
                  id="salary"
                  className="mr-2"
                  checked={salaryRequired}
                  onChange={(e) => setSalaryRequired(e.target.checked)}
                />
                Salary
              </label>
              {salaryRequired && (
                <input
                  type="number"
                  id="salaryInput"
                  className="input-field"
                  placeholder="Enter salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="payRateFrequency" className="block text-gray-700 font-medium mb-1">Pay Rate Frequency</label>
              <select
                id="payRateFrequency"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                value={payRateFrequency}
                onChange={(e) => setPayRateFrequency(e.target.value)}
              >
                <option value="">Select Frequency</option>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">
                <input
                  type="checkbox"
                  id="experience"
                  className="mr-2"
                  checked={experienceRequired}
                  onChange={(e) => setExperienceRequired(e.target.checked)}
                />
                Experience Required
              </label>
              {experienceRequired && (
                <input
                  type="number"
                  id="experienceInput"
                  className="input-field"
                  placeholder="Enter years of experience"
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  required
                />
              )}
            </div>
          </div>

          <div className="mb-4">
            <button type="submit" className="btn-primary w-full">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;
