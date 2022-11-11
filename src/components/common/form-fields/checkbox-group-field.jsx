/*
 * File: checkbox-group-field.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Sunday, 25th September 2022 5:54:14 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 25th September 2022 5:54:14 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const CheckboxGroupField = ({ label, options, required = false, onChange, value = [] }) => {
    return <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>
        <div className="row">
            {options.map((option, index) => <Form.Check key={`${option.value}_${index}`}
                label={option.label}
                className="col-md-6"
                checked={value.includes(option.value)}
                onChange={onChange}
                value={option.value}
                id={`inline-checkbox-${index}_${option.value}`}
            />)}
        </div>
    </Form.Group>
}