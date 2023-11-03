import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInit = parseInt(id)
    const clickedJobs = jobs.find(job => job.id === idInit)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = clickedJobs;
    const handleApplyJobs=()=>{
        saveJobApplication(idInit);
        toast("Applied Successfully!")
    }
    return (
        <div>
            <h1 className="text-center my-3 text-5xl font-extrabold">Job Details</h1>

            <div className="container mx-auto  grid grid-cols-4 ">
                <div className="col-span-3">

                    <p>Job Description:{job_description}</p>
                    <br /><br />
                    <p>Job Responsibility: {job_responsibility} </p>
                    <br />
                    <p>Education: {educational_requirements}</p><br />
                    <p>EXperience: {experiences}</p>
                </div>
                <div className=" ">
                    <h1>Job Details</h1><br />
                    <h1> {job_title}</h1>
                    <p>$ Salary:  {salary} Per month</p>
                    {job_title}
                    <br /><br />
                    <hr />
                    <br />
                    <p>Contact Information</p>
                    <p>Phone: {contact_information.phone}</p>
                    <p>Email: {contact_information.email}</p>
                    <p>Address: {contact_information.address}</p>
                    <br /><br />
                    <button onClick={handleApplyJobs} className="btn btn-primary mb-3 w-full">Apply now</button>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;