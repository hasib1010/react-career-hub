
const Banner = () => {
    return (
        <div className="flex items-center justify-center mt-16 ml-10">
            <div>
                <h1 className="text-6xl font-extrabold  leading-tight">
                    One Step <br /> Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span>
                </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-ghost rounded-md px-6 py-5 mt-2 underline">Get Started</button>
            </div>
            <div>
                <img src="./src/assets/user.png " alt="" />
            </div>
        </div>
    );
};

export default Banner;