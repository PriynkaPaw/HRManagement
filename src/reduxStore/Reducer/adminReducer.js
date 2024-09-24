import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_ACTIONS } from "../Actions/action";
import axios from "axios";

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

export const addDepartment = createAsyncThunk(
  ADMIN_ACTIONS.add_department,
  async(departmentForm)=>{
    try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.post('http://192.168.1.183:8888/api/departments/', departmentForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (err) {
      return err
    }
  }
)


export const fetchDepartmentList = createAsyncThunk(
  ADMIN_ACTIONS.get_department ,
  async()=>{
    try {
      const token =process.env.REACT_APP_TOKEN
      const response = await axios.get(
        "http://192.168.1.183:8888/api/departments/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("departmentsss",response.data)
  return response.data
    
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

)


export const updateDepartment = createAsyncThunk(
  ADMIN_ACTIONS.update_department ,
  async(departmentData)=>{
    try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.put(`http://192.168.1.183:8888/api/departments/${departmentData.id}/`, departmentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (err) {
      return err
    }
  }
)

// Add Holiday

export const addHoliday = createAsyncThunk(
  ADMIN_ACTIONS.add_holiday ,
  async(holidayData)=>{
    try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.post(`http://192.168.1.183:8888/api/holidays/`, holidayData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (err) {
      return err
    }
  }
)


export const fetchHolidayList = createAsyncThunk(
  ADMIN_ACTIONS.get_holiday ,
  async()=>{
    try {
      const token =process.env.REACT_APP_TOKEN
      const response = await axios.get(
        "http://192.168.1.183:8888/api/holidays/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("departmentsss",response.data)
  return response.data
    
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

)


export const updateHoliday = createAsyncThunk(
  ADMIN_ACTIONS.update_holiday ,
  async(holidayData)=>{
    try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.put(`http://192.168.1.183:8888/api/holidays/${holidayData.id}/`, holidayData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; 
    } catch (err) {
      return err
    }
  }
)