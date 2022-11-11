/*
 * File: DomainRow.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list
 * File Created: Saturday, 24th September 2022 12:20:53 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:20:53 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { DomainActionComponent } from "./domain-actions"
import { DomainNameComponent } from "./domain-name"
import { DateFormat } from '../../../helpers/date-format'

export const DomainRowComponent = ({ row, count }) => {
    return <tr className="text-center">
        <th>{count}</th>
        <td>
            <DomainNameComponent row={row} />
        </td>
        <td>{row.companyname}</td>
        <td>{row.apikey}</td>
        <td>
            <span data-tooltip={DateFormat(row.currentdate, 'time')}>
                <i className="ms-1 cursor-pointer fa fa-clock" aria-hidden="true"></i>
            </span>
            <span className="text-muted ms-1">
                {DateFormat(row.currentdate, 'date')}
            </span>
        </td>
        <td className={`text-capitalize ${row.status === "active" ? 'text-success' : ''}`}>{row.status}</td>
        <td className="text-right">
            {row.status === "active" && <DomainActionComponent row={row} />}
        </td>
    </tr>
}