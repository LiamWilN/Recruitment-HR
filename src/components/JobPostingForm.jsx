import React, { useEffect, useState } from "react";
import JSONDetails from "../assets/contents.details.json";
import { Send } from "lucide-react";

const JobPostingForm = () => {
  const CompanyDetails = JSONDetails.Companies;
  const [showSalaryRange, setShowSalaryRange] = useState(false);
  const [industries, getIndustries] = useState([]);
  const [cities, getCities] = useState([]);
  const [worksetup, getWorksetup] = useState([]);
  const [experience, getExperience] = useState([]);
  const [municipality, getMunicipality] = useState([]);
  const [formData, setFormData] = useState({
    company_id: 1,
    job_title: "",
    min_salary: "",
    max_salary: "",
    job_city_id: 1,
    job_province_id: 1,
    job_specialization_id: 1,
    job_summary: "",
    job_responsibilities: ["", "", ""],
    job_requirements: "",
    job_qualifications: "",
    work_setup_id: [],
    status: "active",
    salary_type_id: 1,
  });

  useEffect(() => {
    fetch("https://api.dev.readymaninc.com/api/v1/industries")
      .then((response) => response.json())
      .then((data) => getIndustries(data.data))
      .catch((err) => console.log(err));

    fetch("https://api.dev.readymaninc.com/api/v1/job_cities")
      .then((response) => response.json())
      .then((data) => getCities(data.data))
      .catch((err) => console.log(err));

    fetch("https://api.dev.readymaninc.com/api/v1/job_provinces")
      .then((response) => response.json())
      .then((data) => getMunicipality(data.data))
      .catch((err) => console.log(err));

    fetch("https://api.dev.readymaninc.com/api/v1/work_setups")
      .then((response) => response.json())
      .then((data) => getWorksetup(data.data))
      .catch((err) => console.log(err));

    fetch("https://api.dev.readymaninc.com/api/v1/experience_levels")
      .then((response) => response.json())
      .then((data) => getExperience(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCheckboxChange = (e) => {
    setShowSalaryRange(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResponsibilitiesChange = (index, value) => {
    const newResponsibilities = [...formData.job_responsibilities];
    newResponsibilities[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      job_responsibilities: newResponsibilities,
    }));
  };

  const handleWorkSetupChange = (id, checked) => {
    const newWorkSetups = checked
      ? [...formData.work_setup_id, id]
      : formData.work_setup_id.filter((setupId) => setupId !== id);
    setFormData((prevData) => ({
      ...prevData,
      work_setup_id: newWorkSetups,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("company_id", formData.company_id);
    newFormData.append("job_title", formData.job_title);
    newFormData.append("min_salary", formData.min_salary);
    newFormData.append("job_city_id", formData.job_city_id);
    newFormData.append("max_salary", formData.max_salary);
    newFormData.append("job_province_id", formData.job_province_id);
    newFormData.append("job_specialization_id", formData.job_specialization_id);
    newFormData.append("job_summary", formData.job_summary);
    newFormData.append("job_requirements", formData.job_requirements);
    newFormData.append("job_qualifications", formData.job_qualifications);
    newFormData.append("work_setup_id", formData.work_setup_id);
    newFormData.append("status", formData.status);
    newFormData.append("salary_type_id", formData.salary_type_id);
    newFormData.append("job_responsibilities", formData.job_responsibilities);

    fetch("https://api.dev.readymaninc.com/api/v1/jobs", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: newFormData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col grow px-8 py-4 overflow-y-auto rounded-lg shadow-2xl border"
    >
      <div className="flex md:hidden border-b-2 pb-2 mb-4">
        <h1 className="text-xl font-bold">Create a Job Posting</h1>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="company_id" className="font-semibold text-lg mb-1">
          Company
        </label>
        <select
          name="company_id"
          id="company_id"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.company_id}
          onChange={handleChange}
        >
          {CompanyDetails.map((item) => (
            <option value={item.id} key={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="job_title" className="font-semibold text-lg mb-1">
          Position
        </label>
        <input
          type="text"
          id="job_title"
          name="job_title"
          placeholder="Ex: Warehouse Picker"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.job_title}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-1 text-lg">
          Include Salary Range?
          <input
            type="checkbox"
            checked={showSalaryRange}
            onChange={handleCheckboxChange}
            className="ml-2"
          />
        </label>
        {showSalaryRange && (
          <div className="flex flex-col md:flex-row md:items-center p-2 bg-slate-100 rounded-lg border">
            <input
              type="text"
              id="min_salary"
              name="min_salary"
              value={formData.min_salary}
              onChange={handleChange}
              placeholder="Minimum Salary"
              className="w-full md:w-1/2 p-2 mb-2 md:mb-0 md:mr-4 bg-white border rounded-lg"
            />
            <input
              type="text"
              id="max_salary"
              name="max_salary"
              value={formData.max_salary}
              onChange={handleChange}
              placeholder="Maximum Salary"
              className="w-full md:w-1/2 p-2 bg-white border rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="job_city_id" className="font-semibold text-lg mb-1">
          City
        </label>
        <select
          name="job_city_id"
          id="job_city_id"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.job_city_id}
          onChange={handleChange}
        >
          {cities.map((item) => (
            <option value={item.id} key={item.id}>
              {item.city_name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="job_province_id" className="font-semibold text-lg mb-1">
          Municipality
        </label>
        <select
          name="job_province_id"
          id="job_province_id"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.job_province_id}
          onChange={handleChange}
        >
          {municipality.map((item) => (
            <option value={item.id} key={item.id}>
              {item.province_name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="job_specialization_id"
          className="font-semibold text-lg mb-1"
        >
          Industry
        </label>
        <select
          name="job_specialization_id"
          id="job_specialization_id"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.job_specialization_id}
          onChange={handleChange}
        >
          {industries.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="job_summary" className="font-semibold text-lg mb-1">
          Job Description
        </label>
        <textarea
          id="job_summary"
          name="job_summary"
          placeholder="Ex: Providing technical support and assistance to end-users within the organization"
          className="w-full p-2 h-36 bg-slate-100 rounded-lg border"
          value={formData.job_summary}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="job_responsibilities"
          className="font-semibold text-lg mb-1"
        >
          Responsibilities
        </label>
        <div className="flex flex-col gap-2 items-center">
          <input
            type="text"
            id="responsibilities-1"
            placeholder="Ex: Provide first-level technical support to end-users via phone"
            className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border"
            value={formData.job_responsibilities[0]}
            onChange={(e) => handleResponsibilitiesChange(0, e.target.value)}
          />
          <input
            type="text"
            id="responsibilities-2"
            placeholder="Ex: Set up and maintain computer hardware"
            className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border"
            value={formData.job_responsibilities[1]}
            onChange={(e) => handleResponsibilitiesChange(1, e.target.value)}
          />
          <input
            type="text"
            id="responsibilities-3"
            placeholder="Ex: Create, modify, and deactivate user accounts and access permissions"
            className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border"
            value={formData.job_responsibilities[2]}
            onChange={(e) => handleResponsibilitiesChange(2, e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="job_requirements"
          className="font-semibold text-lg mb-1"
        >
          Job Requirements
        </label>
        <textarea
          id="job_requirements"
          name="job_requirements"
          placeholder="Ex: Requirements for the job"
          className="w-full p-2 h-36 bg-slate-100 rounded-lg border"
          value={formData.job_requirements}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="job_qualifications"
          className="font-semibold text-lg mb-1"
        >
          Job Qualifications
        </label>
        <textarea
          id="job_qualifications"
          name="job_qualifications"
          placeholder="Ex: Qualifications for the job"
          className="w-full p-2 h-36 bg-slate-100 rounded-lg border"
          value={formData.job_qualifications}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex flex-col mb-4 md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="work_setup_id" className="font-semibold text-lg mb-1">
            Work Setup
          </label>
          {worksetup.map((item) => (
            <div key={item.id} className="flex items-center mb-1">
              <input
                type="checkbox"
                value={item.id}
                id={`worksetup-${item.id}`}
                checked={formData.work_setup_id.includes(item.id)}
                onChange={(e) =>
                  handleWorkSetupChange(item.id, e.target.checked)
                }
                className="mr-2"
              />
              <label htmlFor={`worksetup-${item.id}`}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="salary_type_id" className="font-semibold text-lg mb-1">
          Salary Type
        </label>
        <select
          name="salary_type_id"
          id="salary_type_id"
          className="w-full p-2 bg-slate-100 rounded-lg border"
          value={formData.salary_type_id}
          onChange={handleChange}
        >
          <option value="hourly">Hourly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="flex flex-col mb-4 items-center">
        <button
          type="submit"
          className="w-full md:w-1/2 p-2 bg-blue-600 rounded-lg border text-white flex justify-center items-center gap-2"
        >
          <Send /> Submit
        </button>
      </div>
    </form>
  );
};

export default JobPostingForm;
