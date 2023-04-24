import { createAsyncThunk } from "@reduxjs/toolkit"
import { storeData, getData } from "./asyncStorage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"

const backEndURL = `http://192.168.1.6:4000/api/user`

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'content-Type': 'application/json',
                },
            };
            const { data } = await axios.post(
                `${backEndURL}/login`,
                { username, password },
                config
            );

            const responseCookie = JSON.stringify(data.cookieToken);
            await AsyncStorage.setItem('token', responseCookie);
            const jsonData = await AsyncStorage.getItem('token');
            const retrieve = JSON.parse(jsonData);

            return data;

        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const userLoad = createAsyncThunk(
    'auth/load',
    async () => {
        try {
            const cookieToken = getData('token');
            const response = await axios.get(`${backEndURL}/me`, {
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