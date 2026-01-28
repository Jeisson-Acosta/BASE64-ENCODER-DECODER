import { useContext } from "react";
import { TypeCodificationContext } from "../context/typeCondification.jsx";

export const useTypeCodification = () => {
    const context = useContext(TypeCodificationContext)

    if (context === undefined) {
        throw new Error('No se puede usar typeCodification sin el provider')
    }

    return context
}