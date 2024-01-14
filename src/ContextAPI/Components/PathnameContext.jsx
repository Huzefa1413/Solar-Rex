import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


// Step 1
const PathnameContext = createContext()

// Step 2
export const usePathname = () => {
    return useContext(PathnameContext);
}

// Step 3
export const PathnameProvider = ({ children }) => {
    const location = useLocation()

    const [style, setStyle] = useState(sessionStorage.getItem("a") || "home")

    useEffect(() => {
        console.log("location.pathname", location.pathname);
        handlePathname()

    }, [location.pathname]);

    const handlePathname = () => {
        // GLOBAL
        if (window.location.pathname == "/application-tracking") {
            sessionStorage.setItem("a", "application_tracking")
            setStyle("application_tracking")
        }
        if (window.location.pathname == "/profile") {
            sessionStorage.setItem("a", "profile")
            setStyle("profile")
        }
        // ADMIN
        if (window.location.pathname == "/customerlist") {
            sessionStorage.setItem("a", "customerlist")
            setStyle("customerlist")
        }
        if (window.location.pathname == "/transactiontable") {
            sessionStorage.setItem("a", "transactiontable")
            setStyle("transactiontable")
        }
        if (window.location.pathname == "/buyenergy") {
            sessionStorage.setItem("a", "buyenergy")
            setStyle("buyenergy")
        }
        if (window.location.pathname == "/all-users/universities-list") {
            sessionStorage.setItem("a", "universities")
            setStyle("universities")
        }
        if (window.location.pathname == "/all-users/others-list") {
            sessionStorage.setItem("a", "admin")
            setStyle("admin")
        }
        if (window.location.pathname == "/approval-flow") {
            sessionStorage.setItem("a", "approval_flow")
            setStyle("approval_flow")
        }
        if (window.location.pathname == "/disbustment-process") {
            sessionStorage.setItem("a", "disbustment_process")
            setStyle("disbustment_process")
        }
        if (window.location.pathname == "/repayment-flow") {
            sessionStorage.setItem("a", "repayment_flow")
            setStyle("repayment_flow")
        }
        if (window.location.pathname == "/programs") {
            sessionStorage.setItem("a", "programs")
            setStyle("programs")
        }
        if (window.location.pathname == "/programs") {
            sessionStorage.setItem("a", "programs")
            setStyle("programs")
        }
        if (window.location.pathname == "/fresh-cases") {
            sessionStorage.setItem("a", "freshCases")
            setStyle("freshCases")
        }
        if (window.location.pathname == "/renewal-cases") {
            sessionStorage.setItem("a", "renewalCases")
            setStyle("renewalCases")
        }
        if (window.location.pathname == "/university-profile") {
            sessionStorage.setItem("a", "university_profile")
            setStyle("university_profile")
        }
        // STUDENT
        if (window.location.pathname == "/application-form") {
            sessionStorage.setItem("a", "application_form")
            setStyle("application_form")
        }
        if (window.location.pathname == "/renewal-form") {
            sessionStorage.setItem("a", "renewal_form")
            setStyle("renewal_form")
        }
        if (window.location.pathname == "/dashboard") {
            sessionStorage.setItem("a", "repayment_history")
            setStyle("repayment_history")
        }
        // UNIVERSITIES
        if (window.location.pathname == "/university-dashboard") {
            sessionStorage.setItem("a", "university_dashboard")
            setStyle("university_dashboard")
        }
        if (window.location.pathname == "/fresh-cases-report") {
            sessionStorage.setItem("a", "fresh_cases_report")
            setStyle("fresh_cases_report")
        }
        if (window.location.pathname == "/renewal-cases-report") {
            sessionStorage.setItem("a", "renewal_cases_report")
            setStyle("renewal_cases_report")
        }
        if (window.location.pathname == "/disbustment") {
            sessionStorage.setItem("a", "disbustment")
            setStyle("disbustment")
        }
    };


    return (
        <PathnameContext.Provider value={{ handlePathname, style }}>
            {children}
        </PathnameContext.Provider>
    )
}