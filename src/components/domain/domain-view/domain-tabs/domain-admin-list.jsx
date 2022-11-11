/*
 * File: domain-admin-list.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Monday, 26th September 2022 9:28:24 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 9:28:24 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useState } from "react"
import { DateFormat } from "../../../../helpers/date-format"
import { getCurrentUser } from "../../../../service/auth"
import { ButtonField } from "../../../common/form-fields"
import { ModalComponent } from "../../../common/ModalComponent"

export const DomainAdminListComponent = ({ admins = [], onDelete = null }) => {

    const [show, setShow] = useState(false)
    const [deleteAdmin, setDeleteAdmin] = useState(null)

    const DeleteAdmin = ({ admin }) => {
        return <td>
            {getCurrentUser()?.akcessId === admin.akcessId ? <span className="border fa fa-trash text-muted p-1"></span> : <ButtonField icon="trash" variant="danger" onClick={e => updateDeleteAdmin(admin)} />}
        </td>
    }

    const updateDeleteAdmin = (user = null) => {
        setDeleteAdmin(user)
        setShow(!show)
    }

    const ConfirmDeleteButtons = () => {
        return <>
            <ButtonField variant="secondary" icon="times" label="No" onClick={e => updateDeleteAdmin()} />
            <ButtonField variant="success" icon="check" label="Yes" onClick={e => { onDelete(deleteAdmin); updateDeleteAdmin() }} />
        </>
    }

    return <>
        {onDelete && <ModalComponent show={show} title="Confirm Delete" handleClose={e => setShow(!show)} footer={<ConfirmDeleteButtons />}>
            <p>Do you really want to remove <b>{deleteAdmin?.akcessId}</b>?</p>
        </ModalComponent>}


        <div className="table-responsive">
            <table className="table table-striped">
                <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>AKcessID</th>
                        <th>Is Verified</th>
                        <th>Date</th>
                        {onDelete && <th></th>}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {admins && admins.map(admin => <tr key={admin.akcessId}>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.akcessId}</td>
                        <td>{admin.isVerified ? 'Yes' : 'No'}</td>
                        <td>{DateFormat(admin.currentdate)}</td>
                        {onDelete && <DeleteAdmin admin={admin} />}
                    </tr>)}
                </tbody>
            </table>
        </div>
    </>
}