/*
 * File: ModalComponent.jsx
 * Project: Domain UI
 * path: /src/components/common
 * File Created: Monday, 19th September 2022 8:48:42 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 19th September 2022 8:48:42 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */
import { Modal } from 'react-bootstrap';

export const ModalComponent = ({ title, children, handleClose, footer, show = false, size = "sm" }) => {

    return <Modal
        size={size}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {footer}
        </Modal.Footer>
    </Modal>
}