/*
 * File: log-list.jsx
 * Project: Domain UI
 * path: /src/components/log
 * File Created: Wednesday, 28th September 2022 1:08:37 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Wednesday, 28th September 2022 1:08:37 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import { THIRD_PARTY_LOG_LIST } from "../../gql/queries/third-party-log"
import { LogPagination } from "./log-pagination"
import { LogTableComponent } from "./log-table"

export const LogListComponent = ({ domain_name }) => {
    const [queryExec, { loading, data }] = useLazyQuery(THIRD_PARTY_LOG_LIST, {
        skip: false,
        notifyOnNetworkStatusChange: true
    })

    useEffect(() => {
        if (domain_name)
            queryExec({ variables: { domain_name, limit: 10, page: 1 } })
    }, [domain_name])

    const onPageChange = (page) => {
        queryExec({ variables: { domain_name, limit: 10, page } })
    }

    return <>
        <LogTableComponent
            loading={loading}
            domain_name={domain_name}
            list={data?.listThirdPartyLog?.list}
        />

        <LogPagination
            total={data?.listThirdPartyLog?.total}
            limit={data?.listThirdPartyLog?.limit}
            page={data?.listThirdPartyLog?.page}
            onPageChange={onPageChange}
        />
    </>
}