import { lazy } from "react";


export const RouterPaths = {
    // Home: lazy(() => import('../pages/home/Home')),
    Login: lazy(() => import('../pages/authPages/Login')),
    Signup: lazy(() => import('../pages/authPages/Register')),
    LockScreen: lazy(() => import('../pages/authPages/Lock-screen')),
    OTP: lazy(() => import('../pages/authPages/Otp')),
    ForgotPassword: lazy(() => import('../pages/authPages/Forgot-password')),
    JobList :lazy(() => import('../pages/authPages/JobList')),
    Dashboard:lazy(() => import('../pages/adminPages/Admin-dashboard')),
    AllEmployee  :lazy(() => import('../pages/adminPages/AllEmployees')),
    HolidayList : lazy(() => import('../pages/adminPages/HolidaysList')),
    AddEmployee : lazy(() => import('../pages/adminPages/AddEmployee')),
    AdminLeave :lazy(() => import('../pages/adminPages/AdminLeaves')),
    EmployeeLeave :lazy(() => import('../pages/adminPages/EmployeeLeave')),
    AdminAttendence :lazy(() => import('../pages/adminPages/AttendanceAdmin')),
    EmployeeAttendence :lazy(() => import('../pages/adminPages/EmployeeAttendance')),
    Departments:lazy(() => import('../pages/adminPages/Departments')),
    Designations:lazy(() => import('../pages/adminPages/Designations')),
    Timesheet:lazy(() => import('../pages/adminPages/Timesheet')),
    ShiftScheduling:lazy(() => import('../pages/adminPages/ShiftAndSchedule')),
    ShiftList:lazy(() => import('../pages/adminPages/ShiftList')),
    Overtime:lazy(() => import('../pages/adminPages/OverTime')),
    Profile:lazy(() => import('../pages/adminPages/EmployeeProfile')),

    
  
    
}