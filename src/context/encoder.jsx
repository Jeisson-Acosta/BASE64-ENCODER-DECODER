import { createContext, useState } from "react";
import { useTypeCodification } from "../hooks/useTypeCodification.js";
import toast from "react-hot-toast";

export const EncoderContext = createContext()

export function EncoderProvider({ children }) {
    const [uploadedFile, setUploadedFile] = useState(null)
    // const [textoToEncoder, setTextToEncoder] = useState('')
    const [contentEncode, setContentEncode] = useState('')
    const { typeOfCodification } = useTypeCodification()

    const handleClickEncodeText = (text) => {
        if (!text) return
        setContentEncode(btoa(text))
    }

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

    const handleClickDownloadFileEncoded = () => {
        // Crear un blob con el contenido
        const blob = new Blob([contentEncode], { type: 'text/plain;charset=utf-8' })

        const nameFile = typeOfCodification === 'file' ? uploadedFile.name.split(' ').join('_').slice(0, uploadedFile.name.indexOf('.')) + '.txt' : 'output_base64.txt'

        // Crear un enlace temporal
        const anchor = document.createElement('a')
        anchor.href = URL.createObjectURL(blob)
        anchor.download = nameFile

        anchor.click()
        
        // Limpiar
        URL.revokeObjectURL(anchor.href)
        
        toast.success(`File downloaded: ${nameFile}`)
    }

    const handleClickCopyContent = () => { 
        navigator.clipboard.writeText(contentEncode) 
        toast.success('Copied!')
    }

    return (
        <EncoderContext.Provider value={{
            uploadedFile, 
            setUploadedFile,
            handleFiles,
            setContentEncode,
            contentEncode,
            handleClickCopyContent,
            handleClickDownloadFile,
            handleClickDownloadFileEncoded,
            handleClickEncodeText
        }}>
            {children}
        </EncoderContext.Provider>
    )
}