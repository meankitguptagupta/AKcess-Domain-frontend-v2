/*
 * File: DomainsComponent.jsx
 * Project: Domain UI
 * path: /src/components/domain
 * File Created: Monday, 19th September 2022 2:08:13 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 19th September 2022 2:08:13 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useQuery } from "@apollo/client"
import { useReducer } from "react"
import { DeleteDomainContext, initialState, reducer } from "../../context/DeleteDomainContext"
import { DOMAIN_LIST } from "../../gql/queries/domain"
import { DomainDeleteComponent } from "./domain-list/domain-actions/delete-domain-component"
import { DomainCreateComponent } from "./domain-create/DomainCreateComponent"
import { DomainListComponent } from "./domain-list/DomainList"
import { APIKeyDomainContext, reducer as APIKeyReducer, initialState as APIKeyInitialState } from "../../context/APIKeyDomainContext"
import { ChangeAPIKeyComponent } from "./domain-list/domain-actions/change-apikey-domain"
import { DownloadCodeTabsComponent } from "./domain-download-code/download-code-tab"
import { CodeDownloadContext, reducer as codeDownloadReducer, initialState as codeDownloadState } from "../../context/CodeDownloadContext"

const DomainsComponent = () => {
    const [deleteStatus, deleteDispatch] = useReducer(reducer, initialState)
    const [changeAPIKeyStatus, changeAPIKeyDispatch] = useReducer(APIKeyReducer, APIKeyInitialState)
    const [codeDownloadStatus, codeDownloadDispatch] = useReducer(codeDownloadReducer, codeDownloadState)

    const { loading, error, data, refetch } = useQuery(DOMAIN_LIST)

    return <DeleteDomainContext.Provider value={{ deleteStatus, deleteDispatch }}>
        <APIKeyDomainContext.Provider value={{ changeAPIKeyStatus, changeAPIKeyDispatch }}>
            <CodeDownloadContext.Provider value={{ codeDownloadStatus, codeDownloadDispatch }}>
                <div className="d-flex justify-content-between mb-3">
                    <div className="h3">Domains</div>
                    <DomainCreateComponent />
                </div>
                <DomainListComponent loading={loading} error={error} data={data} onClick={e => refetch({ include: [DOMAIN_LIST] })} />
                <DownloadCodeTabsComponent />
                <DomainDeleteComponent />
                <ChangeAPIKeyComponent />
            </CodeDownloadContext.Provider>
        </APIKeyDomainContext.Provider>
    </DeleteDomainContext.Provider>
}

export default DomainsComponent