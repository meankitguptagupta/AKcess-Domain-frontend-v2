/*
 * File: domain-admin.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Monday, 26th September 2022 9:09:44 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 9:09:44 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useMutation, useQuery } from "@apollo/client"
import { createRef, useState } from "react"
import { DOMAIN_UPDATE } from "../../../../../gql/mutations/domain"
import { DOMAIN_VIEW } from "../../../../../gql/queries/domain"
import { VIEW_USER } from "../../../../../gql/queries/user"
import { ButtonField } from "../../../../common/form-fields"
import { DynamicForm } from "../../../../common/form-fields/dynamic-form"
import { ModalComponent } from "../../../../common/ModalComponent"
import { SpinnerComponent } from "../../../../common/SpinnerComponent"
import { DomainAdminListComponent } from "../domain-admin-list"

const addAdminSchema = [{
    "label": "Find Admin",
    "hint": "Provide AKcessID of Admin",
    "id": "akcessId",
    "maxLength": 12,
    "required": true
}]

export const DomainAdminComponent = ({ admins = [], _id }) => {
    const { refetch, loading } = useQuery(VIEW_USER, {
        skip: true,
        onCompleted: ({ viewUser }) => {
            if (viewUser)
                updateUser(viewUser)
        }
    })

    const [updateDomain, updateDomainExec] = useMutation(DOMAIN_UPDATE, {
        update(cache, { data: { updateDomain } }) {
            cache.readQuery({ query: DOMAIN_VIEW, variables: { _id } })
            cache.writeQuery({
                query: DOMAIN_VIEW, data: {
                    viewDomain: updateDomain
                }
            })
        },
        onCompleted: () => {
            onReset()
        }
    })

    const [show, setShow] = useState(false)
    const formRef = createRef()

    const updateUser = (user) => {
        let users = admins.map(admin => {
            return {
                akcessId: admin.akcessId,
                currentdate: admin.currentdate,
                email: admin.email,
                isVerified: admin.isVerified,
                name: admin.name
            }
        })

        users = [...users, {
            akcessId: user.akcessId,
            email: user.email.value,
            isVerified: false,
            name: `${user.firstName} ${user.lastName}`
        }]

        updateDomain({ variables: { _id, admin: users } })
    }

    const onDelete = (user) => {
        let users = admins.filter(admin => admin.akcessId !== user.akcessId)
        users = users.map(user => {
            return {
                akcessId: user.akcessId,
                currentdate: user.currentdate,
                email: user.email,
                isVerified: user.isVerified,
                name: user.name
            }
        })

        updateDomain({ variables: { _id, admin: users } })
    }

    const onSearch = () => {
        let value = formRef.current.onSubmit()
        if (value && value.akcessId && !admins.some(admin => admin.akcessId === value.akcessId))
            refetch(value)

        // onReset()
    }

    const onReset = () => {
        if (formRef.current)
            formRef.current.resetForm();
        setShow(!show)
    }

    const ModelButtons = () => {
        return <ButtonField variant="primary" icon="search" label="Search" onClick={onSearch}></ButtonField>
    }

    return <>
        <div className="d-flex justify-content-end">
            <ButtonField icon="user" label="Add Admin" onClick={e => setShow(!show)} />
        </div>

        <ModalComponent show={show} handleClose={e => setShow(!show)} title="Add Admin" footer={(loading || updateDomainExec.loading) ? <SpinnerComponent /> : <ModelButtons />}>
            <DynamicForm fields={addAdminSchema} ref={formRef} />
        </ModalComponent>

        <DomainAdminListComponent admins={admins} onDelete={onDelete} />
    </>
}