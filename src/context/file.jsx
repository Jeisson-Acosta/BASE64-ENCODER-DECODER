import { createContext, useState } from "react";

export const FileContext = createContext()

export function FileProvider({ children }) {
    const [uploadedFile, setUploadedFile] = useState(null)
    const [contentEncode, setContentEncode] = useState('')

    const handleFiles = (file) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result.split(',')[1];
            setContentEncode(base64String);
        };
        reader.readAsDataURL(file);
    }


    const handleClickDownloadFile = ({ nameFile, typFile }) => {
        // Convertir base64 a bytes
        const byteCharacters = atob(contentEncode)
        const byteNumbers = new Array(byteCharacters.length)

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: typFile })

        // Crear enlace temporal
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = nameFile
        anchor.click()

        // Limpieza
        URL.revokeObjectURL(url)
    }


    return (
        <FileContext.Provider value={{
            uploadedFile, 
            setUploadedFile,
            handleFiles,
            contentEncode,
            handleClickDownloadFile
        }}>
            {children}
        </FileContext.Provider>
    )
}