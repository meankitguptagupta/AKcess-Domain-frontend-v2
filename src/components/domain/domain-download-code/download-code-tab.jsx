/*
 * File: doman-download-code.jsx
 * Project: Domain UI
 * path: /src/components/domain/domain-list/domain-download-code
 * File Created: Monday, 26th September 2022 8:36:01 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 8:36:01 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useContext } from "react"
import { Tabs, Tab } from "react-bootstrap"
import { CodeDownloadContext } from "../../../context/CodeDownloadContext"
import { ModalComponent } from "../../common/ModalComponent"
import { CodeDownloadJS } from "./javascript"
import { CodeDownloadPHP } from "./php"
import { CodeDownloadPython } from "./python"

export const DownloadCodeTabsComponent = () => {

    const { codeDownloadStatus, codeDownloadDispatch } = useContext(CodeDownloadContext)

    return <ModalComponent title="Download Code" show={codeDownloadStatus} size="md" handleClose={e => codeDownloadDispatch({ type: 'CODE_DOWNLOAD_HIDE' })}>
        <Tabs
            defaultActiveKey="php"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="php" title="PHP">
                <CodeDownloadPHP />
            </Tab>
            <Tab eventKey="javascript" title="Javascript">
                <CodeDownloadJS />
            </Tab>
            <Tab eventKey="python" title="Python">
                <CodeDownloadPython />
            </Tab>
        </Tabs>
    </ModalComponent>
}