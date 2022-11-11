/*
 * File: InputField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Thursday, 22nd September 2022 8:48:25 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Thursday, 22nd September 2022 8:48:26 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const InputField = ({ label, onChange, required = false, maxLength = 200, error = null, hint = null, value = '' }) => {
    return <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">
            {label} {required && <Form.Text className="text-danger text-sm">*</Form.Text>}
        </Form.Label>
        <Form.Control
            placeholder={label}
            autoComplete="off"
            onChange={onChange}
            maxLength={maxLength}
            value={value}
        />
        <Form.Text className={`${error ? 'text-danger' : 'text-mute'} text-sm`}>{error || hint}</Form.Text>
    </Form.Group>
}