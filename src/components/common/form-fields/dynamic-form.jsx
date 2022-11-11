/*
 * File: dynamic-form.jsx
 * Project: Domain UI
 * path: /src/components/common/form-fields
 * File Created: Thursday, 22nd September 2022 8:38:17 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Thursday, 22nd September 2022 8:38:18 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Form } from "react-bootstrap"
import { CheckboxGroupField } from "./checkbox-group-field"
import { CheckBoxField } from "./CheckBoxField"
import { DropDownField } from "./DropDownField"
import { InputField } from "./InputField"
import { NumberField } from "./NumberField"
import { RadioField } from "./RadioField"
import { UploadImgField } from "./UploadImgField"

export const DynamicForm = forwardRef(({ fields }, ref) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    useImperativeHandle(ref, () => ({
        resetForm() {
            resetForm()
            resetError()
        },
        onSubmit() {
            if (doValidate())
                return values
        }
    }))

    const doValidate = () => {
        let status = true

        // reset all errors
        resetError()

        fields.forEach(field => {
            // validate if field is depend on another field
            if (field.depend) {
                if (values[field.depend.fieldId] === field.depend.value)
                    // validate if field is required
                    if (field.required && !values[field.id]) {
                        setErrors(prevErrors => ({ ...prevErrors, [field.id]: "Required!" }))
                        status = false
                    }
            } else if (field.required && !values[field.id]) {
                // validate if field is required
                setErrors(prevErrors => ({ ...prevErrors, [field.id]: "Required!" }))
                status = false
            }
        })

        return status
    }

    useEffect(() => {
        // set default value for form fields
        resetForm()

        // set Error default values
        resetError()

        return () => {
            setValues({})
            setErrors({})
        }
    }, [])

    /**
     * @description set default value of the form
     */
    const resetForm = () => {
        setValues(fields.reduce((obj, field) => {
            obj[field.id] = field.defaultValue
            return obj
        }, {}))
    }

    const resetError = () => {
        setErrors(fields.reduce((obj, field) => {
            obj[field.id] = null
            return obj
        }, {}))
    }

    const onChange = (value, id) => {
        setValues({ ...values, [id]: value })
    }

    const onUpload = (file, id) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function () {
            setValues({ ...values, [id]: reader.result });
        };
        reader.onerror = function (error) {
            setErrors({ ...errors, [id]: error.message })
        };
    }

    const onCheckboxChange = (checked, value, id) => {
        let arr = []
        if (checked)
            arr = [...new Set([...values[id], value])]
        else
            arr = values[id].filter(item => item !== value)

        setValues({ ...values, [id]: arr })
    }

    return <Form>
        {fields.map((field, index) => {
            if (field.depend && values[field.depend.fieldId] !== field.depend.value)
                return
            switch (field.type) {
                case 'switch':
                    return <CheckBoxField {...field} key={`form-field-${index}`} onChange={e => onChange(e.target.checked, field.id)} checked={values[field.id] || false} />
                case 'uploadImg':
                    return <UploadImgField {...field} key={`form-field-${index}`} onChange={e => onUpload(e.target.files[0], field.id)} value={values[field.id]} error={errors[field.id]} />
                case 'radio':
                    return <RadioField {...field} key={`form-field-${index}`} onChange={e => onChange(e.target.value, field.id)} value={values[field.id]} error={errors[field.id]} />
                case 'dropdown':
                    return <DropDownField {...field} key={`form-field-${index}`} onChange={e => onChange(e.target.value, field.id)} value={values[field.id]} error={errors[field.id]} />
                case 'number':
                    return <NumberField {...field} key={`form-field-${index}`} onChange={e => onChange(e.target.value, field.id)} value={values[field.id]} error={errors[field.id]} />
                case 'checkboxes':
                    return <CheckboxGroupField {...field} key={`form-field-${index}`} onChange={e => onCheckboxChange(e.target.checked, e.target.value, field.id)} value={values[field.id]} error={errors[field.id]} />
                default:
                    return <InputField {...field} key={`form-field-${index}`} onChange={e => onChange(e.target.value, field.id)} value={values[field.id]} error={errors[field.id]} />
            }
        })}
    </Form>
})