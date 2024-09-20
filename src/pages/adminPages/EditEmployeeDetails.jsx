import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
const EditEmployeeDetails = ({ employeeToUpdate, ShowEditEmployeeModal }) => {
  
          console.log("employeeToUpdate: ", employeeToUpdate);
          const dispatch = useDispatch();
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
      <div class="modal-backdrop fade show"></div>
      <div id="edit_employee" class="modal custom-modal d-block" role="dialog">
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Employee</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowEditEmployeeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        name="firstname"
                        value={employee?.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Last Name</label>
                      <input
                        class="form-control"
                        name="lastname"
                        value={employee?.lastname}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        class="form-control"
                        name="email"
                        value={employee?.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Password</label>
                      <input
                        class="form-control"
                        name="password"
                        value={employee?.password}
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Confirm Password</label>
                      <input
                        class="form-control"
                        name="confirmpassword"
                        value={employee?.confirmpassword}
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Joining Date <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon">
                        <input
                          class="form-control datetimepicker"
                          type="text"
                          name="joining_date"
                          value={employee?.joining_date}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Phone </label>
                      <input
                        class="form-control"
                        name="phone"
                        value={employee?.phone}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Department <span class="text-danger">*</span>
                      </label>
                      <select
                        class=" form-control select"
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
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Designation <span class="text-danger">*</span>
                      </label>
                      <select
                        class=" form-control select"
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
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">CTC </label>
                      <input
                        class="form-control"
                        name="ctc"
                        value={employee?.ctc}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                {/* <div class="table-responsive m-t-15">
                  <table class="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th class="text-center">Read</th>
                        <th class="text-center">Write</th>
                        <th class="text-center">Create</th>
                        <th class="text-center">Delete</th>
                        <th class="text-center">Import</th>
                        <th class="text-center">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Holidays</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>/
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Clients</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Projects</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Tasks</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Chats</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Assets</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Timing Sheets</td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <label class="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              class="rememberme"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Save</button>
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
