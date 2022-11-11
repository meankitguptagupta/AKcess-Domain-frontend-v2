import client from '../../gql/client'
import { ApolloProvider } from "@apollo/client"
import SwitchRoutes from '../../routes'

import './NavigationComponent.css'
import TopbarComponent from './TopbarComponent'
import { FooterComponent } from './FooterComponent'
import { initialState, reducer, UserLoginContext } from '../../context/UserContext'
import { useReducer } from 'react'

import { Toaster } from 'react-hot-toast';

const NavigationComponent = () => {

    // user context to identify user login status
    const [loginStatus, loginDispatch] = useReducer(reducer, initialState)

    return <div className="container-fluid navigation">
        <ApolloProvider client={client}>
            <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
            <UserLoginContext.Provider value={{ loginStatus, loginDispatch }}>
                {loginStatus && <TopbarComponent />}
                {SwitchRoutes}
                <FooterComponent loginStatus={loginStatus} />
            </UserLoginContext.Provider>
        </ApolloProvider>
    </div>
}

export default NavigationComponent