/*
 * File: SpinnerComponent.jsx
 * Project: Domain UI
 * path: /src/components/common
 * File Created: Tuesday, 6th September 2022 11:16:01 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 6th September 2022 11:16:01 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

export const SpinnerComponent = ({ width = 15, height = 15, color = "primary" }) => {
    return <div className={`spinner-border text-${color}`} role="status" style={{ width: width, height: height }}>
        <span className="visually-hidden">Loading...</span>
    </div>
}