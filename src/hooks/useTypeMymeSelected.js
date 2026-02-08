import { useState } from "react"

const MYME_TYPES = {
    pdf: 'application/pdf',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    txt: 'text/plain'
}

export function useTypeMymeSelected() {
    const [typeMymeSelected, setTypeMymeSelected] = useState('application/pdf')
    
    const handleChangeTypeFileSelected = e => {
        setTypeMymeSelected(MYME_TYPES[e.target.value])
    }

    return { typeMymeSelected, handleChangeTypeFileSelected }
}