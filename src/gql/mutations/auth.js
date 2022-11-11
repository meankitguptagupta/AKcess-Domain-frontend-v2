/*
 * File: auth.js
 * Project: Domain UI
 * path: /src/gql/queries
 * File Created: Saturday, 10th September 2022 12:09:34 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 10th September 2022 12:40:39 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client";

export const GENERATE_UUID = gql`
    mutation {
        generateUUID {
            webUUID
            authorization
        }
    }
`

export const AUTH_PASSCODE = gql`
    mutation loginByPassCode ($passCode: String!, $uuid: String!) {
        loginByPassCode (passCode: $passCode, uuid: $uuid) {
            firstName
            lastName
            email
            phone
            akcessId
        }
    }
`