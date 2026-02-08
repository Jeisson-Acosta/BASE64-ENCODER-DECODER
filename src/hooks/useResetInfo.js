import { useEncoderContext } from "./useEncoderContext";
export function useResetInfo() {
    const { setUploadedFile, setContentEncode, setContentDecode } = useEncoderContext()

    const handleClickResetInfo = () => {
        setUploadedFile(null)
        setContentEncode('')
        setContentDecode('')
    }

    return { handleClickResetInfo }

}