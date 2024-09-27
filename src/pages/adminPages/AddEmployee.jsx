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
      <div className="modal-backdrop fade show"></div>

      <div className="modal custom-modal modal-open d-block" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowAddEmployeeModal}
              >
                {" "}
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
                        name="first_name"
                        value={empField.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-danger">{errors.first_name}</p>
                    )}
                  </div>
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Last Name</label>
                      <input
                        className="form-control"
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
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
                  {/* <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Password</label>
                      <input
                        className="form-control"
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
                  {/* <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        className="form-control"
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Joining Date <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon ">
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
                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
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

                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Department <span className="text-danger"></span>
                      </label>
                      <select
                        className="   form-control select"
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
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select
                        className="   form-control select"
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
                  {/* <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">CTC </label> <span className="text-danger"> *</span>
                      <input
                        className="form-control"
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

                  <div className="col-sm-6">
                    <div className="input-block mb-3">
                      <label className="col-form-label">Profile Pic </label>{" "}
                      <span className="text-danger"> *</span>
                      <input
                        className="form-control"
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
                  <div className="cal-icon ">
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
                  <button className="btn btn-primary submit-btn">Submit</button>
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
