<<<<<<< HEAD
import { NavLink } from "react-router-dom";

const Header = () => {
    const link = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistic"}>Statistics</NavLink></li>
        <li><NavLink to={"/applied"}>Applied Jobs</NavLink></li>
        <li><NavLink to={"/blog"}>Blogs</NavLink></li>
        </>
    return (
        
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Start Applying</a>
=======
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
>>>>>>> 3199d399567f2a76ae7ba439033e3ca96c2f777c
            </div>
        </div>
    );
};

export default Header;