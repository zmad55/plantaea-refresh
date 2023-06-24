export const API_BASE_URL = "http://192.168.1.5:4000/api/user"
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const REGISTER = getApiUrl('/register')
export const LOGOUT = getApiUrl('/logout')