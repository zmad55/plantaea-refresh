import axios from "axios";

const serverURL = "http://192.168.1.2:4000/api/user";

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
        dispatch({ type: "loadUserRequest" });

        //const { data } = await axios.get(`${serverURL}/me`);
        const { data } = await axios.get("http://10.0.2.2:4000/api/user/me");
        dispatch({ type: "loadUserSuccess", payload: data });
    } catch (error) {
        console.log(error)
        dispatch({ type: "loadUserFailure", payload: error.response.data });
    }
}