/*
 * File: ProfileComponent.jsx
 * Project: Domain UI
 * path: /src/components/layout
 * File Created: Monday, 26th September 2022 1:47:49 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 1:47:49 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useState } from "react"
import { getCurrentUser } from "../../service/auth"
import { ModalComponent } from "../common/ModalComponent"
import DefaultImg from '../../assets/default.png'

export const ProfileComponent = () => {
    const [show, setShow] = useState(false)

    const user = getCurrentUser()

    return <>
        <span onClick={e => setShow(!show)} className="dropdown-item cursor-pointer">Profile</span>

        <ModalComponent show={show} title="User profile" handleClose={e => setShow(!show)}>
            <div className="d-flex justify-content-center mb-3">
                <img src={DefaultImg} className="img-thumbnail text-center" width={150} height={150} alt="logo" />
            </div>
            <div className="row text-center">
                <div className="col-md-4">Name</div>
                <div className="col-md-8">{user?.firstName} {user?.lastName}</div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">Email</div>
                <div className="col-md-8">{user?.email}</div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">AKcessID</div>
                <div className="col-md-8">{user?.akcessId}</div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">Phone</div>
                <div className="col-md-8">{user?.phone}</div>
            </div>
        </ModalComponent>
    </>
}