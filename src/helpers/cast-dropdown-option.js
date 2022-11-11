/*
 * File: cast-dropdown-option.js
 * Project: Domain UI
 * path: /src/helpers
 * File Created: Tuesday, 27th September 2022 9:50:40 pm
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Tuesday, 27th September 2022 9:50:41 pm
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

export const CastDropdownOption = (valueItem, labelItem, data = []) => {
    return data.map(item => {
        return { value: item[valueItem], label: item[labelItem] }
    })
}