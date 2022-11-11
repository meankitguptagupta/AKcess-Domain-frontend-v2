/*
 * File: DashboardComponent.jsx
 * Project: Domain UI
 * path: /src/components/dashboard
 * File Created: Monday, 12th September 2022 12:15:28 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 12th September 2022 12:15:30 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useQuery } from '@apollo/client'
import { DOMAIN_COUNT } from '../../gql/queries/domain'
import { NavLink } from 'react-router-dom'
import { SpinnerComponent } from '../common/SpinnerComponent'

const TotalDomain = ({ items }) => {
    return Object.values(items).reduce((sum, item) => {
        if (typeof item === 'number')
            sum += item
        return sum
    }, 0)
}

const DashboardComponent = () => {
    const { loading, data } = useQuery(DOMAIN_COUNT)

    return <div className="row">
        <div className="col-md-2 col-xs-12 col-sm-6">
            <div className="card text-white">
                <div className="card-body bg-primary rounded row">
                    <div className="col-sm-4">
                        <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-8">
                        <div className="d-flex flex-column text-center">
                            <div className="dropdown">
                                <u className="cursor-pointer initialism fs-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {loading && <SpinnerComponent width={20} height={20} color="white"/>}
                                    {data && <TotalDomain items={data.countDomain} />}
                                </u>
                                <ul className="dropdown-menu">
                                    {data && Object.keys(data.countDomain).map(key => {
                                        return typeof data.countDomain[key] === "number" && <div key={key} className="dropdown-item text-uppercase cursor-pointer">{key}: <b>{data.countDomain[key]}</b>
                                        </div>
                                    })}
                                </ul>
                            </div>
                            <NavLink to="/domains" className="text-white text-decoration-none">Domains</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DashboardComponent