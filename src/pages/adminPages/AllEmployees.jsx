import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployeeDetails from "./EditEmployeeDetails";
import { useSelector } from "react-redux";
import axios from "axios";

const AllEmployees = () => {
  const employeeData = useSelector((state) => state.employee.employees);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showDeleteEmployee, setShowDeleteEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [getAllEmployee, setGetAllEmployee] = useState([])
  console.log("selectedEmployee: ", selectedEmployee);

  const profileDropdownRef = useRef({});

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    console.log("employeeData: ", employeeData);
    const filtered = employeeData.filter((employee) => {
      console.log("employee: ", employee);

      return (
        (employee.firstname &&
          employee.firstname.toLowerCase().includes(query)) ||
        (employee.position && employee.position.toLowerCase().includes(query))
      );
    });

    console.log("filtered", filtered);
    if (searchQuery.length === 0) {
      setFilteredEmployees(employeeData);
    } else {
      setFilteredEmployees(filtered);
    }
  };

  // this is for live search functionality

  // useEffect(() => {
  //   const query = searchQuery.toLowerCase();
  //   const filtered = employeeData.filter((employee) => {
  //     return (
  //       (employee.firstname &&
  //         employee.firstname.toLowerCase().startsWith(query)) || // Search starts with query
  //       (employee.position && employee.position.toLowerCase().startsWith(query))
  //     );
  //   });

  //   setFilteredEmployees(filtered);
  // }, [searchQuery, employeeData]);

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setProfileDropdown(false);
    }
  };

  const toggleDropdown = (id) => {
    setProfileDropdown((prevId) => (prevId === id ? null : id));
  };

  const ShowAddEmployeeModal = () => {
    setShowAddEmployee(!showAddEmployee);
  };

  const ShowEditEmployeeModal = (employee) => {
    console.log("ShowEditEmployeeModal: ", employee);
    setSelectedEmployee(employee);
    setShowEditEmployee(!showEditEmployee);
    setProfileDropdown(false);
  };

  const ShowDeleteEmployeeModal = (employee) => {
    setSelectedEmployee(employee);
    setShowDeleteEmployee(!showDeleteEmployee);
    setProfileDropdown(false);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    setFilteredEmployees(employeeData);
  }, [employeeData]);
  console.log("=========================", employeeData, filteredEmployees);

  useEffect (()=>{
    const fetchAllEmployee = async () => {
      try {
        const token =process.env.REACT_APP_TOKEN
        const response = await axios.get(
          "http://192.168.1.183:8888/api/users/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        setGetAllEmployee(response.data)
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchAllEmployee()
  },[])

  console.log("ALL EMployee List", getAllEmployee)
  return (
    <div>
      <div class="page-wrapper">
        <div class="content container-fluid pb-0">
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Employee</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Employee</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <button
                  href="#"
                  class="btn add-btn"
                  data-bs-toggle="modal"
                  onClick={ShowAddEmployeeModal}
                >
                  <i class="fa-solid fa-plus"></i> Add Employee
                </button>
              </div>
            </div>
          </div>
          {/* Search row=========================================================== */}

          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="input-block mb-3 form-focus">
                <input
                  type="text"
                  class="form-control floating"
                  placeholder="Search Employee "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div onClick={handleSearch} class=" col-sm-6 col-md-3">
              <div class="d-grid">
                <text
                  class="btn btn-success w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  {" "}
                  Search{" "}
                </text>
              </div>
            </div>
          </div>
          {/* Employee Cards Maplist=========================================================== */}

          <div class="row staff-grid-row">
            {getAllEmployee &&
              getAllEmployee.map((employee, index) => {
                return (
                  <div
                    className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                    key={index}
                  >
                    <div className="profile-widget">
                      <div className="profile-img">
                        <Link to={`/profile/${employee.id}`} className="avatar">
                          {employee.profile_pic ? (
                            <img
                              src={employee.profile_pic}
                              alt={`${employee.first_name} Image`}
                            />
                          ) : (
                            <img
                              src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
                              alt="user image"
                            />
                          )}
                        </Link>
                      </div>
                      {/* Profile modal================ */}
                      <div
                        ref={profileDropdownRef}
                        className="dropdown profile-action"
                      >
                        <Link
                          className="action-icon dropdown-toggle show"
                          data-bs-toggle="dropdown"
                          aria-expanded={profileDropdown === employee.id}
                          //   onClick={toggleDropdown}
                          onClick={() => toggleDropdown(employee.id)}
                        >
                          <i className="material-icons">more_vert</i>
                        </Link>
                        {/* {profileDropdown &&  */}
                        {profileDropdown === employee.id && (
                          <div
                            class="dropdown-menu dropdown-menu-right show"
                            style={{
                              position: "absolute",
                              inset: "0px 0px auto auto",
                              margin: 0,
                              transform: "translate(0px, 34px)",
                            }}
                            data-popper-placement="bottom-end"
                          >
                            <Link
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_employee"
                              onClick={() => ShowEditEmployeeModal(employee)}
                            >
                              <i class="fa-solid fa-pencil m-r-5"></i> Edit
                            </Link>
                            <a
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_employee"
                              onClick={() => ShowDeleteEmployeeModal(employee)}
                            >
                              <i class="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Profile modal================ */}
                      <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <Link to="profile">
                          {employee.first_name + "" + employee.last_name}
                        </Link>
                      </h4>
                      <div className="small text-muted">
                        {employee.designation}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Add Employee Modal================================== */}
        {showAddEmployee && (
          <AddEmployee ShowAddEmployeeModal={ShowAddEmployeeModal} />
        )}
        {/* Edit Employee Modal================================== */}
        {showEditEmployee && (
          <EditEmployeeDetails
            ShowEditEmployeeModal={ShowEditEmployeeModal}
            employee={selectedEmployee}
          />
        )}

        {/* Delete Employee Modal================================== */}
        {showDeleteEmployee && (
          <DeleteEmployee
            ShowDeleteEmployeeModal={ShowDeleteEmployeeModal}
            employee={selectedEmployee}
          />
        )}
      </div>
    </div>
  );
};

export default AllEmployees;
