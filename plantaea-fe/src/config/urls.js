export const API_BASE_URL = 'http://192.168.1.2:8080'
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const REGISTER = getApiUrl('/register')
export const LOGOUT = getApiUrl('/logout')