import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div className="max-w-full lg:max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;