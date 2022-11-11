/*
 * File: domain-actions.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list
 * File Created: Saturday, 24th September 2022 12:26:44 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:26:45 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useContext } from "react"
import { APIKeyDomainContext } from "../../../context/APIKeyDomainContext"
import { CodeDownloadContext } from "../../../context/CodeDownloadContext"
import { DeleteDomainContext } from "../../../context/DeleteDomainContext"

export const DomainActionComponent = ({ row }) => {
    const { deleteDispatch } = useContext(DeleteDomainContext)
    const { changeAPIKeyDispatch } = useContext(APIKeyDomainContext)
    const { codeDownloadDispatch } = useContext(CodeDownloadContext)

    return <div className="dropdown">
        <i className="fa fa-ellipsis-v px-2 cursor-pointer" aria-hidden="true" data-bs-toggle="dropdown" aria-expanded="false"></i>
        <ul className="dropdown-menu">
            <li className="p-0 m-0">
                <span className="dropdown-item cursor-pointer text-info" onClick={e => codeDownloadDispatch({ type: 'CODE_DOWNLOAD_SHOW' })}>Download Code</span>
                <span className="dropdown-item cursor-pointer text-info">Statics</span>
                <span className="dropdown-item cursor-pointer text-warning" onClick={e => changeAPIKeyDispatch({ type: "APIKey_DOMAIN_SHOW", payload: { _id: row._id, domainname: row.domainname } })}>Request a new key?</span>
                <hr className="dropdown-divider" />
                <span className="dropdown-item cursor-pointer text-danger" onClick={e => deleteDispatch({ type: "DELETE_DOMAIN_SHOW", payload: { _id: row._id, domainname: row.domainname } })}>
                    Delete Domain?
                </span>
            </li>
        </ul>
    </div>
}