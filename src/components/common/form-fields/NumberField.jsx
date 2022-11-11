/*
 * File: NumberField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Sunday, 25th September 2022 5:23:35 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Sunday, 25th September 2022 5:24:00 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const NumberField = ({ label, onChange, required = false, maxLength = 10, error = null, hint = null, value = 0, min = 0, max = 1000, step = 1 }) => {
    return <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>
        <Form.Control
            type="number"
            placeholder={label}
            autoComplete="off"
            onChange={onChange}
            maxLength={maxLength}
            value={value}
            min={min}
            max={max}
            step={step}
        />
        <Form.Text className={`${error ? 'text-danger' : 'text-mute'} text-sm`}>{error || hint}</Form.Text>
    </Form.Group>
}