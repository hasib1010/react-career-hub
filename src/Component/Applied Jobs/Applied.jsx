import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import { MdOutlineFilterAlt } from 'react-icons/md';

const Applied = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = (filter)=>{
        if(filter === 'all'){
                setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
           const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
           setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const siteJob = appliedJobs.filter(job=> job.remote_or_onsite === "Onsite");
            setDisplayJobs(siteJob);
        }
    }
    useEffect(() => {
        const storedJobsId = getStoredApplication();
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobsId.includes(job.id))
            setAppliedJobs(appliedJobs);
            setDisplayJobs(appliedJobs);
        }
    }, [])
    return (
        <div>
            <p>Applied in {appliedJobs.length} jobs</p>
            <details className="dropdown">
                <summary className="m-1 btn">Filter by <MdOutlineFilterAlt></MdOutlineFilterAlt></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleFilter('onsite')}><a>On-Site</a></li>
                </ul>
            </details>
            <br /><br /><hr />
            <div className="grid grid-cols-2  text-center">
                {
                    displayJobs.map(job =>
                        <div className="flex flex-col justify-center items-center gap-7 bg-yellow-200 text-black mt-5" key={job.id}>
                            <img className="w-40" src={job.logo} alt="" />
                            <h1>{job.job_title}</h1>
                            <p>{job.company_name}</p>
                            <p>{job.remote_or_onsite}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Applied;