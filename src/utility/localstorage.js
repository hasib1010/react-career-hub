const getStoredApplication = () => {
    const storedAppliedJobs = localStorage.getItem('applied-jobs');
    if (storedAppliedJobs) {
        return JSON.parse(storedAppliedJobs);
    }
    return [];
}
const saveJobApplication = (id) => {
        const storedAppliedJobs = getStoredApplication();
        const exist = storedAppliedJobs.find(jobId=> jobId === id);
        if (!exist) {
            storedAppliedJobs.push(id);
            localStorage.setItem('applied-jobs', JSON.stringify(storedAppliedJobs))
        }
}

export { saveJobApplication , getStoredApplication}