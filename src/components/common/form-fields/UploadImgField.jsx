/*
 * File: UploadField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Saturday, 24th September 2022 9:53:20 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 9:53:21 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useState } from "react"
import { Form, Image } from "react-bootstrap"
import DefaultImg from '../../../assets/default.png'
import { ModalComponent } from "../ModalComponent"
import './UploadImgField.css'

export const UploadImgField = ({ label, onChange, required = false, error = null, value }) => {
    const [show, setShow] = useState(false)

    const EnlargeImg = () => {
        return <ModalComponent handleClose={e => setShow(!show)} show={show} size="sm">
            <Image src={value || DefaultImg} thumbnail width={300} height={300} />
        </ModalComponent>
    }

    const openUploadImg = (e) => {
        e.target.closest('.upload-img-container').querySelector('[type="file"]').click()
    }

    return <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>
        <div className="d-flex upload-img-container">
            <EnlargeImg />
            <Image src={value || DefaultImg} thumbnail width={150} height={150} className="upload-img" onClick={e => setShow(!show)} />
            <span className="upload-img-btn bg-primary px-2 py-1 text-white text-sm cursor-pointer" title="Upload Image" onClick={e => openUploadImg(e)}>
                <i className="fa fa-upload" aria-hidden="true"></i>
            </span>
            <Form.Control type="file" className="d-none" accept="image/jpg,image/png,image/jpeg" onChange={onChange} />
        </div>
        <Form.Text className={`${error ? 'text-danger' : 'text-mute'} text-sm`}>{error}</Form.Text>
    </Form.Group>
}