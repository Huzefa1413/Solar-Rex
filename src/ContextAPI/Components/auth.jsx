import { createContext, useContext, useState, useEffect } from "react"
import { login_user, getLogin_user, } from "../APIs/api";
import { useCookies } from 'react-cookie';


// Step 1
const AuthContext = createContext()

// Step 2
export const useAuth = () => {
    return useContext(AuthContext);
}

// Step 3
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [tabData, setTabData] = useState({});

    const [renewalTabData, setRenewalTabData] = useState({});
    const [fileData, setfileData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies();
    // const [cookies, setCookie, removeCookie] = useCookies(["pk2"]);


    async function Login(body) {
        const res = await login_user(body)
        console.log("RREESS", res);

        if (res?.success) {
            console.log("token", res.hash);
            console.log("token", res.user);
            setUser(res?.user)

            setCookie('pk2', res.hash, {
                path: '/',
                maxAge: 6000000,
            });

        }
        return res
    }




    async function GetLoginUser() {
        const response = await getLogin_user()
        console.log("RESPONSE", response);
        if (response.success) {
            setUser(response?.message)

        }


        // if (cookies.pk2) {
        //     const response = {
        //         user: {
        //             name: process.env.REACT_APP_Username,
        //             email: process.env.REACT_APP_REACT_APP_Email,
        //             id: "123123123132",
        //             wallet: "9784653145864532"
        //         }
        //     }
        //     setUser(response?.user)

        //     return response?.user
        // }
        // return null

    }

    function Logout() {
        console.log("FUNCCC");
        removeCookie("pk2")
        setUser(null);
        // GetLoginUser()
    }


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            Login,
            GetLoginUser,
            Logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


