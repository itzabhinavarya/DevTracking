import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext(null)

export const useUser = () => {
    const User = useContext(UserContext)
    return User
}
export const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("itzabhianvayar")
    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}
