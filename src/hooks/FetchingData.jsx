import React, { useState, useEffect } from 'react';

const FetchingData = () => {
    const [jobs, getJobs] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => getJobs(data.data)) // Extract 'data' array from the response
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item.id} || {item.first_name} {item.last_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchingData;
