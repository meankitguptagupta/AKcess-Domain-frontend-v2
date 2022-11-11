/*
 * File: CodeDownloadContext.js
 * Project: Domain UI
 * path: /src/context
 * File Created: Monday, 26th September 2022 8:47:29 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 26th September 2022 8:47:29 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { createContext } from "react";

export const initialState = false
export const CodeDownloadContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CODE_DOWNLOAD_SHOW':
            return true
        case 'CODE_DOWNLOAD_HIDE':
        default:
            return false
    }
}