/*
 * File: user.js
 * Project: Domain UI
 * path: /src/gql/queries
 * File Created: Monday, 26th September 2022 3:14:26 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 3:14:27 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client";

export const VIEW_USER = gql`
    query viewUser($akcessId: String!) {
        viewUser (akcessId: $akcessId) {
            firstName
            lastName
            email {
                value
            }
            phone {
                value
            }
            akcessId
        }
    }  
`