import '../styles/components/PrincipalContainer.css'
import { UploadFileIcon, TextIcon, FileIcon } from './Icons.jsx'
import { useUploadFile } from '../hooks/useUploadFile.jsx'
import { useTypeCodification } from '../hooks/useTypeCodification.js'
import { useTextEncoder } from '../hooks/useTextEncoder.js'

export function PrincipalContainer({ children }) {

    const { uploadedFile, inputfileRef, uploadfileContainerRef, handleClickBrowseFile, handleChangeUploadFile } = useUploadFile()
    const { typeOfCodification, handleClickChangeTypeOfCodification } = useTypeCodification()
    const { setTextToEncoder, textEncoded, handleClickEncodeText } = useTextEncoder()

    console.log(textEncoded)

    return (
        <section className="principal-container">
            <div className="buttons_options">
                <button 
                    className={'btn_option' + (typeOfCodification === 'text' ? ' active_option' : '')} 
                    onClick={() => handleClickChangeTypeOfCodification('text')}
                >
                    <TextIcon />
                    TEXT
                </button>
                <button 
                    className={'btn_option' + (typeOfCodification === 'file' ? ' active_option' : '')}  
                    onClick={() => handleClickChangeTypeOfCodification('file')}
                >
                    <FileIcon />
                    FILE
                </button>
            </div>
            {uploadedFile === null && typeOfCodification === 'file' ? (
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
            ) : typeOfCodification === 'text' && textEncoded === '' ? (
                <section className="container-text-to-encoder">
                    <textarea
                        autoFocus
                        className='text-to-encoder'
                        placeholder='Enter your text here to encoder'
                        onChange={e => setTextToEncoder(e.target.value)}
                    >
                    </textarea>
                    <button onClick={handleClickEncodeText}>
                        Encoder
                    </button>
                </section>
            )
            :(
                <>
                    {children}
                </>
            )
            }
        </section>
    )

}