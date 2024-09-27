import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSubmenu,
  toggleSubmenuByHeader,
} from "../../reduxStore/slices/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const openSubmenu = useSelector((state) => state.sidebar.openSubmenu);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const handleSubmenuToggle = (index) => {
    dispatch(toggleSubmenu(index));
  };

  const handleSetActive = (linkPath) => {
    setActiveLink(linkPath);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    if (activeLink !== currentPath) {
      setActiveLink(currentPath);
    }
  }, [location, activeLink]);

  useEffect(() => {
    if (
      openSubmenu === null &&
      activeLink &&
      !location.pathname?.includes(activeLink)
    ) {
      dispatch(toggleSubmenu(null));
    }
  }, [activeLink, openSubmenu, location.pathname]);

  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span>Main</span>
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={` ${openSubmenu === 1 ? "subdrop" : ""}`}
                  onClick={() => handleSubmenuToggle(1)}
                >
                  <i className="la la-dashboard"></i> <span> Dashboard</span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className={`${openSubmenu === 1 ? "d-block" : "d-none"}`}>
                  <li
                    className={
                      activeLink === "/admin-dashboard" ? "active" : ""
                    }
                  >
                    <Link
                      to="/admin-dashboard"
                      onClick={() => handleSetActive("/admin-dashboard")}
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">
                <span>Employees</span>
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={`noti-dot active ${
                    openSubmenu === 2 ? "subdrop" : ""
                  }`}
                  onClick={() => handleSubmenuToggle(2)}
                >
                  <i className="la la-user"></i> <span> Employees</span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className={`${openSubmenu === 2 ? "d-block" : "d-none"}`}>
                  <li
                    className={
                      activeLink === "/all-employees"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/all-employees"
                      onClick={() => handleSetActive("/all-employees")}
                    >
                      All Employees
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/holidays-list"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/holidays-list"
                      onClick={() => handleSetActive("/holidays-list")}
                    >
                      Holidays
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/leaves-admin" ? "active yellow-text" : ""
                    }
                  >
                    <Link
                      to="/leaves-admin"
                      onClick={() => handleSetActive("/leaves-admin")}
                    >
                      Leaves (Admin)
                      <span className="badge rounded-pill bg-primary float-end">
                        1
                      </span>
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/leaves-employee"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/leaves-employee"
                      onClick={() => handleSetActive("/leaves-employee")}
                    >
                      Leaves (Employee)
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/attendance-admin"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/attendance-admin"
                      onClick={() => handleSetActive("/attendance-admin")}
                    >
                      Attendance (Admin)
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/attendance-employee"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/attendance-employee"
                      onClick={() => handleSetActive("/attendance-employee")}
                    >
                      Attendance (Employee)
                    </Link>
                  </li>

                  <li
                    className={
                      activeLink === "/departments" ? "active yellow-text" : ""
                    }
                  >
                    <Link
                      to="/departments"
                      onClick={() => handleSetActive("/departments")}
                    >
                      Departments
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/designations" ? "active yellow-text" : ""
                    }
                  >
                    <Link
                      to="/designations"
                      onClick={() => handleSetActive("/designations")}
                    >
                      Designations
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/timesheet" ? "active yellow-text" : ""
                    }
                  >
                    <Link
                      to="/timesheet"
                      onClick={() => handleSetActive("/timesheet")}
                    >
                      Timesheet
                    </Link>
                  </li>

                  <li
                    className={
                      activeLink === "/shift-scheduling"
                        ? "active yellow-text"
                        : ""
                    }
                  >
                    <Link
                      to="/shift-scheduling"
                      onClick={() => handleSetActive("/shift-scheduling")}
                    >
                      Shift & Schedule
                    </Link>
                  </li>
                  <li
                    className={
                      activeLink === "/overtime" ? "active yellow-text" : ""
                    }
                  >
                    <Link
                      to="/overtime"
                      onClick={() => handleSetActive("/overtime")}
                    >
                      Overtime
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const openSubmenu = useSelector((state) => state.sidebar.openSubmenu);

//   const handleSubmenuToggle = (index) => {
//     dispatch(toggleSubmenu(index));
//   };
//   return (
//     <div>
//       <div className="sidebar" id="sidebar">
//         <div className="sidebar-inner slimscroll">
//           <div id="sidebar-menu" className="sidebar-menu">
//             <ul className="sidebar-vertical">
//               <li className="menu-title">
//                 <span>Main</span>
//               </li>

//               <li className="submenu">
//                 <Link to="#" onClick={() => handleSubmenuToggle(1)}>
//                   <i className="la la-dashboard"></i> <span> Dashboard</span>{" "}
//                   <span className="menu-arrow"></span>
//                 </Link>
//                 <ul className={`${openSubmenu === 1 ? "d-block" : "d-none"}`}>
//                   <li>
//                     <Link to="/admin-dashboard">Admin Dashboard</Link>
//                   </li>
//                   {/* <li>
//                     <Link to="/employee-dashboard">Employee Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="/deals-dashboard">Deals Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="/leads-dashboard">Leads Dashboard</Link>
//                   </li> */}
//                 </ul>
//               </li>

//               <li className="menu-title">
//                 <span>Employees</span>
//               </li>

//               <li className="submenu">
//                 <Link
//                   to="#"
//                   className="noti-dot"
//                   onClick={() => handleSubmenuToggle(2)}
//                 >
//                   <i className="la la-user"></i> <span> Employees</span>{" "}
//                   <span className="menu-arrow"></span>
//                 </Link>
//                 <ul className={`${openSubmenu === 2 ? "d-block" : "d-none"}`}>
//                   <li>
//                     <Link to="/all-employees">All Employees</Link>
//                   </li>
//                   <li>
//                     <Link to="/holidays-list">Holidays</Link>
//                   </li>

//                   {/* <li>
//                     <Link to="/holidays">Holidays</Link>
//                   </li> */}
//                   <li>
//                     <Link to="/leaves-admin">
//                       Leaves (Admin){" "}
//                       <span className="badge rounded-pill bg-primary float-end">
//                         1
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/leaves-employee">Leaves (Employee)</Link>
//                   </li>
//                   <li>
//                     <Link to="/leave-settings">Leave Settings</Link>
//                   </li>
//                   <li>
//                     <Link to="/attendance-admin">Attendance (Admin)</Link>
//                   </li>
//                   <li>
//                     <Link to="/attendance-employee">Attendance (Employee)</Link>
//                   </li>
//                   <li>
//                     <Link to="/departments">Departments</Link>
//                   </li>
//                   <li>
//                     <Link to="/designations">Designations</Link>
//                   </li>
//                   <li>
//                     <Link to="/timesheet">Timesheet</Link>
//                   </li>
//                   <li>
//                     <Link to="/shift-scheduling">Shift & Schedule</Link>
//                   </li>
//                   <li>
//                     <Link to="/overtime">Overtime</Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Add more menu items here */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// ===================================================================================================================>

// import React,{useState} from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//     const [openSubmenu, setOpenSubmenu] = useState(false);

//   const toggleSubmenu = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <div>
//       <div class="sidebar" id="sidebar">
//         <div class="sidebar-inner slimscroll">
//           <div id="sidebar-menu" class="sidebar-menu">
//             <ul class="sidebar-vertical">
//               <li class="menu-title">
//                 <span>Main</span>
//               </li>

//               <li class="submenu">
//                 <Link to="#" onClick={() => toggleSubmenu(true)}>
//                   <i class="la la-dashboard"></i> <span> Dashboard</span>{" "}
//                   <span class="menu-arrow"></span>
//                 </Link>

//                 <ul className={`${openSubmenu? 'd-block': null}`}>
//                   <li>
//                     <Link to="admin-dashboard.html">Admin Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="employee-dashboard.html">Employee Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="deals-dashboard.html">Deals Dashboard</Link>
//                   </li>
//                   <li>
//                     <Link to="leads-dashboard.html">Leads Dashboard</Link>
//                   </li>
//                 </ul>

//               </li>

//               <li class="menu-title">
//                 <span>Employees</span>
//               </li>

//               <li class="submenu" >
//                 <Link to="#" class="noti-dot"  onClick={() => toggleSubmenu(true)}>
//                   <i class="la la-user"></i> <span> Employees</span>{" "}
//                   <span class="menu-arrow"></span>
//                 </Link>
//                 <ul>
//                   <li>
//                     <Link to="employees.html">All Employees</Link>
//                   </li>
//                   <li>
//                     <Link to="holidays.html">Holidays</Link>
//                   </li>
//                   <li>
//                     <Link to="leaves.html">
//                       Leaves (Admin){" "}
//                       <span class="badge rounded-pill bg-primary float-end">
//                         1
//                       </span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="leaves-employee.html">Leaves (Employee)</Link>
//                   </li>
//                   <li>
//                     <Link to="leave-settings.html">Leave Settings</Link>
//                   </li>
//                   <li>
//                     <Link to="attendance.html">Attendance (Admin)</Link>
//                   </li>
//                   <li>
//                     <Link to="attendance-employee.html">Attendance (Employee)</Link>
//                   </li>
//                   <li>
//                     <Link to="departments.html">Departments</Link>
//                   </li>
//                   <li>
//                     <Link to="designations.html">Designations</Link>
//                   </li>
//                   <li>
//                     <Link to="timesheet.html">Timesheet</Link>
//                   </li>
//                   <li>
//                     <Link to="shift-scheduling.html">Shift & Schedule</Link>
//                   </li>
//                   <li>
//                     <Link to="overtime.html">Overtime</Link>
//                   </li>
//                 </ul>
//               </li>

//              {/* <li>
//                 <Link to="clients.html">
//                   <i class="la la-users"></i> <span>Clients</span>
//                 </Link>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-rocket"></i> <span> Projects</span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="projects.html">Projects</a>
//                   </li>
//                   <li>
//                     <a href="tasks.html">Tasks</a>
//                   </li>
//                   <li>
//                     <a href="task-board.html">Task Board</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-ticket"></i> <span>Tickets</span>
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="tickets.html">Tickets</a>
//                   </li>
//                   <li>
//                     <a href="ticket-details.html">Tickets Detail</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="menu-title">
//                 <span>CRM</span>
//                 <small class="newly-added-features">New</small>
//               </li>
//               <li>
//                 <a href="contact-list.html">
//                   <i class="la la-user-shield"></i> <span> Contacts </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="companies.html">
//                   <i class="la la-building"></i> <span> Companies </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="deals.html">
//                   <i class="la la-cubes"></i> <span> Deals </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="leads.html">
//                   <i class="la la-chart-area"></i> <span> Leads </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="pipeline.html">
//                   <i class="la la-exchange-alt"></i> <span> Pipeline </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="analytics.html">
//                   <i class="la la-dice"></i> <span> Analytics </span>
//                 </a>
//               </li>
//               <li>
//                 <a href="activities.html">
//                   <i class="la la-directions"></i> <span> Activities </span>
//                 </a>
//               </li>
//               <li class="menu-title">
//                 <span>HR</span>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-files-o"></i> <span> Sales </span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="estimates.html">Estimates</a>
//                   </li>
//                   <li>
//                     <a href="invoices.html">Invoices</a>
//                   </li>
//                   <li>
//                     <a href="payments.html">Payments</a>
//                   </li>
//                   <li>
//                     <a href="expenses.html">Expenses</a>
//                   </li>
//                   <li>
//                     <a href="provident-fund.html">Provident Fund</a>
//                   </li>
//                   <li>
//                     <a href="taxes.html">Taxes</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-files-o"></i> <span> Accounting </span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="categories.html">Categories</a>
//                   </li>
//                   <li>
//                     <a href="budgets.html">Budgets</a>
//                   </li>
//                   <li>
//                     <a href="budget-expenses.html">Budget Expenses</a>
//                   </li>
//                   <li>
//                     <a href="budget-revenues.html">Budget Revenues</a>
//                   </li>
//                 </ul>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-money"></i> <span> Payroll </span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="salary.html"> Employee Salary </a>
//                   </li>
//                   <li>
//                     <a href="salary-view.html"> Payslip </a>
//                   </li>
//                   <li>
//                     <a href="payroll-items.html"> Payroll Items </a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="policies.html">
//                   <i class="la la-file-pdf-o"></i> <span>Policies</span>
//                 </a>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-pie-chart"></i> <span> Reports </span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="expense-reports.html"> Expense Report </a>
//                   </li>
//                   <li>
//                     <a href="invoice-reports.html"> Invoice Report </a>
//                   </li>
//                   <li>
//                     <a href="payments-reports.html"> Payments Report </a>
//                   </li>
//                   <li>
//                     <a href="project-reports.html"> Project Report </a>
//                   </li>
//                   <li>
//                     <a href="task-reports.html"> Task Report </a>
//                   </li>
//                   <li>
//                     <a href="user-reports.html"> User Report </a>
//                   </li>
//                   <li>
//                     <a href="employee-reports.html"> Employee Report </a>
//                   </li>
//                   <li>
//                     <a href="payslip-reports.html"> Payslip Report </a>
//                   </li>
//                   <li>
//                     <a href="attendance-reports.html"> Attendance Report </a>
//                   </li>
//                   <li>
//                     <a href="leave-reports.html"> Leave Report </a>
//                   </li>
//                   <li>
//                     <a href="daily-reports.html"> Daily Report </a>
//                   </li>
//                 </ul>
//               </li>

//               <li class="menu-title">
//                 <span>Pages</span>
//               </li>
//               <li class="submenu">
//                 <a href="#">
//                   <i class="la la-user"></i> <span> Profile </span>{" "}
//                   <span class="menu-arrow"></span>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="profile.html"> Employee Profile </a>
//                   </li>
//                   <li>
//                     <a href="client-profile.html"> Client Profile </a>
//                   </li>
//                 </ul>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
