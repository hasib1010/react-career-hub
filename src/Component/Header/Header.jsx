import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between mt-4">
            <div><h3 className="text-5xl font-extrabold">CareerHub</h3></div>
            <div className=" flex gap-7 text-2xl font-bold">
                <Link className="hover:text-[#7E90FE]">Statistics</Link>
                <Link className="hover:text-[#7E90FE]">Applied Jobs</Link>
                <Link className="hover:text-[#7E90FE]">Blog</Link>
            </div>
            <div>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-5 text-white font-extrabold text-xl rounded-xl ">Start Applying</button>
            </div>
        </div>
    );
};

export default Header;