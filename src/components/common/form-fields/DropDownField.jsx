/*
 * File: DropDownField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Sunday, 25th September 2022 5:08:25 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 25th September 2022 5:08:25 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const DropDownField = ({ label, defaultLabel = "Select", options = [], onChange, required = false, error = null, hint = null, value = '' }) => {
    return <Form.Group className="mb-3">
        {label && <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>}
        <Form.Select onChange={onChange} value={value}>
            <option value="">{defaultLabel}</option>
            {options.map(option => <option value={option.value} key={`dropdown_${option.value}`}>{option.label}</option>)}
        </Form.Select>
        <Form.Text className={`${error ? 'text-danger' : 'text-mute'} text-sm`}>{error || hint}</Form.Text>
    </Form.Group>
}