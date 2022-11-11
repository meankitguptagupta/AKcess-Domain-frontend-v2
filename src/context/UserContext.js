/*
 * File: UserContext.js
 * Project: Domain UI
 * path: /src/components/context
 * File Created: Sunday, 18th September 2022 9:18:08 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 18th September 2022 9:18:08 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { createContext } from "react";
import { isLogin } from "../service/auth";

export const initialState = isLogin()
export const UserLoginContext = createContext()

export const reducer = (state, action) => {

    // change user login state on login/logout
    if (['LOGIN', 'LOGOUT'].includes(action.type))
        return isLogin()

    // set default state
    return state
}