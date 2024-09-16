import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../adminPages/Admin-dashboard";
import AllEmployees from "../adminPages/AllEmployees";
import AddEmployee from "../adminPages/AddEmployee";
import Layout from "./Layout";
import HolidaysList from "../adminPages/HolidaysList";
import AdminLeaves from "../adminPages/AdminLeaves";
import EmployeeLeave from "../adminPages/EmployeeLeave";
import AttendanceAdmin from "../adminPages/AttendanceAdmin";
import EmployeeAttendance from "../adminPages/EmployeeAttendance";
import Departments from "../adminPages/Departments";

const AuthenticatedRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-employees" element={<AllEmployees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/holidays-list" element={<HolidaysList />} />
        <Route path="/leaves-admin" element={<AdminLeaves />} />
        <Route path="/leaves-employee" element={<EmployeeLeave />} />
        <Route path="/attendance-admin" element={<AttendanceAdmin />} />
        <Route path="/attendance-employee" element={<EmployeeAttendance />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </Layout>
  );
};

export default AuthenticatedRoutes;
