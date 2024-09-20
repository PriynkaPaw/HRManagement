import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../authPages/Login';
import Register from '../authPages/Register';
import Lock_screen from '../authPages/Lock-screen';
import Otp from '../authPages/Otp';
import Forgot_password from '../authPages/Forgot-password';
import Job_list from '../authPages/Job-list';

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
        {/* <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/lock-screen" element={<Lock_screen />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<Forgot_password />} />
        <Route path="/job-list" element={<Job_list />} />
      
    </Routes>
  );
};

export default UnauthenticatedRoutes;
