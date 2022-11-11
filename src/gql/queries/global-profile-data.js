/*
 * File: global-profile-data.js
 * Project: Domain UI
 * path: /src/gql/queries
 * File Created: Sunday, 25th September 2022 6:02:18 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 25th September 2022 6:02:18 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client";

export const GLOBAL_PROFILE_LIST = gql`
    query {
        listGlobalProfileData {
            key
            labelname
        }
    }
`