import { useEncoderContext } from "./useEncoderContext";
export function useResetInfo() {
    const { setUploadedFile, setContentEncode } = useEncoderContext()

    const handleClickResetInfo = () => {
        setUploadedFile(null)
        setContentEncode('')
    }

    return { handleClickResetInfo }

}