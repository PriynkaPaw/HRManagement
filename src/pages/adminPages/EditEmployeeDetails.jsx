import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const EditEmployeeDetails = ({ employeeToUpdate, ShowEditEmployeeModal }) => {
  
          console.log("employeeToUpdate: ", employeeToUpdate);
          const [employee, setEmployee] = useState(employeeToUpdate);
          console.log("employee: ", employee);
          const [errors, setErrors] = useState({});
                
          useEffect(() => {
                  setEmployee(employeeToUpdate);
                }, [employeeToUpdate]);

                const handleChange = (e) => {
                  const { name, value } = e.target;
                  setEmployee({ ...employee, [name]: value });
                };

                // Validate form fields
                const validate = () => {
                      let tempErrors = {};

                      if (!employee.firstname) tempErrors.firstname = "First name is required.";
                      if (!employee.lastname) tempErrors.lastname = "Last name is required.";
                      if (!employee.email) {
                        tempErrors.email = "Email is required.";
                      } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
                        tempErrors.email = "Email is not valid.";
                      }
                      // if (!employee.password) {tempErrors.password = "Password is required."}
                      // else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(employee.password)) {
                      //     tempErrors.password = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
                      //   }
                      // if (!employee.confirmpassword) {tempErrors.confirmpassword = "Confirm Password is required."}
                      // else if (employee.confirmpassword != employee.password) {
                      //     tempErrors.confirmpassword = "Confirm Password and Password must be same.";
                      //   }
                      // if (!employee.position) tempErrors.position = "Designation is required.";
                      // if (!employee.phone) tempErrors.phone = "Phone is required.";
                      // if (!employee.joining_date) tempErrors.joining_date = "Joining date is required.";
                      // if (!employee.department) tempErrors.department = "Department is required.";

                      setErrors(tempErrors);
                      return Object.keys(tempErrors).length === 0;
                };

                const handleSubmit = (e) => {
                      e.preventDefault();

                      if (validate()) {
                        // setFormData((prevemployee) => [...prevemployee, employee]);
                        // dispatch(updateEmployee(employee));
                        console.log("Form data is valid:", employee);
                        ShowEditEmployeeModal();
                        // reset the form fields after submission
                        setEmployee({
                          firstname: "",
                          lastname: "",
                          email: "",
                          password: "",
                          confirmpassword: "",
                          joining_date: "",
                          phone: "",
                          department: "",
                          designation: "",
                          ctc:""
                        });
                      } else {
                        console.log("Form has validation errors:", errors);
                      }
                };
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div id="edit_employee" className="modal custom-modal d-block" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Employee</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowEditEmployeeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        value={employee?.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input
                        className="form-control"
                        name="lastname"
                        value={employee?.lastname}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        value={employee?.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
                        name="password"
                        value={employee?.password}
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        className="form-control"
                        name="confirmpassword"
                        value={employee?.confirmpassword}
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Joining Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          name="joining_date"
                          value={employee?.joining_date}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
                        name="phone"
                        value={employee?.phone}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department <span className="text-danger">*</span>
                      </label>
                      <select
                        className=" form-control select"
                        name="department"
                        value={employee?.department}
                        onChange={handleChange}
                      >
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select
                        className=" form-control select"
                        name="position"
                        value={employee?.position}
                        onChange={handleChange}
                      >
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">CTC </label>
                      <input
                        className="form-control"
                        name="ctc"
                        value={employee?.ctc}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Write</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Delete</th>
                        <th className="text-center">Import</th>
                        <th className="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>/
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="text-center">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEmployeeDetails;
