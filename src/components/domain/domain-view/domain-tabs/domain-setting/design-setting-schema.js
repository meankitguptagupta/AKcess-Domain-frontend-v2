/*
 * File: design-setting-schema.js
 * Project: Domain UI
 * path: /src/components/domain/domain-view
 * File Created: Saturday, 24th September 2022 8:42:09 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 8:42:10 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import VerifierGrade from './verifier-grade.json'

export const DesignSettingSchema = (domain, parameterOptions = []) => {
    return {
        setp1: [{
            "label": "Verification *",
            "type": "switch",
            "id": "has_verifier",
            "defaultValue": domain?.has_verifier || false,
            required: true
        }, {
            "label": "Verificer Name",
            "id": "verifier.name",
            "defaultValue": domain?.verifier?.name || "",
            "depend": {
                "fieldId": "has_verifier",
                "value": true
            },
            "required": true
        }, {
            "label": "Verificer Grade",
            "id": "verifier.grade",
            "defaultValue": domain?.verifier?.grade || "",
            "type": "dropdown",
            "options": VerifierGrade,
            "depend": {
                "fieldId": "has_verifier",
                "value": true
            },
            "required": true
        }, {
            "label": "Display Type",
            "id": "setting.displaytype",
            "defaultValue": domain?.setting?.displaytype || "qr",
            "type": "radio",
            "options": [{
                "value": "button",
                "label": "Login Button"
            }, {
                "value": "qr",
                "label": "Scan QR"
            }]
        }, {
            "label": "Style height",
            "type": "number",
            "maxlength": 3,
            "id": "setting.style.height",
            "defaultValue": domain?.setting?.style?.height || 0
        }, {
            "label": "Style width",
            "type": "number",
            "maxlength": 3,
            "id": "setting.style.width",
            "defaultValue": domain?.setting?.style?.width || 0
        }, {
            "label": "Authentication Method",
            "id": "setting.authomethod",
            "defaultValue": domain?.setting?.authomethod || "none",
            "type": "radio",
            "options": [{
                "value": "none",
                "label": "None"
            }, {
                "value": "otp",
                "label": "One Time Password"
            }],
            "required": true,
        },
        {
            "label": "Validation Method",
            "id": "setting.validationmethod",
            "defaultValue": domain?.setting?.validationmethod || "",
            "type": "radio",
            "options": [{
                "value": "otp",
                "label": "OTP"
            }, {
                "value": "sms",
                "label": "SMS"
            }, {
                "value": "email",
                "label": "Email"
            }],
            "depend": {
                "fieldId": "setting.authomethod",
                "value": "otp"
            }
        }, {
            "label": "Account Setting",
            "id": "account_setting.normal_details",
            "defaultValue": domain?.account_setting?.normal_details || null,
            "type": "radio",
            "options": [{
                "value": "portal",
                "label": "Portal"
            }, {
                "value": "domain",
                "label": "Domain"
            }]
        }, {
            "label": "Account Setting Title",
            "id": "account_setting.value",
            "defaultValue": domain?.account_setting?.value || "",
            "depend": {
                "fieldId": "account_setting.normal_details",
                "value": "domain"
            },
        }, {
            "label": "Filename",
            "id": "setting.filename",
            "defaultValue": domain?.setting?.filename,
            "type": "uploadImg"
        }],
        setp2: [{
            "label": "Fields requested at login",
            "type": "checkboxes",
            "id": "setting.parameter",
            "defaultValue": domain?.setting?.parameter || [],
            "options": parameterOptions
        }],
        setp3: [{
            "label": "Portal Contact",
            "id": "setting.contacts",
            "defaultValue": domain?.setting?.contacts || "",
            "maxLength": 15
        },
        {
            "label": "Database URL",
            "id": "setting.databaseURL",
            "defaultValue": domain?.setting?.databaseURL || ""
        },
        {
            "label": "Domain Description",
            "id": "setting.desc",
            "defaultValue": domain?.setting?.desc || ""
        },

        {
            "label": "Data Base Host",
            "id": "setting.host",
            "defaultValue": domain?.setting?.host || ""
        },
        {
            "label": "Label",
            "id": "setting.label",
            "defaultValue": domain?.setting?.label || ""
        },
        {
            "label": "Webapge URL",
            "id": "setting.webapgeurl",
            "defaultValue": domain?.setting?.webapgeurl || ""
        }]
    }
}