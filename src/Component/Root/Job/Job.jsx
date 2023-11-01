import { MdOutlineLocationOn } from 'react-icons/Md';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const Job = ({ jobData }) => {
    console.log(jobData);
    const { logo, remote_or_onsite, company_name, job_title, location, salary, job_type } = jobData;

    return (
        <div className="flex flex-col justify-between items-start gap-2 p-5 m-3 bg-slate-100 w-80 rounded-lg">
            <img className="h-10 w-32 mx-auto" src={logo} alt="" />
            <h1 className="font-extrabold text-black">{job_title}</h1>
            <h1>{company_name}</h1>
            <div className="flex gap-5">
                <button className="py-3 px-2  border-4 border-[#7E90FE] rounded-lg font-extrabold text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="py-3 px-2  border-4 border-[#7E90FE] rounded-lg font-extrabold text-[#7E90FE]">{job_type}</button>
            </div>
           <div className="flex justify-between items-center gap-3">
           <p className='flex items-center'><MdOutlineLocationOn className='text-2xl text-black'></MdOutlineLocationOn>{location}</p>
            <p className='flex items-center'><AiOutlineDollarCircle className='text-2xl text-black'></AiOutlineDollarCircle>{salary}</p>
           </div>
            <button className="btn bg-purple-600 text-white normal-case">View Details</button>
        </div>
    );
};

export default Job;