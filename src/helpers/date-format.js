/*
 * File: date-format.js
 * Project: Domain UI
 * path: /src/helpers
 * File Created: Saturday, 24th September 2022 12:31:35 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Saturday, 24th September 2022 12:31:35 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

export const DateFormat = (timestamp, type = null) => {
    let date = new Date(timestamp)
    if (date === "Invalid Date")
        return null

    switch (type) {
        case 'date':
            return date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
        case 'time':
            return date.toLocaleTimeString('en-us', { hour12: true })
        default:
            return `${date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })} ${date.toLocaleTimeString('en-us', { hour12: true })}`
    }
}