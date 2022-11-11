/*
 * File: domain-setting.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 8:28:48 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 8:28:49 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useMutation, useQuery } from "@apollo/client";
import { useRef } from "react";
import { DynamicForm } from "../../../../common/form-fields/dynamic-form"
import { DesignSettingSchema } from "./design-setting-schema"
import { GLOBAL_PROFILE_LIST } from '../../../../../gql/queries/global-profile-data'
import { SpinnerComponent } from "../../../../common/SpinnerComponent";
import { ButtonField } from "../../../../common/form-fields/ButtonField";
import { DOMAIN_UPDATE } from "../../../../../gql/mutations/domain";
import { DOMAIN_VIEW } from "../../../../../gql/queries/domain";
import { castDotToObj } from "../../../../../helpers/cast-dot-to-obj";
import { CastDropdownOption } from "../../../../../helpers/cast-dropdown-option";

export const DomainSettingComponent = ({ domain }) => {
    const { loading, data } = useQuery(GLOBAL_PROFILE_LIST)
    const [updateDomain, updateDomainExec] = useMutation(DOMAIN_UPDATE, {
        update(cache, { data: { updateDomain } }) {
            cache.readQuery({ query: DOMAIN_VIEW, variables: { _id: domain._id } })
            cache.writeQuery({
                query: DOMAIN_VIEW, data: {
                    viewDomain: updateDomain
                }
            })
        }
    })

    const setp1Ref = useRef();
    const setp2Ref = useRef();
    const setp3Ref = useRef();

    const onReset = () => {
        setp1Ref.current.resetForm()
        setp2Ref.current.resetForm()
        setp3Ref.current.resetForm()
    }

    const onSubmit = () => {
        let step1Val = setp1Ref.current.onSubmit(),
            step2Val = setp2Ref.current.onSubmit(),
            step3Val = setp3Ref.current.onSubmit()

        if (step1Val && step2Val && step3Val)
            updateDomain({ variables: castDotToObj({ _id: domain._id, ...step1Val, ...step2Val, ...step3Val }) })
    }

    const SubmitButtons = () => {
        return <>
            <ButtonField icon="refresh" label="Reset" onClick={onReset} variant="secondary" />
            <ButtonField icon="cloud" label="Save" onClick={onSubmit} variant="success" />
        </>
    }

    return <div className="row">
        <div className="col-sm-12 col-md-3 border-end">
            <DynamicForm fields={DesignSettingSchema(domain).setp1} ref={setp1Ref} />
        </div>
        <div className="col-sm-12 col-md-5 border-end ms-3">
            {loading && <SpinnerComponent />}
            {data && data.listGlobalProfileData && <DynamicForm fields={DesignSettingSchema(domain, CastDropdownOption('key', 'labelname', data.listGlobalProfileData)).setp2} ref={setp2Ref} />}
        </div>
        <div className="col-sm-12 col-md-3">
            <DynamicForm fields={DesignSettingSchema(domain).setp3} ref={setp3Ref} />

            <div className="d-flex justify-content-end">
                {updateDomainExec?.loading ? <SpinnerComponent /> : <SubmitButtons />}
            </div>

        </div>
    </div>
}