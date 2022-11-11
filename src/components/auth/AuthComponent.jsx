/*
 * File: AuthComponent.jsx
 * Project: Domain UI
 * path: /src/components/auth
 * File Created: Tuesday, 6th September 2022 11:03:23 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 6th September 2022 11:03:23 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import LoginImg from '../../assets/login-register.jpg'
import LogoImg from '../../assets/logo.png'
import QRComponent from './QRComponent'

const AuthComponent = () => {
    return <div className="container">
        <div className="row shadow-sm">
            <div className="col-md-7 d-none d-sm-block">
                <img src={LoginImg} className="img-fluid" alt="Login" loading='lazy' />
            </div>
            <div className="col-md-5 col-sm-12">
                <img src={LogoImg} className='rounded mx-auto d-block my-5' alt="Logo" loading='lazy' />
                <QRComponent />
            </div>
        </div>
    </div>
}

export default AuthComponent