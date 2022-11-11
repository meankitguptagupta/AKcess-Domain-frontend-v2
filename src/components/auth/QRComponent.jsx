/*
 * File: QRComponent.jsx
 * Project: Domain UI
 * path: /src/components/auth
 * File Created: Tuesday, 6th September 2022 11:36:35 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 6th September 2022 11:36:36 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { WithRouter } from "../common/WithRouter"
import QRCode from "react-qr-code"
import { ButtonField } from '../common/form-fields'
import { AUTH_PASSCODE, GENERATE_UUID } from "../../gql/mutations/auth"
import { SpinnerComponent } from "../common/SpinnerComponent"
import { useContext, useEffect, useRef, useState } from "react"
import _socket from "../../service/_socket"
import { logout, saveCurrentUser, save_token } from "../../service/auth"
import { UserLoginContext } from "../../context/UserContext"
import { DynamicForm } from "../common/form-fields/dynamic-form"
import { useMutation } from "@apollo/client"

const FormSchema = [{
    "label": "AKcess OTP",
    "id": "passCode",
    "defaultValue": "",
    "type": "password",
    "maxLength": 5,
    "required": true,
    "hint": "Please provide `AKcess OTP` same as your Phone."
}]

const QRComponent = ({ navigate }) => {

    const [showQRScreen, setShowQRScreen] = useState(true)
    const createFormRef = useRef();

    // mutation to generate UUID
    const [genUUID, genUUIDExec] = useMutation(GENERATE_UUID, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ({ generateUUID }) => {
            // request to register socket-id with received UUID on mobile server
            _socket.emit('UUID', generateUUID.webUUID)

            // save token into session-storage
            save_token(generateUUID.authorization)
        }
    })

    // mutation to login via passCode
    const [passLogin, passLoginExec] = useMutation(AUTH_PASSCODE, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ({ loginByPassCode }) => {
            onLoginSuccess(loginByPassCode)
        }
    })

    const { loginDispatch } = useContext(UserLoginContext)

    useEffect(() => {
        genUUID()
        _socket.on('QR_SCAN_STATUS', data => {
            onScanSuccess(data)
        })
    }, [])

    /**
     * @description take action on user's QR scann success
     * @param SocketResponse data 
     * @return void
     */
    const onScanSuccess = data => {
        // save user is no auth method found
        if (data.auth === 'none')
            return onLoginSuccess(data.user)

        // request for OTP/akcessCode to login
        setShowQRScreen(false)
    }

    const onLoginSuccess = (user) => {
        saveCurrentUser(user)
        loginDispatch({ type: 'LOGIN' })
        navigate("/")
    }

    const refresh_token = () => {
        logout()
        loginDispatch({ type: 'LOGOUT' })
        genUUID()
    }

    const QRScreen = () => {
        return <>
            <div className="d-flex justify-content-center">
                {genUUIDExec.loading && <SpinnerComponent width={50} height={50} />}
                {!genUUIDExec.loading && genUUIDExec.data && <QRCode size={128} value={JSON.stringify({ webUUID: genUUIDExec.data.generateUUID.webUUID })} />}
            </div>
            {!genUUIDExec.loading && genUUIDExec.data && <ButtonField onClick={refresh_token} label="Refresh QR code?" variant="warning" icon="refresh" />}
        </>
    }

    const onOTPLogin = () => {
        let values = createFormRef.current.onSubmit()
        if (values)
            passLogin({ variables: { ...values, uuid: genUUIDExec.data.generateUUID.webUUID } })
    }

    /**
     * @description display it if log method is not none
     */
    const OTPScreen = () => {
        return <div>
            <DynamicForm fields={FormSchema} ref={createFormRef} />
            <div className="d-flex justify-content-end">
                {passLoginExec.loading ? <SpinnerComponent /> : <ButtonField icon="sign-in" label="Login" variant="success" onClick={onOTPLogin} />}
            </div>
        </div>
    }

    return <div className="vstack gap-5">
        {showQRScreen ? <QRScreen /> : <OTPScreen />}
    </div>
}

export default WithRouter(QRComponent)