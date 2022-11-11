/*
 * File: RadioField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Sunday, 25th September 2022 12:40:03 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 25th September 2022 12:40:03 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const RadioField = ({ label, options, required = false, onChange, value }) => {
    return <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>
        <div className="d-flex">
            {options.map((option, index) => <Form.Check key={`${option.value}_${index}`}
                inline
                label={option.label}
                type="radio"
                checked={option.value === value}
                onChange={onChange}
                value={option.value}
                id={`inline-radio-${index}_${option.value}`}
            />)}
        </div>
    </Form.Group>
}