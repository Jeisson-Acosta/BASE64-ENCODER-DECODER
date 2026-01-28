import { createContext, useState } from "react";

export const TypeCodificationContext = createContext()

export function TypeCodificationProvider({ children }) {
    const [typeOfCodification, setTypeOfCodification] = useState('text') // Text, File

    const handleClickChangeTypeOfCodification = (type) => { setTypeOfCodification(type) }

    return (
        <TypeCodificationContext.Provider value={{
            typeOfCodification,
            handleClickChangeTypeOfCodification
        }}>
            {children}
        </TypeCodificationContext.Provider>
    )
}