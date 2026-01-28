import '../styles/pages/Encoder.css'
import { PrincipalContainer } from "../components/PrincipalContainer.jsx"
import { useTypeCodification } from '../hooks/useTypeCodification.js'
import { CircleRedIcon, CircleYellowIcon, CircleGreenIcon, CopyIcon, DownloadIcon } from "../components/Icons.jsx"

import { useFileContext } from '../hooks/useFileContext.js'
import { useTextEncoder } from '../hooks/useTextEncoder.js'

export function Encoder() {
  const { uploadedFile, handleClickCopyContent, handleClickDownloadFileEncoded, contentEncode } = useFileContext()
  const { typeOfCodification } = useTypeCodification()
  const { textEncoded } = useTextEncoder()

  console.log(textEncoded)

  return (
    <PrincipalContainer>
      <section className="principal-container-output">
        <section className="info-file-to-encode">
          <div className="status-encode">
            Encryption Complete
          </div>
          <div className="name-file">
            {typeOfCodification === 'file' && uploadedFile?.name}
          </div>
          <div className="progress-bar"></div>
        </section>
        <section className="container-output">
          <header className="header-output">
            <div className="container-left">
              <div className="circle-icon red">
                <CircleRedIcon />
              </div>
              <div className="circle-icon yellow">
                <CircleYellowIcon />
              </div>
              <div className="circle-icon green">
                <CircleGreenIcon />
              </div>
              <div className="name-file-output">
                {uploadedFile && uploadedFile.name.split(' ').join('_').slice(0, uploadedFile.name.indexOf('.')) + '.txt'}
              </div>
            </div>
            <div className="container-right">
              <button className="copy-btn" onClick={handleClickCopyContent}>
                <CopyIcon />
                COPY
              </button>
              <button className="download-btn" onClick={handleClickDownloadFileEncoded}>
                <DownloadIcon />
                DOWNLOAD
              </button>
            </div>
          </header>
          <div className="content-file-encoder">
            {typeOfCodification === 'file' && contentEncode}
            {typeOfCodification === 'text' && textEncoded}
          </div>
          <footer className="footer-output">
            {typeOfCodification === 'file' ? contentEncode.length : textEncoded.length} chars
          </footer>
        </section>
      </section>
    </PrincipalContainer>
  )
}