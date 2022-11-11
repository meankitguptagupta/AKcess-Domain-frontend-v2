/*
 * File: domain.js
 * Project: Domain UI
 * path: /src/gql/queries
 * File Created: Saturday, 10th September 2022 12:39:42 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 10th September 2022 12:39:43 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client";

export const DOMAIN_LIST = gql`
    query {
        listDomain {
            _id
            domainname
            apikey
            companyname
            status
            currentdate
        }
    }  
`

export const DOMAIN_COUNT = gql`
    query {
        countDomain {
            active
            inactive
        }
    }
`

export const DOMAIN_VIEW = gql`
    query viewDomain ($_id: String!) {
        viewDomain (_id: $_id) {
            _id
            domainname
            companyname
            usedomain
            currentdate
            apikey
            status
            has_verifier
            verifier {
                name
                grade
            }
            setting {
                filename
                webapgeurl
                style {
                    height
                    width
                }
                displaytype
                authomethod
                validationmethod
                parameter
                databaseURL
                host
                contacts
                label
                desc
            }
            account_setting {
                normal_details
                value
            }
            admin {
                akcessId
                email
                name
                currentdate
                isVerified
            }
            isSME
        }
    }  
`