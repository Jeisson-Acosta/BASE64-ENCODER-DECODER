import { createContext, useState } from "react";
import { useTypeCodification } from "../hooks/useTypeCodification.js";
import toast from "react-hot-toast";

export const EncoderContext = createContext()

export function EncoderProvider({ children }) {
    const [uploadedFile, setUploadedFile] = useState(null)
    // const [textoToEncoder, setTextToEncoder] = useState('')
    const [contentEncode, setContentEncode] = useState('')
    const [contentDecode, setContentDecode] = useState('')
    const { typeOfCodification } = useTypeCodification()

    const handleClickEncodeText = (text) => {
        if (!text) return
        setContentEncode(btoa(text))
        toast.success('Text encoded successfully')
    }

    const handleClickDecodeText = (text) => {
        if (!text) return
        setContentDecode(atob(text))
        toast.success('Text decoded successfully!')
    }

    const handleFiles = (file, pathname) => {
        if (!file) return;
        let base64String;

        const reader = new FileReader();
        reader.onload = (e) => {
            // base64String = e.target.result.split(',')[1];

            // SI es 'Encoder' leemos el archivo.
            if (pathname === '') { 
                base64String = e.target.result.split(',')[1]
                setContentEncode(base64String) 
            }

            // Si es 'Decider' leemos el contenido del archivo.
            if (pathname === 'decoder') { 
                base64String = e.target.result.trim()
                setContentDecode(base64String)                 
            }
        };

        if (pathname === ''){ reader.readAsDataURL(file) }
        if (pathname === 'decoder') { reader.readAsText(file) }
    }

    const handleClickDownloadFileDecoder = ({ nameFile, typeFile }) => {

        console.log(typeFile)

        // Convertir base64 a bytes
        const byteCharacters = atob(contentDecode)
        const byteNumbers = new Uint8Array(byteCharacters.length)

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: typeFile })

        // Crear enlace temporal
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = nameFile
        anchor.click()

        // Limpieza
        URL.revokeObjectURL(url)
        toast.success(`File: ${nameFile} donwloaded successfully!`)
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
        navigator.clipboard.writeText(contentEncode === '' ? contentDecode : contentEncode)
        toast.success('Copied!')
    }

    return (
        <EncoderContext.Provider value={{
            uploadedFile, 
            setUploadedFile,
            handleFiles,
            setContentEncode,
            setContentDecode,
            contentEncode,
            contentDecode,
            handleClickCopyContent,
            handleClickDownloadFileDecoder,
            handleClickDownloadFileEncoded,
            handleClickEncodeText,
            handleClickDecodeText
        }}>
            {children}
        </EncoderContext.Provider>
    )
}