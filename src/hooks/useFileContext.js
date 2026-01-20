import { useContext } from "react";
import { FileContext } from "../context/file.jsx";

export function useFileContext() {
    const context = useContext(FileContext)
    if (context === undefined) {
        throw new Error('No se puede acceder al Provider de File.')
    }
    return context
}