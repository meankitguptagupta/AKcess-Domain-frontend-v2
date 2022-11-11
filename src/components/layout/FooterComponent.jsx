/*
 * File: FooterComponent.jsx
 * Project: Domain UI
 * path: /src/components/layout
 * File Created: Saturday, 17th September 2022 12:14:51 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 17th September 2022 12:14:51 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { NavLink } from "react-router-dom"
import LogoImg from '../../assets/logo.png'
import SessionRemainComponent from "./SessionRemainComponent"

export const FooterComponent = ({ loginStatus }) => {
    const year = new Date().getFullYear()
    return <nav className="navbar bg-light fixed-bottom">
        <div className="container-fluid">
            <div className="d-none d-md-block">
                <img src={LogoImg} width={70} loading="lazy" alt="Logo" />
            </div>
            <div className="text-center d-none d-md-block">
                Copyright &#169; {year} <NavLink to="/" className="text-decoration-none">{process.env.REACT_APP_NAME} Labs</NavLink>. All rights reserved
            </div>
            {loginStatus && <SessionRemainComponent />}
        </div>
    </nav>
}