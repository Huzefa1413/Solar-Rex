import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { login } from "../redux/actions/actions";
// import { Get_Login_User } from "../helpers/API";


import { useAuth } from "../ContextAPI/Components/auth"
import { useCookies } from 'react-cookie';


const PrivateRoute = () => {
    const location = useLocation();
    const [cookies, setCookie] = useCookies();
    const [loading, setLoading] = useState(true);
    const { user, GetLoginUser, setUser } = useAuth()

    function isValidObject(obj) {
        return typeof obj != "undefined" && typeof obj === 'object' && obj !== null && Object.keys(obj).length > 0;
    }
   

    useEffect(() => {
        // Once the API call is complete, update the state with the data and setLoading to false
        console.log("location.pathname ", location.pathname, user);
        if (user == null || (Object.values(user))?.length == 0 || cookies?.pk2 == null || typeof cookies?.pk2 == "undefined") {
            GetLoginUser(encodeURIComponent(cookies?.pk2))
                .then(data => {
                    console.log("private routes #1");
                    console.log(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                })

        } else {
            setLoading(false);
            console.log("private routes #2");
            console.log(user);

        }

    }, [location.pathname]);



    if (loading) {
        // Render a loading message or spinner while the API call is in progress
        return <p>Loading...</p>;
    }

    if (!loading && !isValidObject(user)) {
        // Render the "Navigate" component to redirect to another route
        return <Navigate to="/sign-in" />
    }

    if (!loading && isValidObject(user)) {
        // Render the "Outlet" component to render the child routes
        return <Outlet />;
    }
}



export default PrivateRoute;