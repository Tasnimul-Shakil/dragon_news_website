import { Outlet } from "react-router";


const Root = () => {
    return (
        <div className=" max-w-7xl mx-auto font-poppins">
            <Outlet/>
        </div>
    );
};

export default Root;