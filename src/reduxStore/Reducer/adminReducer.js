import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_ACTIONS } from "../Actions/action";
import axios from "axios";
import { format } from "date-fns";

// Add Employee 

export const addEmployee = createAsyncThunk(
  ADMIN_ACTIONS.add_employee,
  async (empField, { rejectWithValue, getState }) => {
    try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.post('http://192.168.1.183:8888/api/users/', empField, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Login failed');
    }
  }
);



