/*
 * File: auth.js
 * Project: Domain UI
 * path: /src/service
 * File Created: Monday, 12th September 2022 12:41:01 am
 * Author: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Last Modified: Monday, 12th September 2022 12:41:02 am
 * Modified By: Ankit Gupta (ankit@akcess.dev)
 * -----
 * Copyright 2022 - 2022 AKcess, AKcess labs, UK
 */

/**
 * @description save authentication token onto sessionstorage
 * @param String authorization 
 */
export const save_token = (authorization) => {
    // store token in session-storage
    sessionStorage.setItem('authorization', authorization)
}

/**
 * @description save current user after scan QR code on sessionStorage
 * @param Object currentUser 
 */
export const saveCurrentUser = (currentUser) => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
}

/**
 * @description read/expand authorization (JWT) token
 * @returns 
 */
const getTokenDetail = () => {
    return JSON.parse(window.atob(sessionStorage.getItem('authorization').split('.')[1]))
}

export const calculateTokenExpiration = () => {
    return (getTokenDetail().exp * 1000) - (new Date().valueOf())
}

/**
 * @description check if authorization token is valid and/or not expire
 * @returns 
 */
const isValidToken = () => {
    return calculateTokenExpiration() > 1
}

/**
 * @description check if user login and QR scanned
 * @returns 
 */
export const isLogin = () => {
    return sessionStorage.getItem('authorization') && isValidToken() && sessionStorage.getItem('currentUser')
}

/**
 * @description logout user by clearing all sessionStorage
 */
export const logout = () => {
    // clear all data from sessionstorage
    sessionStorage.removeItem('authorization')
    sessionStorage.removeItem('currentUser')
}

export const getAuthHeader = () => {

    let authObj = { apikey: process.env.REACT_APP_APIKEY }

    // add authorization and userDetal in object
    if (isLogin())
        authObj = {
            ...authObj,
            authorization: sessionStorage.getItem('authorization'),
            akcessId: getCurrentUser().akcessId
        }

    return authObj
}

/**
 * @description get current user detail
 * @returns Object
 */
export const getCurrentUser = () => {
    return isLogin() ? JSON.parse(sessionStorage.getItem('currentUser')) : {}
}