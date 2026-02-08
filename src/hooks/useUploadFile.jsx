import { useRef, useEffect } from "react"
import { useEncoderContext } from "./useEncoderContext"
import { useLocation } from "react-router-dom"

export function useUploadFile() {
    const { uploadedFile, setUploadedFile, handleFiles } = useEncoderContext()
    const inputfileRef = useRef()
    const uploadfileContainerRef = useRef()

    const locationPage = useLocation().pathname.split('/')[1]

    // Simulamos que dieron click en el input type file con el boton.
    const handleClickBrowseFile = () => { inputfileRef.current.click() }

    const handleChangeUploadFile = () => { 
        setUploadedFile(inputfileRef.current.files[0])
        handleFiles(inputfileRef.current.files[0], locationPage) 
    }

    useEffect(() => {
        const container = uploadfileContainerRef.current;

        if (!container) return

        // Evento cuando estan arrastrando un archivo dentro del contenedor
        const handleDragOver = (e) => {
            e.preventDefault();
            container.classList.add('dragover');
        };

        // Evento cuando dejan de arrastar un archivo dentro de contenedor.
        const handleDragLeave = () => { container.classList.remove('dragover'); };

        // Evento cuando sueltan el archivo en el contenedor.
        const handleDrop = (e) => {
            e.preventDefault();
            container.classList.remove('dragover')
            setUploadedFile(e.dataTransfer.files[0])
            handleFiles(e.dataTransfer.files[0], locationPage);
        };

        // if (uploadedFile !== null) handleFiles(uploadedFile)

        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('dragleave', handleDragLeave);
        container.addEventListener('drop', handleDrop);

        // Limpieza de los event listeners
        return () => {
            container.removeEventListener('dragover', handleDragOver);
            container.removeEventListener('dragleave', handleDragLeave);
            container.removeEventListener('drop', handleDrop);
        };
    }, [uploadedFile]);

    return { uploadedFile, inputfileRef, uploadfileContainerRef, handleClickBrowseFile, handleChangeUploadFile }

}
