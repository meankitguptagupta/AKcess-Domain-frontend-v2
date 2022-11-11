/*
 * File: delete-domain-component.jsx
 * Project: Domain UI
 * path: /src/components/domain/delete-domain
 * File Created: Saturday, 24th September 2022 8:58:25 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 8:58:26 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { DeleteDomainContext } from "../../../../context/DeleteDomainContext"
import { DOMAIN_DELETE } from "../../../../gql/mutations/domain"
import { DOMAIN_LIST } from "../../../../gql/queries/domain"
import { ButtonField } from "../../../common/form-fields"
import { ModalComponent } from "../../../common/ModalComponent"
import { SpinnerComponent } from "../../../common/SpinnerComponent"

export const DomainDeleteComponent = () => {

    const { deleteStatus, deleteDispatch } = useContext(DeleteDomainContext)

    const [deleteDomain, deleteDomainExec] = useMutation(DOMAIN_DELETE, {
        variables: { _id: deleteStatus._id },
        update(cache, { data: { deleteDomain } }) {
            const { listDomain } = cache.readQuery({ query: DOMAIN_LIST })
            cache.writeQuery({
                query: DOMAIN_LIST, data: {
                    listDomain: Object.values(listDomain).filter(domain => domain._id !== deleteDomain._id)
                }
            })
        }, onCompleted: () => {
            deleteDispatch({ type: "DELETE_DOMAIN_HIDE" })
        },
    })

    const DomainDeleteButtons = () => {
        return <div className="text-end">
            <ButtonField variant="secondary" label="ignore" onClick={e => deleteDispatch({ type: "DELETE_DOMAIN_HIDE" })} icon="times" />
            &nbsp;
            <ButtonField variant="danger" label="yes" onClick={deleteDomain} icon="trash" />
        </div>
    }

    return <ModalComponent
        show={deleteStatus.show}
        handleClose={e => deleteDispatch({ type: "DELETE_DOMAIN_HIDE" })}
        title="Delete Domain?"
        footer={deleteDomainExec.loading ? <SpinnerComponent /> : <DomainDeleteButtons />}
    >
        <p className="text-muted">Do you really want to delete <span className="text-dark">{deleteStatus?.domainname}</span> ?</p>
    </ModalComponent>


}