import React, { useEffect, useState } from 'react'
import JSONDetails from '../assets/contents.details.json';
import { Send } from 'lucide-react';


const FormData = () => {

    const CompanyDetails = JSONDetails.Companies;
    const [showSalaryRange, setShowSalaryRange] = useState(false);
    const [lowerBound, setLowerBound] = useState('');
    const [upperBound, setUpperBound] = useState('');

    const [industries, getIndustries] = useState([]);
    const [cities, getCities] = useState([])
    const [worksetup, getWorksetup] = useState([]);
    const [experience, getExperience] = useState([]);
    const [municipality, getMunicipality] = useState([]);


    const handleCheckboxChange = (e) => {
        setShowSalaryRange(e.target.checked);
    };

    const [wfhsetup, setWfhsetup] = useState('')
    const [onsite, setOnsitesetup] = useState('')

    const WFHSetup = (i) => {
        setWfhsetup(i.target.checked);
    };
    const Onsite = (i) => {
        setOnsitesetup(i.target.checked);
    };

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/industries')
            .then(response => response.json())
            .then(data => getIndustries(data.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/job_cities')
            .then(response => response.json())
            .then(data => getCities(data.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/job_provinces')
            .then(response => response.json())
            .then(data => getMunicipality(data.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/work_setups')
            .then(response => response.json())
            .then(data => getWorksetup(data.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/experience_levels')
            .then(response => response.json())
            .then(data => getExperience(data.data))
            .catch(err => console.log(err));
    }, []);

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
    <form className="flex flex-col grow px-8 py-4 overflow-y-auto rounded-lg shadow-2xl border">
        <div className="flex md:hidden border-b-2 pb-2 mb-4">
            <h1 className="text-xl font-bold">Create a Job Posting</h1>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="company" className="font-semibold text-lg mb-1">Company</label>
            <select name="Companies" id="company" className="w-full p-2 bg-slate-100 rounded-lg border">
                {CompanyDetails.map((item) => (
                    <option value={item.title} key={item.id}>{item.title}</option>
                ))}
            </select>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="position" className="font-semibold text-lg mb-1">Position</label>
            <input type="text" id="position" placeholder="Ex: Warehouse Picker" className="w-full p-2 bg-slate-100 rounded-lg border" />
        </div>

        <div className="flex flex-col mb-4">
            <label className="font-semibold mb-1 text-lg">
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
            <label htmlFor="cities" className="font-semibold text-lg mb-1">City</label>
            <select name="City" id="cities" className="w-full p-2 bg-slate-100 rounded-lg border">
                {cities.map((item) => (
                    <option value={item.city_name} key={item.id}>{item.city_name}</option>
                ))}
            </select>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="cities" className="font-semibold text-lg mb-1">Municipality</label>
            <select name="City" id="cities" className="w-full p-2 bg-slate-100 rounded-lg border">
                {municipality.map((item) => (
                    <option value={item.province_name} key={item.id}>{item.province_name}</option>
                ))}
            </select>
        </div>

        <div className="flex flex-col md:flex-row mb-4 gap-4">
            <div className="flex flex-col w-full">
                <label htmlFor="worksetup" className="font-semibold text-lg mb-1">Work Setup</label>
                {worksetup.map((item) => (
                    <div key={item.id} className="flex items-center mb-1">
                        <input type="checkbox" value={item.name} id={`worksetup-${item.id}`} className="mr-2" />
                        <label htmlFor={`worksetup-${item.id}`}>{item.name}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="experience" className="font-semibold text-lg mb-1">Experience</label>
                {experience.map((item) => (
                    <div key={item.id} className="flex items-center mb-1">
                        <input type="checkbox" value={item.title} id={`experience-${item.id}`} className="mr-2" />
                        <label htmlFor={`experience-${item.id}`}>{item.title}</label>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="industries" className="font-semibold text-lg mb-1">Industries</label>
            <select name="Industry" id="industries" className="w-full p-2 bg-slate-100 rounded-lg border">
                {industries.map((item) => (
                    <option value={item.name} key={item.id}>{item.name}</option>
                ))}
            </select>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="description" className="font-semibold text-lg mb-1">Job Description</label>
            <textarea id="description" placeholder="Ex: Providing technical support and assistance to end-users within the organization" className="w-full p-2 h-36 bg-slate-100 rounded-lg border"></textarea>
        </div>

        <div className="flex flex-col mb-4">
            <label htmlFor="responsibilities" className="font-semibold text-lg mb-1">Responsibilities</label>
            <div className="flex flex-col gap-2 items-center">
                <input type="text" id="responsibilities-1" placeholder="Ex: Provide first-level technical support to end-users via phone" className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border" />
                <input type="text" id="responsibilities-2" placeholder="Ex: Set up and maintain computer hardware" className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border" />
                <input type="text" id="responsibilities-3" placeholder="Ex: Create, modify, and deactivate user accounts and access permissions" className="w-full md:w-5/6 p-2 bg-slate-100 rounded-lg border" />
            </div>
        </div>

        <div className="flex flex-col mb-4 items-center">
            <button type="submit" className="w-full md:w-1/2 p-2 bg-blue-600 rounded-lg border text-white flex justify-center items-center gap-2"><Send /> Submit</button>
        </div>
    </form>
  )
}

export default FormData