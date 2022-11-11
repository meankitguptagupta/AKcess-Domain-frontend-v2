/*
 * File: SessionRemainComponent.jsx
 * Project: Domain UI
 * path: /src/components/layout
 * File Created: Monday, 19th September 2022 1:10:01 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 19th September 2022 1:10:02 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useContext, useEffect, useState } from "react"
import { calculateTokenExpiration, logout } from "../../service/auth"
import { WithRouter } from "../common/WithRouter"
import { UserLoginContext } from "../../context/UserContext"

const timeCast = (time, type = null) => {
    switch (type) {
        case 'hour':
            return ('0' + Math.floor(time / 3600)).slice(-2)
        case 'min':
            return ('0' + Math.floor(time % 3600 / 60)).slice(-2)
        default:
            return ('0' + Math.floor(time % 3600 % 60)).slice(-2)
    }
}

const SessionRemainComponent = ({ navigate }) => {

    const { loginDispatch } = useContext(UserLoginContext)

    const [time, setTime] = useState(Math.floor(calculateTokenExpiration() / 1000));

    const logoutUser = () => {
        logout()
        loginDispatch({ type: 'LOGOUT' })
        navigate({ from: { pathname: "/login" } })
    }

    const tick = () => {
        if (time <= 1)
            return logoutUser()

        setTime(time - 1)
    }

    useEffect(() => {
        const timer = setInterval(tick, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [time]);

    return <div className="">
        Session over in: <b>{timeCast(time, 'hour')} : {timeCast(time, 'min')} : {timeCast(time)}</b>
    </div>
}

export default WithRouter(SessionRemainComponent)