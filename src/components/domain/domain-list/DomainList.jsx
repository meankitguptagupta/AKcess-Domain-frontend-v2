/*
 * File: DomainList.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list
 * File Created: Saturday, 24th September 2022 12:06:34 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:06:35 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { ButtonField } from "../../common/form-fields"
import { SpinnerComponent } from "../../common/SpinnerComponent"
import { DomainRowComponent } from "./DomainRow"

export const DomainListComponent = ({ data, loading, error, onClick }) => {
    return <div className="table-responsive">
        <table className="table table-hover table-striped">
            <thead>
                <tr className="text-center">
                    <th>#</th>
                    <th className="text-capitalize">domain name</th>
                    <th className="text-capitalize">company name</th>
                    <th className="text-uppercase">api key</th>
                    <th className="text-capitalize">date</th>
                    <th className="text-capitalize">Status</th>
                    <th>
                        {error && <ButtonField icon='refresh' onClick={onClick} />}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data && data.listDomain.map((row, index) => <DomainRowComponent row={row} key={row._id} count={index + 1} />)}
            </tbody>
        </table>
        {loading && <SpinnerComponent />}
    </div>
}