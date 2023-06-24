import { createAsyncThunk } from "@reduxjs/toolkit";
import { storeData, getData } from "./asyncStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


// const SERVER_URL = `http://192.168.100.194:4000/api/user`
const SERVER_URL = `http://192.168.1.5:4000/api/user`

// export const userLogin = createAsyncThunk(
//     'userLogin',
//     async ({ username, password }, { rejectWithValue }) => {
//         try {
//             const config = { headers: { 'content-Type': 'application/json', }, };

//             const { data } = await axios.post(
//                 `${SERVER_URL}/login`,
//                 { username, password },
//                 config
//             );

//             const responseCookie = JSON.stringify(data.cookieToken);
//             await AsyncStorage.setItem('token', responseCookie);
//             const jsonData = await AsyncStorage.getItem('token');
//             const retrieve = JSON.parse(jsonData);

//             return data;

//         } catch (error) {
//             console.log(error)
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message);
//             } else {
//                 return rejectWithValue(error.message);
//             }
//         }
//     }
// );

export const userLogin = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: "userLogin.pending" });

        const { data } = await axios.post(
            `${SERVER_URL}/login`,
            { username, password },
            {
                headers: {
                    'content-Type': 'application/json',
                },
            }
        );

        dispatch({ type: "userLogin.fulfilled", payload: data })

    } catch (error) {
        console.log(error)
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
};


export const userLoad = createAsyncThunk(
    'auth/load',
    async () => {
        try {
            const cookieToken = getData('token');
            const response = await axios.get(`${SERVER_URL}/me`, {
                headers: {
                    'Cookie': `token=${cookieToken}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const userLogout = (req, res) => {

}