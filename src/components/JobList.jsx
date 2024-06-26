import {
  BriefcaseBusiness,
  HandCoins,
  MapPin,
  SquareGanttChart,
} from "lucide-react";
import React, { useState, useEffect } from "react";

const FetchingData = ({ filterCriteria }) => {
  const [jobs, setJobs] = useState([]);

  const jobStatus = [
    { id: 1, title: "ACTIVE" },
    { id: 2, title: "INACTIVE" },
    { id: 3, title: "CLOSED" },
  ];

  useEffect(() => {
    fetch(
      "https://api.dev.readymaninc.com/api/v1/jobs?job_title=&min_salary=&max_salary=&job_specialization=&city_name=&province_name=&job_type_name=&work_setup_name=&exp_level_title="
    )
      .then((response) => response.json())
      .then((data) => setJobs(data.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredJobs = filterCriteria
    ? jobs.filter((job) => {
        const matchesTitle = filterCriteria.job_title
          ? job.job_title.includes(filterCriteria.job_title)
          : true;
        // const matchesCompany = filterCriteria.company_name ? job.company.company_name.includes(filterCriteria.company_name) : true;
        return matchesTitle;
        // && matchesCompany;
      })
    : jobs;

  return (
    <div className="w-5/6 h-screen overflow-hidden mx-auto">
      <div className="overflow-y-auto max-h-full">
        <ul className="space-y-2 divide-white shadow-lg">
          {filteredJobs.map((item, index) => (
            <li
              key={index}
              className="flex flex-col p-4 border rounded-xl shadow-lg bg-white"
            >
              <div className="flex mb-2 gap-4 items-center">
                <img
                  src={item.company.profile.company_logo}
                  alt={item.company.company_name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="font-bold text-xl sm:text-2xl">
                    {item.job_title}
                  </h1>
                  <h4 className="text-sm sm:text-base">
                    {item.company.company_name}
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 py-2 md:pl-8 pb-4 border-b-2 border-b-sky-200">
                <div className="flex gap-2 items-center">
                  <HandCoins />
                  <span className="text-sm sm:text-base">
                    {Intl.NumberFormat("fil-PH", {
                      style: "currency",
                      currency: "PHP",
                    }).format(item.min_salary)}{" "}
                    -{" "}
                    {Intl.NumberFormat("fil-PH", {
                      style: "currency",
                      currency: "PHP",
                    }).format(item.max_salary)}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <MapPin />
                  <span className="text-sm sm:text-base">
                    {item.city.city_name}, {item.province.province_name}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <BriefcaseBusiness />
                  <span className="text-sm sm:text-base">
                    {item.work_setup.name}
                  </span>
                </div>
              </div>
              <div className="text-sm sm:text-base py-4">
                {item.job_summary}
              </div>
              <div className="text-sm sm:text-base">
                <ul className="list-disc px-8 py-4">
                  {JSON.parse(item.job_responsibilities).map(
                    (responsibility, index) => (
                      <li key={index} className="p-2">
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="flex justify-between items-center pt-2 border-t-2 border-t-sky-200">
                <div className="flex flex-wrap gap-4 py-2 mb-2 md:pl-8">
                  <div className="flex gap-2 items-center">
                    <SquareGanttChart />
                    <span className=" flex flex-wrap gap-1">
                      {item.job_type.map((i, index) => (
                        <span className="text-sm sm:text-base" key={i.id}>
                          {i.name}
                          {index < item.job_type.length - 1 && " | "}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <select
                  name="jobstatus"
                  id="jobstatus"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={item.status} defaultValue={true}>
                    {item.status.toUpperCase()}
                  </option>
                  {jobStatus.map((status) => (
                    <option
                      value={status.title}
                      key={status.id}
                      className="bg-slate-100 p-4 text-gray-950"
                    >
                      {status.title}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchingData;
