import { createContext, useContext, useState, useEffect } from "react"



// Step 1
const UserDataContext = createContext()

// Step 2
export const useUserData = () => {
    return useContext(UserDataContext);
}

// Step 3
export const UserDataProvider = ({ children }) => {



    return (
        <UserDataContext.Provider value={{}}>
            {children}
        </UserDataContext.Provider>
    )
}


