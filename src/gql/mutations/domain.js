/*
 * File: domain.js
 * Project: Domain UI
 * path: /src/gql/mutations
 * File Created: Saturday, 10th September 2022 12:09:29 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 10th September 2022 12:09:29 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { gql } from "@apollo/client"

export const DOMAIN_ADD = gql`
    mutation addDomain($domainname: String!, $companyname: String!, $has_requested: Boolean, $blockchainnodename: String) {
        addDomain(domainname: $domainname, companyname: $companyname, has_requested: $has_requested, blockchainnodename: $blockchainnodename) {
            _id
            domainname
            apikey
            companyname
            status
            currentdate
        }
    }  
`

export const DOMAIN_DELETE = gql`
    mutation deleteDomain($_id: String!) {
        deleteDomain(_id: $_id) {
            _id
        }
    }
`

export const DOMAIN_UPDATE = gql`mutation updateDomain(
    $_id: String!, 
    $has_verifier: Boolean,
    $verifier: DomainVerifierInput,
    $setting: DomainSettingInput,
    $admin: [DomainAdminInput]
    $account_setting: DomainAccountSettingInput
  ) {
    updateDomain(
      _id: $_id, 
      has_verifier: $has_verifier,
      verifier: $verifier,
      setting: $setting,
      admin: $admin,
      account_setting: $account_setting
    ) {
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