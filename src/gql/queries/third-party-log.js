/*
 * File: third-party-log.js
 * Project: Domain UI
 * path: /src/gql/queries
 * File Created: Wednesday, 28th September 2022 12:48:20 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Wednesday, 28th September 2022 12:48:20 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client";

export const THIRD_PARTY_LOG_LIST = gql`
query listThirdPartyLog($domain_name: String!, $limit: Int, $page: Int) {
    listThirdPartyLog(domain_name: $domain_name, limit: $limit, page: $page) {
        list {
                _id
                result
                api
                origin
                errName
                apiname
                currentDate
            }
            limit
            page
            total
        }
    }  
`