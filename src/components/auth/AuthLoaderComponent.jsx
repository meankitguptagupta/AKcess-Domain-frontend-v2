/*
 * File: AuthLoaderComponent.jsx
 * Project: Domain UI
 * path: /src/components/auth
 * File Created: Tuesday, 6th September 2022 11:35:52 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 6th September 2022 11:35:52 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { SpinnerComponent } from "../common/SpinnerComponent"

export const AuthLoaderComponent = () => {
    return <div className="d-flex justify-content-center">
        <SpinnerComponent color="primary" width={70} height={70} />
    </div>
}