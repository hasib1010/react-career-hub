import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Root/Job/Job";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setDatalength] = useState(4)
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="text-center">
            <h1 className="text-5xl">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 container w-3/4 my-7 mx-auto">
                {
                    jobs.slice(0, datalength).map(jobData => <Job jobData={jobData}></Job>)
                }
            </div>

            <div className={datalength===jobs.length && 'hidden'}>
                <button onClick={() => { setDatalength(jobs.length) }}
                    className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default Featured;