/*
 * File: log-table.jsx
 * Project: Domain UI
 * path: /src/components/log
 * File Created: Tuesday, 27th September 2022 10:03:53 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 27th September 2022 10:03:53 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { DateFormat } from "../../helpers/date-format"
import { SpinnerComponent } from "../common/SpinnerComponent"

const TableRow = ({ item }) => {
    return <tr>
        <td>{item.apiname}</td>
        <td>{item.errName}</td>
        <td>{item.result ? 'Success' : 'Fail'}</td>
        <td>{DateFormat(item.currentDate)}</td>
    </tr>
}

export const LogTableComponent = ({ loading, domain_name = null, list = [] }) => {
    return <div className="table-responsive">
        <table className="table table-striped table-hover caption-top">
            <caption>{domain_name}</caption>
            <thead>
                <tr>
                    <th>API Name</th>
                    <th>Message</th>
                    <th>Result</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {loading && <tr><td colSpan={4}><SpinnerComponent /></td></tr>}
                {!loading && domain_name && !list.length && <tr><td colSpan={4}>No record found!</td></tr>}
                {domain_name && list.map(item => <TableRow key={item._id} item={item} />)}
            </tbody>
        </table>
    </div>
}