/*
 * File: TopbarComponent.jsx
 * Project: Domain UI
 * path: /src/components/layout
 * File Created: Saturday, 17th September 2022 12:11:38 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 17th September 2022 12:11:38 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { getCurrentUser, logout } from "../../service/auth"
import { WithRouter } from "../common/WithRouter"
import { UserLoginContext } from "../../context/UserContext"
import { ProfileComponent } from "./ProfileComponent"

const TopbarComponent = ({ navigate }) => {

    const { loginDispatch } = useContext(UserLoginContext)

    const logoutUser = () => {
        logout()
        loginDispatch({ type: 'LOGOUT' })
        navigate({ from: { pathname: "/login" } })
    }

    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand py-0 fs-4" to="/">{process.env.REACT_APP_NAME}</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/domains">Domains</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logs">Logs</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle cursor-pointer text-capitalize" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {getCurrentUser()?.firstName} {getCurrentUser()?.lastName}
                        </span>
                        <ul className="dropdown-menu">
                            <li><ProfileComponent /></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><span className="dropdown-item cursor-pointer" onClick={logoutUser}>Logout</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default WithRouter(TopbarComponent)