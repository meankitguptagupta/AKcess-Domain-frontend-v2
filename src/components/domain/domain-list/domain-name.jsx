/*
 * File: domain-name.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list
 * File Created: Saturday, 24th September 2022 12:25:15 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:25:15 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { NavLink } from "react-router-dom"

export const DomainNameComponent = ({ row }) => {
    if (row.status === "active")
        return <NavLink to={row._id} className="text-decoration-none">
            {row.domainname}
        </NavLink>

    return <span className="text-decoration-none">
        {row.domainname}
    </span>
}