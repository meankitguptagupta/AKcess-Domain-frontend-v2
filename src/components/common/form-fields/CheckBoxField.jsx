/*
 * File: CheckBoxField.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Thursday, 22nd September 2022 8:41:10 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Thursday, 22nd September 2022 8:41:10 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { Form } from "react-bootstrap"

export const CheckBoxField = (props) => {
    return <Form.Group className="mb-3">
        <Form.Check
            type="switch"
            {...props}
        />
    </Form.Group>
}