import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { addEmployee } from "../../reduxStore/Reducer/adminReducer";
import axios from "axios";

const AddEmployee = ({ ShowAddEmployeeModal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [empField, setEmpField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    // password: "",
    // confirmpassword: "",
    date_of_joining: "",
    phone: "",
    department: "",
    // ctc:"",
    designation: "",
    date_of_birth: "",
    profile_pic: "",
    address: "",
  });
  
  const [departments, setDepartments] = useState([]);
  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
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

        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    const fetchDesignations = async () => {
      try {
        const token =process.env.REACT_APP_TOKEN
        const response = await axios.get(
          "http://192.168.1.183:8888/api/designations/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDesignation(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDesignations()
    fetchDepartments();
  }, []);

  // Handle input change
  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName.target) {
      const { name, type } = eOrName.target;
  
      if (type === "file") {
        const file = eOrName.target.files[0];
        if (file) {
          setEmpField({
            ...empField,
            [name]: file, 
          });
        }
      } else {
        const { value } = eOrName.target;
        setEmpField({
          ...empField,
          [name]: value,
        });
      }
    } else {
      const formattedDate = format(value, "yyyy-MM-dd");
      setEmpField({
        ...empField,
        [eOrName]: formattedDate,
      });
    }
  };
  

  // Validate form fields
  const validate = () => {
    let tempErrors = {};

    if (!empField.first_name) tempErrors.first_name = "First name is required.";
    if (!empField.last_name) tempErrors.last_name = "Last name is required.";
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
    // if (!empField.date_of_joining) tempErrors.date_of_joining = "Joining date is required.";
    // if (!empField.department) tempErrors.department = "Department is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      for (const key in empField) {

        formData.append(key, empField[key]);
      }
      if (validate()) {
         dispatch(addEmployee(formData));
  
        console.log("Form data is valid:", empField);
        ShowAddEmployeeModal();

      } else {
        console.log("Form has validation errors:", errors);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
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
              >
                {" "}
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
                        name="first_name"
                        value={empField.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-danger">{errors.first_name}</p>
                    )}
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="last_name"
                        value={empField.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.last_name && (
                      <p className="text-danger">{errors.last_name}</p>
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
                  {/* <div class="col-sm-6">
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
                  </div> */}
                  {/* <div class="col-sm-6">
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
                  </div> */}
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">
                        Joining Date <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon ">
                        <DatePicker
                          selected={empField.date_of_joining}
                          name="date_of_joining"
                          onChange={(date) =>
                            handleInputChange("date_of_joining", date)
                          } // Pass name and date directly
                          className="form-control datetimepicker  "
                          dateFormat="dd/MM/yyyy"
                        />
                      </div>
                      {errors.date_of_joining && (
                        <p className="text-danger">{errors.date_of_joining}</p>
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
                      
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
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
                        name="designation"
                        value={empField.designation}
                        onChange={handleInputChange}
                      >
                        <option>Select Designation</option>
                      
                        {designation.map((desg) => (
                          <option key={desg.id} value={desg.id}>
                            {desg.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.designation && (
                      <p className="text-danger">{errors.designation}</p>
                    )}
                  </div>
                  {/* <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">CTC </label> <span class="text-danger"> *</span>
                      <input
                        class="form-control"
                        type="text"
                        name="ctc"
                        value={empField.ctc}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.ctc && (
                      <p className="text-danger">{errors.ctc}</p>
                    )}
                  </div> */}

                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Profile Pic </label>{" "}
                      <span class="text-danger"> *</span>
                      <input
                        class="form-control"
                        type="file"
                        name="profile_pic"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.profile_pic && (
                      <p className="text-danger">{errors.profile_pic}</p>
                    )}
                  </div>
                  <div class="cal-icon ">
                    <DatePicker
                      selected={empField.date_of_birth}
                      name="date_of_birth"
                      onChange={(date) =>
                        handleInputChange("date_of_birth", date)
                      } // Pass name and date directly
                      className="form-control datetimepicker  "
                      dateFormat="dd/MM/yyyy"
                    />
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
                </div> */}
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
