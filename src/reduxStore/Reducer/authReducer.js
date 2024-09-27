import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_ACTIONS } from "../Actions/action";
import axios from "axios";


export const loginUser = createAsyncThunk(
    AUTH_ACTIONS.login_user,
    async (loginData, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://192.168.1.183:8888/api/token/', loginData);
        // console.log('response: ', response);
        if(response?.status === 200){
          console.log('status 200: ');
          return response.data; 
        }
      } catch (err) {
        return rejectWithValue(err.response?.data || 'Login failed');
      }
    }
  );
                 

export const registerUser = createAsyncThunk( AUTH_ACTIONS.register_user, 
    async(registerData)=>{
        try {
            const response = await axios.post('http://192.168.1.183:8888/api/user/register/', registerData)
            console.log("response in register reducer", response.data)
            return response.data
            
        } catch (error) {
            return error
        }
    }
)