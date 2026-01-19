import '../styles/pages/Header.css'
import { PadlockIcon } from "./Icons.jsx"
import { InitApp } from './InitApp.jsx'
export function Header() {
    return (
        <header className="header-app">
            <div className="header-app-icon">
                <PadlockIcon />
            </div>
            <h2>Base64 Encoder/Decoder</h2>
        </header>
    )
}