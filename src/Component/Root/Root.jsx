import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Root.css"

const Root = () => {
  
    return (
        <div className="font">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;