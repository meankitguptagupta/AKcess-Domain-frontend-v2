/*
 * File: domain-setting-tabs.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 5:56:02 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 5:56:02 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Tabs, Tab } from 'react-bootstrap';
import { DomainAdminComponent } from './domain-setting/domain-admin';
import { DomainSettingComponent } from './domain-setting/domain-setting';
import { DomainSummaryComponent } from "./domain-setting/domain-summary"

export const DomainSettingTabs = ({ data }) => {

    const TabIcon = ({ icon, label }) => {
        return <><i className={`fa fa-${icon} text-sm`} aria-hidden="true"></i> {label}</>
    }

    return <Tabs
        defaultActiveKey="summary"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
    >
        <Tab eventKey="summary" title={<TabIcon icon="list" label="Summary" />}>
            <DomainSummaryComponent data={data} />
        </Tab>
        <Tab eventKey="setting" title={<TabIcon icon="cog" label="Setting" />}>
            <DomainSettingComponent domain={data} />
        </Tab>
        <Tab eventKey="admins" title={<TabIcon icon="users" label="Admins" />}>
            <DomainAdminComponent admins={data.admin} _id={data._id} />
        </Tab>
    </Tabs>
}