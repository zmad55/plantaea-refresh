import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const serverURL = "http://192.168.1.2:4000/api/user";

// Assume that the token is stored in the 'token' property of the response object.
const token = await login.json().token;

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });

        const { data } = await axios.post(`
        ${serverURL}/login`,
            { username, password },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        dispatch({ type: "loginSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "loginFailure", payload: error.response.data });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        //const token = await SecureStore.getItemAsync(Cookie);
        console.log(token)
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.post(`${serverURL}/me`,
            { token },
            {
                headers: {
                    "Cookie": `${token}`
                }
            });
        dispatch({ type: "loadUserSuccess", payload: data });
    } catch (error) {
        console.log(error)
        dispatch({ type: "loadUserFailure", payload: error.response.data });
    }
}