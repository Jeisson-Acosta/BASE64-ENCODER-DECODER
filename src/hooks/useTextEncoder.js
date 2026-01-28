import { useState } from "react"
export function useTextEncoder() {
    const [textoToEncoder, setTextToEncoder] = useState('')
    const [textEncoded, setTextEncoded] = useState('')

    const handleClickEncodeText = () => {
        if (!textoToEncoder) return
        setTextEncoded(btoa(textoToEncoder))
    }

    return { setTextToEncoder, textoToEncoder, textEncoded, handleClickEncodeText }
}