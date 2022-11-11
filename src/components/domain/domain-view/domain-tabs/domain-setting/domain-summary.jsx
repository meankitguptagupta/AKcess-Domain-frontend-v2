/*
 * File: domain-summary.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 12:41:18 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:41:19 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */
import { createRef } from "react"
import { DateFormat } from "../../../../../helpers/date-format"
import { DomainSummaryAdmin } from "../domain-summary-admins"

export const DomainSummaryComponent = ({ data }) => {
    const summaryRef = createRef()

    return <div className="row">
        <div className="col-md-6 border-end">
            <table className="table table-borderless table-hover text-center">
                <tbody>
                    <tr>
                        <th>Domain Name</th>
                        <td className="text-primary h4">{data.domainname}</td>
                    </tr>
                    <tr>
                        <th>Company Name</th>
                        <td>{data.companyname}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>
                            <span className={`text-capitalize ${data.status === 'active' ? 'text-success' : 'text-mute'}`}>{data.status}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Create Date</th>
                        <td>
                            {DateFormat(data.currentdate)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-md-6 border-start">
            <div className="table-responsive">
                <table className="table table-borderless table-hover text-center">
                    <tbody>
                        <tr>
                            <th>APIKey</th>
                            <td className="text-info">{data.apikey}</td>
                        </tr>
                        <tr>
                            <th>Is SME?</th>
                            <td>{data.isSME ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <th>Created By</th>
                            <td>{data.usedomain}</td>
                        </tr>
                        <tr>
                            <th>Admins</th>
                            <td>
                                <span onClick={e => summaryRef.current.toggle()} className="text-primary border-bottom px-2 cursor-pointer">{data?.admin.length}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {data && data.admin && <DomainSummaryAdmin admins={data.admin} ref={summaryRef} />}
    </div>
}