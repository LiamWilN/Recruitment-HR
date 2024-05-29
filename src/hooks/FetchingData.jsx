import { Activity, BriefcaseBusiness, HandCoins, MapPin, ShieldMinus, ShieldX } from 'lucide-react';
import React, { useState, useEffect } from 'react';


const FetchingData = () => {
    const [jobs, getJobs] = useState([]);

    const jobStatus = [
        {id: 1, "title": "ACTIVE"},
        {id: 2, "title": "INACTIVE"},
        {id: 3, "title": "CLOSED"}
    ]

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/jobs?job_title=&min_salary=&max_salary=&job_specialization=&city_name=&province_name=&job_type_name=&work_setup_name=&exp_level_title=')
            .then(response => response.json())
            .then(data => getJobs(data.data))
            .catch(err => console.log(err));
    }, []);

    

    return (
        <div className="w-w90p h-h90p bg-white p-4 border overflow-hidden rounded-b-lg mx-auto">
            <div className="overflow-y-auto max-h-full">
                <ul className="divide-y divide-gray-200">
                    {jobs.map((item, index) => (
                        <li key={index} className="flex flex-col p-4">
                            <div className='flex mb-2 gap-4 items-center'>
                                <img src={item.company.profile.company_logo} alt={item.company.company_name} className='w-12 h-12 object-contain'/>
                                <div>
                                    <h1 className='font-bold text-xl sm:text-2xl'>
                                        {item.job_title}
                                    </h1>
                                    <h4 className='text-sm sm:text-base'>
                                        {item.company.company_name}
                                    </h4>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-4 py-2 mb-2 pl-8'>
                                <div className='flex gap-2 items-center'>
                                    <HandCoins />
                                    <span className='text-sm sm:text-base'>
                                        ₱ {item.min_salary} - ₱ {item.max_salary}
                                    </span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MapPin />
                                    <span className='text-sm sm:text-base'>
                                        {item.city.city_name}, {item.province.province_name}
                                    </span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <BriefcaseBusiness />
                                    <span className='text-sm sm:text-base'>
                                        {item.work_setup.name}
                                    </span>
                                </div>
                            </div>
                            <div className='text-sm sm:text-base'>
                                {item.job_summary}
                            </div>
                            <div className='text-sm sm:text-base'>
                                {item.job_summary}
                            </div>
                            <div className='flex justify-end items-center mt-2'>
                                <select name="jobstatus" id="jobstatus" className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    {jobStatus.map((status) => (
                                        <option value={status.title} key={status.id} className='bg-slate-100 p-4 text-gray-950'>
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
}

export default FetchingData;
