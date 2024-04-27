import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Riple } from "react-loading-indicators";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location= useLocation();
    console.log(location.pathname);


    if(loading){
        return <div className=" min-h-screen flex justify-center items-center">
                    <Riple 
                    color="#3177cc" 
                    size="medium" 
                    text="loading.." 
                    textColor="#080808" 
                    />
                 </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;