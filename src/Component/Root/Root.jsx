import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
<<<<<<< HEAD
import Footer from "../Footer/Footer";
=======
import "./Root.css"
>>>>>>> 3199d399567f2a76ae7ba439033e3ca96c2f777c

const Root = () => {
  
    return (
<<<<<<< HEAD
        <div>
=======
        <div className="font">
>>>>>>> 3199d399567f2a76ae7ba439033e3ca96c2f777c
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;