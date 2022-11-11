import { useContext } from "react"
import { APIKeyDomainContext } from "../../../../context/APIKeyDomainContext"
import { ButtonField } from "../../../common/form-fields"
import { ModalComponent } from "../../../common/ModalComponent"

/*
 * File: change-apikey-domain.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list/domain-actions
 * File Created: Saturday, 24th September 2022 11:32:32 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 11:32:32 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */
export const ChangeAPIKeyComponent = () => {
    const { changeAPIKeyStatus, changeAPIKeyDispatch } = useContext(APIKeyDomainContext)

    const ChangeAPIKeyDomainButtons = () => {
        return <div className="text-end">
            <ButtonField variant="secondary" label="No" onClick={e => changeAPIKeyDispatch({ type: "APIKey_DOMAIN_HIDE" })} icon="times" />
            &nbsp;
            <ButtonField variant="danger" label="Yes" onClick={e => changeAPIKeyDispatch({ type: "APIKey_DOMAIN_HIDE" })} icon="check" />
        </div>
    }

    return <ModalComponent
        show={changeAPIKeyStatus.show}
        handleClose={e => changeAPIKeyDispatch({ type: "APIKey_DOMAIN_HIDE" })}
        title="Change APIKey"
        footer={<ChangeAPIKeyDomainButtons />}
    >
        <p className="text-muted">
            Do you really want to change API-Key for &nbsp;
            <span className="text-dark">{changeAPIKeyStatus?.domainname}</span> ?
            this process is irreversible, and will cahnge once approve by Admin.
        </p>
    </ModalComponent>
}