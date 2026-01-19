import { Header } from "./Header.jsx"
import { InitApp } from "./InitApp.jsx"
import { Outlet } from "react-router-dom"
import { PrincipalContainer } from "./PrincipalContainer.jsx"

export default function Layout() {
    return (
        <>
            <Header />
            <InitApp />
            {/*<PrincipalContainer />*/}
            <Outlet />
        </>
    )
}