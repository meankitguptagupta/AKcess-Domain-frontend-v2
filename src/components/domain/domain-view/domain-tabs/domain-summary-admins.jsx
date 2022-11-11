/*
 * File: domain-summary-admins.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 5:16:53 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 5:16:53 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { ModalComponent } from "../../../common/ModalComponent"
import { forwardRef, useImperativeHandle, useState } from "react"
import { DomainAdminListComponent } from "./domain-admin-list"

export const DomainSummaryAdmin = forwardRef(({ admins }, ref) => {
    const [show, setShow] = useState(false)

    useImperativeHandle(ref, () => ({
        toggle() {
            setShow(!show)
        }
    }))

    return <ModalComponent title="Admin List" show={show} handleClose={e => setShow(!show)} size="lg">
        <DomainAdminListComponent admins={admins} />
    </ModalComponent>
})