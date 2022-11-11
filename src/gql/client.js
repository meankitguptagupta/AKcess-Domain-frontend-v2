import { createHttpLink, InMemoryCache, ApolloClient, from, ApolloLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getAuthHeader } from '../service/auth';

import toast from 'react-hot-toast';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                viewDomain: {
                    merge(existing, incoming) {
                        return incoming
                    }
                },
                listDomain: {
                    merge(existing, incoming) {
                        return incoming
                    }
                }
            }
        }
    }
})

const httpLink = setContext((request, previousContext) => ({
    headers: getAuthHeader()
})).concat(createHttpLink({
    uri: process.env.REACT_APP_DOMAIN_SERVER_URL
}))

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message }) => toast.error(message));
    if (networkError) toast.error(networkError?.result?.message || networkError.message)
});

const roundTripLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((data) => {
        if (!data.errors || !data.errors.length)
            switch (operation.operationName) {
                case 'addDomain':
                    toast.success('Domain successfully added.')
                    break;
                case 'updateDomain':
                    toast.success('Domain successfully updated.')
                    break;
                case 'deleteDomain':
                    toast.success('Domain successfully deleted')
                    break;
                default:
                    break;
            }

        return data
    })
})

export default new ApolloClient({
    cache,
    link: from([roundTripLink, errorLink, httpLink]),
});