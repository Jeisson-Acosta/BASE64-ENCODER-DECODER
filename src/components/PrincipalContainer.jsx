import '../styles/components/PrincipalContainer.css'
import { UploadFileIcon } from './Icons.jsx'
import { useUploadFile } from '../hooks/useUploadFile.jsx'

export function PrincipalContainer({ children }) {

    const { uploadedFile, inputfileRef, uploadfileContainerRef, handleClickBrowseFile, handleChangeUploadFile } = useUploadFile()

    return (
        <section className="principal-container">
            {uploadedFile === null ? (
                <section className="uploaded-file" ref={uploadfileContainerRef}>
                    <div className="info">
                        <div className="icon-upload">
                            <UploadFileIcon />
                        </div>
                        <div className="description">
                            <h3>Drag & Drop your file here</h3>
                            <p>or click to browse local drive</p>
                        </div>
                        <input type="file" hidden ref={inputfileRef} onChange={handleChangeUploadFile} />
                        <button onClick={handleClickBrowseFile}>
                            BROWSE FILE
                        </button>
                    </div>
                </section>
            ) : (
                <>
                    {children}
                </>
            )
            }
        </section>
    )

}