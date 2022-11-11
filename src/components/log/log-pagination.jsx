/*
 * File: log-pagination.jsx
 * Project: Domain UI
 * path: /src/components/log
 * File Created: Wednesday, 28th September 2022 1:31:30 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Wednesday, 28th September 2022 1:31:31 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

import Pagination from 'react-responsive-pagination';

export const LogPagination = ({ total = 0, limit = 0, page = 1, onPageChange }) => {

    return <Pagination
        maxWidth={500}
        current={page}
        total={Math.ceil(total / limit)}
        onPageChange={onPageChange}
    />
}