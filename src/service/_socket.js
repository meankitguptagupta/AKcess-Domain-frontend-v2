/*
 * File: _socket.js
 * Project: Domain UI
 * path: /src/service
 * File Created: Saturday, 10th September 2022 6:46:10 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 10th September 2022 6:46:11 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { io } from "socket.io-client";

const _socket = io(process.env.REACT_APP_MOBILE_SERVER, {
    transports: ['websocket']
})

// client-side
_socket.on("connect", () => {
    console.log("Socket connected", _socket.id);
});

_socket.on("error", (err) => {
    console.log("Socket connection err", err.message);
});

export default _socket