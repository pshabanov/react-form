import React, {createContext, useContext, useState} from "react";


const DataContext = createContext(null)

export const DataProvider = ({children}:any) => {
    const [data, setDate] = useState({})

    const setValues = (values:any) => {
        setDate(prevState => ({
            ...prevState,
            ...values
        }))
    }
    return <DataContext.Provider value={{data, setValues}}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)

