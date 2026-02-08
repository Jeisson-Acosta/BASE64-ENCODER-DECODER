import { PrincipalContainer } from "../components/PrincipalContainer.jsx"
import { useTypeCodification } from "../hooks/useTypeCodification.js"
import { useEncoderContext } from "../hooks/useEncoderContext.js"
import { useTypeMymeSelected } from "../hooks/useTypeMymeSelected.js"
import { CircleRedIcon, CircleYellowIcon, CircleGreenIcon, CopyIcon, DownloadIcon } from "../components/Icons.jsx"

export function Decoder() {
  
  const { uploadedFile, handleClickCopyContent, handleClickDownloadFileDecoder, contentDecode } = useEncoderContext()
  const { typeOfCodification } = useTypeCodification()
  const { typeMymeSelected } = useTypeMymeSelected()

  return (
    <PrincipalContainer>
            <section className="principal-container-output">
        <section className="info-file-to-encode">
          <div className="status-encode">
            Decryption Complete
          </div>
          <div className="name-file" style={{display: typeOfCodification === 'file' ? 'flex' : 'none'}}>
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
                {uploadedFile && uploadedFile.name.split(' ').join('_').slice(0, uploadedFile.name.indexOf('.')) + `.${typeMymeSelected.split('/')[1]}`}
                {typeOfCodification === 'text' && 'output_base64.txt'}
              </div>
            </div>
            <div className="container-right">
              <button className="copy-btn" onClick={handleClickCopyContent}>
                <CopyIcon />
                COPY
              </button>
              <button className="download-btn" onClick={() => handleClickDownloadFileDecoder({ nameFile: uploadedFile.name.split(' ').join('_').slice(0, uploadedFile.name.indexOf('.')), typeFile: typeMymeSelected })}>
                <DownloadIcon />
                DOWNLOAD
              </button>
            </div>
          </header>
          <div className="content-file-encoder">
            {contentDecode}
          </div>
          <footer className="footer-output">
            {contentDecode.length} chars
          </footer>
        </section>
      </section>
    </PrincipalContainer>
  )
}