/*
 * File: RootComponent.jsx
 * Project: Domain UI
 * path: /src/components/root
 * File Created: Monday, 5th September 2022 11:07:28 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 5th September 2022 11:09:09 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import ErrorHandler from "../common/ErrorHandler"
import NavigationComponent from "../layout/NavigationComponent"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const RootComponent = () => {

    useEffect(() => {
        // const unloadCallback = (event) => {
        //     event.preventDefault();
        //     event.returnValue = "";
        //     return "";
        // };

        // window.addEventListener("beforeunload", unloadCallback);
        // return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

    return <div className="container-fluid bg-0">
        <ErrorHandler>
            <BrowserRouter>
                <NavigationComponent />
            </BrowserRouter>
        </ErrorHandler>
    </div>
}

export default RootComponent