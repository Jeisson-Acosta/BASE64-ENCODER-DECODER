import { NavLink } from "react-router-dom"
import '../styles/components/InitApp.css'
import { PadlockWhiteIcon, PadlockOpenIcon } from "./Icons.jsx"
export function InitApp() {
    return (
        <section className="init-app">
            <div className="initial-information">
                <h1 className="title">Secure Base64 Encoder/Decoder</h1>
                <p className="description">Encrypt sensitive files into Base64 strings or decode them back securely within your browser.</p>
            </div>
            <div className="initial-actions">
                <NavLink to={"/"}>
                    <button className="btn-encode">
                        <PadlockWhiteIcon />
                        ENCODER
                    </button>
                </NavLink>
                <NavLink to={"/decoder"}>
                    <button className="btn-decode">
                        <PadlockOpenIcon />
                        DECODER
                    </button>
                </NavLink>
            </div>
        </section>
    )
}