/*
 * File: DomainCreateComponent.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-create
 * File Created: Monday, 19th September 2022 9:01:42 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 19th September 2022 9:01:43 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useRef, useState } from "react";
import { ButtonField } from "../../common/form-fields";
import { ModalComponent } from "../../common/ModalComponent";

import DomainFormSchema from "../../../form-defination/domain-form-schema.json"
import { DynamicForm } from "../../common/form-fields/dynamic-form"
import { useMutation } from "@apollo/client";
import { DOMAIN_ADD } from '../../../gql/mutations/domain'
import { DOMAIN_LIST } from "../../../gql/queries/domain";
import { SpinnerComponent } from "../../common/SpinnerComponent";

export const DomainCreateComponent = () => {
    const [addDomain, addDomainExec] = useMutation(DOMAIN_ADD, {
        notifyOnNetworkStatusChange: true,
        update(cache, { data: { addDomain } }) {
            const { listDomain } = cache.readQuery({ query: DOMAIN_LIST })
            cache.writeQuery({
                query: DOMAIN_LIST, data: {
                    listDomain: [...listDomain, addDomain]
                }
            })
        },
        onCompleted: data => {
            handleClose()
        }
    })

    const [show, setShow] = useState(false)
    const createFormRef = useRef();

    const ActionButtons = () => {
        return <>
            <ButtonField
                variant="warning"
                onClick={e => createFormRef.current.resetForm()}
                icon="eraser"
                label="reset"
            />&nbsp;
            <ButtonField
                variant="success"
                onClick={onSubmit}
                icon="plus"
                label="save"
            />
        </>
    }

    const onSubmit = () => {
        let values = createFormRef.current.onSubmit()
        if (values)
            addDomain({ variables: values })
    }

    const handleClose = () => {
        setShow(!show);
        createFormRef.current.resetForm()
    }

    return <>
        <ButtonField onClick={e => setShow(!show)} icon="plus" label="Add Domain" />
        <ModalComponent
            show={show}
            title="Create Domain"
            handleClose={e => { setShow(!show); createFormRef.current.resetForm() }}
            footer={addDomainExec.loading ? <SpinnerComponent /> : <ActionButtons />}
        >
            <DynamicForm fields={DomainFormSchema} ref={createFormRef} />
        </ModalComponent>
    </>
}