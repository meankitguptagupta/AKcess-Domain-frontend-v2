/*
 * File: index.js
 * Project: Domain UI
 * path: /src
 * File Created: Sunday, 4th September 2022 10:43:44 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 5th September 2022 11:08:49 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import RootComponent from './components/root/RootComponent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RootComponent />
    </StrictMode>
)