/*
 * File: LogComponent.jsx
 * Project: Domain UI
 * path: /src/components/log
 * File Created: Tuesday, 27th September 2022 7:33:23 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 27th September 2022 7:33:23 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useQuery } from "@apollo/client"
import { useState } from "react"
import { DOMAIN_LIST } from "../../gql/queries/domain"
import { CastDropdownOption } from "../../helpers/cast-dropdown-option"
import { DropDownField } from "../common/form-fields/DropDownField"
import { SpinnerComponent } from "../common/SpinnerComponent"
import { LogListComponent } from "./log-list"

const LogComponent = () => {
    const { loading, data } = useQuery(DOMAIN_LIST)
    const [domainName, setDomainName] = useState("")

    const onChange = (value = null) => {
        setDomainName(value)
    }

    return <>
        <div className="d-flex justify-content-between">
            <div className="h3">Logs</div>
            {loading && <SpinnerComponent />}
            {data && data.listDomain && <DropDownField options={CastDropdownOption('domainname', 'domainname', data.listDomain)} onChange={e => onChange(e.target.value)} defaultLabel="Select Domain" value={domainName} />}
        </div>

        <LogListComponent domain_name={domainName} />
    </>
}

export default LogComponent