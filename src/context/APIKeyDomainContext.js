/*
 * File: APIKeyDomainContext.js
 * Project: Domain UI
 * path: /src/context
 * File Created: Saturday, 24th September 2022 11:33:57 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 11:34:17 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { createContext } from "react";

export const initialState = { show: false, domainname: null, _id: null }
export const APIKeyDomainContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'APIKey_DOMAIN_SHOW':
            return { ...state, show: true, ...action.payload }
        case 'APIKey_DOMAIN_HIDE':
        default:
            return { ...state, ...initialState }
    }
}