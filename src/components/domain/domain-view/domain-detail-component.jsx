/*
 * File: domain-detail-component.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 12:23:52 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:23:52 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useQuery } from "@apollo/client"
import { DOMAIN_VIEW } from "../../../gql/queries/domain"
import { SpinnerComponent } from "../../common/SpinnerComponent"
import { WithRouter } from "../../common/WithRouter"
import { DomainSettingTabs } from "./domain-tabs/domain-setting-tabs"

const DomainDetailComponent = ({ queryparams }) => {
    const { loading, data } = useQuery(DOMAIN_VIEW, {
        variables: { _id: queryparams._id }
    })

    return <>
        {loading && <SpinnerComponent />}
        {data && data.viewDomain && <DomainSettingTabs data={data.viewDomain} />}
    </>
}

export default WithRouter(DomainDetailComponent)