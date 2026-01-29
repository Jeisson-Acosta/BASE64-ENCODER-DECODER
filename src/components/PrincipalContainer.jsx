import '../styles/components/PrincipalContainer.css'
import { UploadFileIcon, TextIcon, FileIcon } from './Icons.jsx'
import { useUploadFile } from '../hooks/useUploadFile.jsx'
import { useTypeCodification } from '../hooks/useTypeCodification.js'

import { useEncoderContext } from '../hooks/useEncoderContext.js'
import { useResetInfo } from '../hooks/useResetInfo.js'
import { useState } from 'react'

export function PrincipalContainer({ children }) {

    const [textToEncoder, setTextToEncoder] = useState('')
    const { uploadedFile, inputfileRef, uploadfileContainerRef, handleClickBrowseFile, handleChangeUploadFile } = useUploadFile()
    const { typeOfCodification, handleClickChangeTypeOfCodification } = useTypeCodification()
    const { handleClickEncodeText, contentEncode } = useEncoderContext()
    const { handleClickResetInfo } = useResetInfo()

    const handleClickButtonText = () => {
        handleClickResetInfo()
        handleClickChangeTypeOfCodification('text')
    }

    const handleClickButtonFile = () => {
        handleClickResetInfo()
        handleClickChangeTypeOfCodification('file')
    }
    
    return (
        <section className="principal-container">
            <div className="buttons_options">
                <button 
                    className={'btn_option' + (typeOfCodification === 'text' ? ' active_option' : '')} 
                    onClick={handleClickButtonText}
                >
                    <TextIcon />
                    TEXT
                </button>
                <button 
                    className={'btn_option' + (typeOfCodification === 'file' ? ' active_option' : '')}  
                    onClick={handleClickButtonFile}
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
            ) : typeOfCodification === 'text' && contentEncode === '' ? (
                <section className="container-text-to-encoder">
                    <textarea
                        autoFocus
                        className='text-to-encoder'
                        placeholder='Enter your text here to encoder'
                        onChange={e => setTextToEncoder(e.target.value)}
                    >
                    </textarea>
                    <button onClick={() => handleClickEncodeText(textToEncoder)}>
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