/*
 * File: ButtonField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Saturday, 10th September 2022 11:24:24 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 10th September 2022 11:24:25 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Button } from 'react-bootstrap';

export const ButtonField = ({ label, onClick, icon, variant = 'primary', size = 'sm' }) => {
    return <Button onClick={onClick} size={size} type="button" variant={`outline-${variant}`} className="p-1 m-1">
        {icon && <i className={`fa fa-${icon}`} aria-hidden="true"></i>} {label}
    </Button>
}