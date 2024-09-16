import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../reduxStore/slices/employeeSlice";

const AddEmployee = ({ ShowAddEmployeeModal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [empField, setEmpField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    joining_date: "",
    phone: "",
    department: "",
    position: "",
  });
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpField({
      ...empField,
      [name]: value,
    });
  };

  // Validate form fields
  const validate = () => {
    let tempErrors = {};

    if (!empField.firstname) tempErrors.firstname = "First name is required.";
    if (!empField.lastname) tempErrors.lastname = "Last name is required.";
    if (!empField.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(empField.email)) {
      tempErrors.email = "Email is not valid.";
    }
    // if (!empField.password) {tempErrors.password = "Password is required."}
    // else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(empField.password)) {
    //     tempErrors.password = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
    //   }
    // if (!empField.confirmpassword) {tempErrors.confirmpassword = "Confirm Password is required."}
    // else if (empField.confirmpassword != empField.password) {
    //     tempErrors.confirmpassword = "Confirm Password and Password must be same.";
    //   }
    // if (!empField.position) tempErrors.position = "Designation is required.";
    // if (!empField.phone) tempErrors.phone = "Phone is required.";
    // if (!empField.joining_date) tempErrors.joining_date = "Joining date is required.";
    // if (!empField.department) tempErrors.department = "Department is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // setFormData((prevEmpField) => [...prevEmpField, empField]);
      dispatch(addEmployee(empField));
      console.log("Form data is valid:", empField);
      ShowAddEmployeeModal();
      // reset the form fields after submission
      setEmpField({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        joining_date: "",
        phone: "",
        department: "",
        designation: "",
      });
    } else {
      console.log("Form has validation errors:", errors);
    }
  };

  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div class="modal custom-modal modal-open d-block" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Employee</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowAddEmployeeModal}
              ></button>
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
                        value={empField.firstname}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.firstname && (
                      <p className="text-danger">{errors.firstname}</p>
                    )}
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="lastname"
                        value={empField.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.lastname && (
                      <p className="text-danger">{errors.lastname}</p>
                    )}
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        value={empField.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Password</label>
                      <input
                        class="form-control"
                        type="password"
                        name="password"
                        value={empField.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Confirm Password</label>
                      <input
                        class="form-control"
                        type="password"
                        name="confirmpassword"
                        value={empField.confirmpassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.confirmpassword && (
                      <p className="text-danger">{errors.confirmpassword}</p>
                    )}
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
                          value={empField.joining_date}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.joining_date && (
                        <p className="text-danger">{errors.joining_date}</p>
                      )}
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Phone </label>
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        value={empField.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-danger">{errors.phone}</p>
                    )}
                  </div>

                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Department <span class="text-danger"></span>
                      </label>
                      <select
                        class="   form-control select"
                        name="department"
                        value={empField.department}
                        onChange={handleInputChange}
                      >
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                    {errors.department && (
                      <p className="text-danger">{errors.department}</p>
                    )}
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Designation <span class="text-danger">*</span>
                      </label>
                      <select
                        class="   form-control select"
                        name="position"
                        value={empField.position}
                        onChange={handleInputChange}
                      >
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                    {errors.designation && (
                      <p className="text-danger">{errors.designation}</p>
                    )}
                  </div>
                </div>
                <div class="table-responsive m-t-15">
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
                </div>
                <div class="submit-section">
                  <button class="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
