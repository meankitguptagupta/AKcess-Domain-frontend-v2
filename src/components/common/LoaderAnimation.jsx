/*
 * File: LoaderAnimation.jsx
 * Project: Domain UI
 * path: /src/components/common
 * File Created: Tuesday, 6th September 2022 11:01:00 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 6th September 2022 11:01:01 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import './LoaderAnimation.css';
import { SpinnerComponent } from './SpinnerComponent';

export const LoaderAnimation = () => {
    return <div className="overlay d-flex justify-content-center align-items-center">
        <SpinnerComponent width={80} height={80}/>
    </div>
}