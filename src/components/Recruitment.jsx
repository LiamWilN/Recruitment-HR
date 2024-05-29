import React, { useState } from 'react';
import FetchingData from '../hooks/FetchingData';
import { Search } from 'lucide-react';

const Recruitment = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='flex flex-col items-center h-full'>
      <div className='flex justify-between w-w90p p-2 shadow-md bg-white'>
        <h1 className='font-bold text-2xl p-2'>
          Job List
        </h1>
        <div className='flex items-center gap-2 mr-4'>
          <input
            type="text"
            className='rounded-lg w-48 active:outline-none hover:outline-none bg-slate-100'
            value={searchText}
            onChange={handleInputChange}
          />
          <Search />
        </div>
      </div>
      <FetchingData filterCriteria={{ job_title: searchText }} />
    </div>
  );
};

export default Recruitment;
