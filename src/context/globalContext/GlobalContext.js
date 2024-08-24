import { createContext, useRef, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [openSideBar, setOpenSideBar] = useState(false)
    const [activeTab, setActiveTab] = useState("home")
    const mainRef = useRef()

    return (
        <GlobalContext.Provider
            value={{
                openSideBar,
                setOpenSideBar,
                activeTab,
                setActiveTab,
                mainRef
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}