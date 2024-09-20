import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addLeave, deleteLeave, updateLeave } from "../../reduxStore/slices/leaveSlice";


function AdminLeaves() {
  const leaveListData = useSelector((state) => state.leave.leaves);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [leaveDropdown, setLeaveDropdown] = useState(null); 
  const [showEditLeave, setShowEditLeave] = useState(false);
  const [showAddLeave, setShowAddLeave] = useState(false);
  const [showDeleteLeaveModal, setDeleteLeaveModal] = useState(false);
  const [leaveStatusDropdown, setLeaveStatusDropdown] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredLeaves] = useState(leaveListData);
  const [leaveType, setLeaveType] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('');
  const [selectedData , setSelectedData] = useState('')

  useEffect(() => {
    setFilteredLeaves(leaveListData);
  }, [leaveListData]);

  const toggleDropdown = (id) => {
    setLeaveDropdown((prevId) => (prevId === id ? null : id));
  };

  const toggleLeaveStatusDropdown = (id) => {
    setLeaveStatusDropdown((prevId) => (prevId === id ? null : id));
  };
  const handleClickOutside = (event) => {
    if (
      leaveDropdownRef.current &&
      !leaveDropdownRef.current.contains(event.target)
    ) {
      setLeaveDropdown(null);
    }
  };

  const leaveDropdownRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleSearch = () => {
    console.log("leaveListData", leaveListData);
    const query = searchQuery.toLowerCase();
    const filtered = leaveListData.filter((leave) => {
      const leaveStartDate = new Date(leave.from); 
      const leaveEndDate = new Date(leave.to); 
      const selectedStartDate = startDate ? new Date(startDate) : new Date('1900-01-01');
      const selectedEndDate = endDate ? new Date(endDate) : new Date('2100-12-31');
  
      return (
        (leave.employee_name && leave.employee_name.toLowerCase().includes(query)) &&
        
        (!leaveType || leave.leave_type.toLowerCase() === leaveType.toLowerCase()) &&
        
        (!leaveStatus || leave.status.toLowerCase() === leaveStatus.toLowerCase()) &&
        
        (leaveStartDate >= selectedStartDate && leaveEndDate <= selectedEndDate)
      );
    });
  
    console.log("filtered", filtered);
    setFilteredLeaves(filtered);
  };
  


  const ShowEditLeaveModal = (data) =>{ setShowEditLeave(!showEditLeave); setSelectedData(data)}
  const ShowAddLeaveModal = () => setShowAddLeave(!showAddLeave);
  const ShowDeleteLeaveModal = (data) => {setDeleteLeaveModal(!showDeleteLeaveModal);
    setSelectedData(data)
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Leaves</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Leaves</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_leave"
                  onClick={ShowAddLeaveModal}
                >
                  <i className="fa-solid fa-plus"></i> Add Leave
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Stats Section */}
            <div className="col-md-3 d-flex">
              <div className="stats-info w-100">
                <h6>Today Presents</h6>
                <h4>12 / 60</h4>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="stats-info w-100">
                <h6>Planned Leaves</h6>
                <h4>
                  8 <span>Today</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="stats-info w-100">
                <h6>Unplanned Leaves</h6>
                <h4>
                  0 <span>Today</span>
                </h4>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="stats-info w-100">
                <h6>Pending Requests</h6>
                <h4>12</h4>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus">
                 
                  <input type="text" className="form-control floating"  onChange={(e) => setSearchQuery(e.target.value)}  value={searchQuery}  />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <select onChange={(e) => setLeaveType(e.target.value)}  value={leaveType}  className="form-control select floating">
                  <option value='' > -- Select -- </option>
                  <option value="Casual Leave" >Casual Leave</option>
                  <option value="Medical Leave" >Medical Leave</option>
                  <option value="Loss of Pay" >Loss of Pay</option>
                </select>
                <label className="focus-label">Leave Type</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <select onChange={(e) => setLeaveStatus(e.target.value)}  value={leaveStatus} className="form-control select floating">
                  <option value=""> -- Select -- </option>
                  <option value="Pending"> Pending </option>
                  <option value="Approved"> Approved </option>
                  <option value="Rejected"> Rejected </option>
                </select>
                <label className="focus-label">Leave Status</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control floating"
                    dateFormat="dd/MM/yyyy" // Customize the date format
                  />
                </div>
                <label className="focus-label">From</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus">
                <div className="cal-icon">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="form-control floating"
                    dateFormat="dd/MM/yyyy" // Customize the date format
                  />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <a href="#" className="btn btn-success w-100" onClick={handleSearch}>
                {" "}
                Search{" "}
              </a>
            </div>
          </div>

          {/* Leaves Table */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th className="text-center">Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees &&
                      filteredEmployees.map((data) => (
                        <tr key={data.id}>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img src={data.img_url} alt="User Image" />
                              </a>
                              <a href="#">
                                {data.employee_name}{" "}
                                <span>{data.designation}</span>
                              </a>
                            </h2>
                          </td>
                          <td>{data.leave_type}</td>
                          <td>{data.from}</td>
                          <td>{data.to}</td>
                          <td>{data.no_of_day}</td>
                          <td>{data.reason}</td>
                          <td className="text-center">
                            <div className="dropdown action-label">
                              <a
                                className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault(); // Prevent default anchor behavior
                                  toggleLeaveStatusDropdown(data.id); // Toggle dropdown for specific item
                                }}
                                aria-expanded={leaveStatusDropdown === data.id}
                              >
                                <i className="fa-regular fa-circle-dot text-purple"></i>{" "}
                              {data.status}
                              </a>
                              {leaveStatusDropdown === data.id && (
                                <div className="dropdown-menu dropdown-menu-right show">
                                  <a className="dropdown-item" href="#">
                                    <i className="fa-regular fa-circle-dot text-purple"></i>{" "}
                                    New
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa-regular fa-circle-dot text-info"></i>{" "}
                                    Pending
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#approve_leave"
                                  >
                                    <i className="fa-regular fa-circle-dot text-success "></i>{" "}
                                    Approved
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa-regular fa-circle-dot text-danger"></i>{" "}
                                    Declined
                                  </a>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="text-end">
                            <div
                              ref={leaveDropdownRef}
                              className="dropdown dropdown-action"
                            >
                              <Link
                                className="action-icon dropdown-toggle show"
                                data-bs-toggle="dropdown"
                                aria-expanded={leaveDropdown === data.id}
                                onClick={() => toggleDropdown(data.id)}
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              {leaveDropdown === data.id && (
                                <div className="dropdown-menu dropdown-menu-right show">
                                  <Link
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_holiday"
                                    onClick={()=>ShowEditLeaveModal(data)}
                                  >
                                    <i className="fa-solid fa-pencil m-r-5"></i>{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_approve"
                                    onClick={()=>ShowDeleteLeaveModal(data)}
                                  >
                                    <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                    Delete
                                  </Link>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                   )   )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {showEditLeave && (
          <EditLeave
            ShowEditLeaveModal={ShowEditLeaveModal}
            selectedData={selectedData}
            // actionType={"add"}
          />
        )}

        {showAddLeave && <AddLeave ShowAddLeaveModal={ShowAddLeaveModal} />}

        {showDeleteLeaveModal && (
          <DeleteLeave ShowDeleteLeaveModal={ShowDeleteLeaveModal} selectedData={selectedData} />
        )}

        <div
          className="modal custom-modal fade"
          id="approve_leave"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Leave Approve</h3>
                  <p>Are you sure want to approve for this leave?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-primary continue-btn"
                      >
                        Approve
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="javascript:void(0);"
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                      >
                        Decline
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal custom-modal fade"
          id="delete_approve"
          role="dialog"
        ></div>
      </div>
    </>
  );
}


export default AdminLeaves;

const EditLeave = ({ ShowEditLeaveModal , selectedData }) => {
 const dispatch = useDispatch()

  const handleSubmitEditLeave = () => {
    ShowEditLeaveModal();
    dispatch(updateLeave(selectedData))
  };
  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div
        id="edit_leave"
        className="modal custom-modal  d-block "
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowEditLeaveModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select className="form-control select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      value="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      value="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readonly
                    type="text"
                    value="2"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readonly
                    value="12"
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea rows="4" className="form-control">
                    Going to hospital
                  </textarea>
                </div>
                <div className="submit-section">
                  <button
                    onClick={handleSubmitEditLeave}
                    className="btn btn-primary submit-btn"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddLeave = ({ ShowAddLeaveModal }) => {
  const [leaveFormData, setLeaveFormData] = useState({
    id: Math.random(),
    leave_type: "",
    from: "",
    to: "",
    status: "new",
    reason: "",
  img_url: "assets/img/profiles/avatar-10.jpg",
  employee_name: "Richard Miles",
  designation: "Web Developer",
  no_of_day: "1 day",


  });
 

  const handleChange = (eOrName, value) => {
    if (typeof eOrName === 'object' && eOrName.target) {
      const { name, value } = eOrName.target;
      setLeaveFormData({
        ...leaveFormData,
        [name]: value,
      });
    } else {
      // Handle DatePicker input
      setLeaveFormData({
        ...leaveFormData,
        [eOrName]: value,
      });
    }
  };
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!leaveFormData.employeeId) {
      formErrors.employeeId = "Employee ID is required.";
    }

    if (!leaveFormData.leave_type) {
      formErrors.leave_type = "Leave type is required.";
    } else if (typeof leaveFormData.leave_type !== "string") {
      formErrors.leave_type = "Leave type should be a string.";
    }

    if (!leaveFormData.start_date) {
      formErrors.start_date = "Start date is required.";
    } else if (!Number.isInteger(Number(leaveFormData.start_date))) {
      formErrors.start_date = "Start date should be a valid integer.";
    }

    if (!leaveFormData.end_date) {
      formErrors.end_date = "End date is required.";
    } else if (!Number.isInteger(Number(leaveFormData.end_date))) {
      formErrors.end_date = "End date should be a valid integer.";
    }

    if (
      leaveFormData.start_date &&
      leaveFormData.end_date &&
      Number(leaveFormData.start_date) > Number(leaveFormData.end_date)
    ) {
      formErrors.dates = "Start date cannot be later than end date.";
    }

    if (!leaveFormData.leave_status) {
      formErrors.leave_status = "Leave status is required.";
    }

    if (!leaveFormData.reason) {
      formErrors.reason = "Reason is required.";
    } else if (typeof leaveFormData.reason !== "string") {
      formErrors.reason = "Reason should be a string.";
    }

    return formErrors;
  };
  const dispatch = useDispatch()

  const handleSubmitLeave = (e) => {
    e.preventDefault();
    console.log("Form submitted:", leaveFormData);
    dispatch(addLeave(leaveFormData))
    const formErrors = validateForm();
   ShowAddLeaveModal()

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", leaveFormData);
    } else {
      setErrors(formErrors);
    }
  };

  //   const handleSubmitLeave = () => {
  //     console.log("leaveFormData", leaveFormData);
  //     ShowAddLeaveModal();
  //   };
  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div id="add_leave" className="modal custom-modal d-block " role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowAddLeaveModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select
                    name="leave_type"
                    value={leaveFormData.leave_type}
                    onChange={handleChange}
                    className="form-control select"
                  >
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                  <p className="text-danger"> {errors.leave_type}</p>
                </div>

                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    {/* <input
                      className="form-control datetimepicker"
                      type="text"
                      name="from"
                      value={leaveFormData.from}
                      onChange={handleChange}
                    /> */}
                <DatePicker
  selected={leaveFormData.from}
  name="from"
  onChange={(date) => handleChange('from', date)} // Pass name and date directly
  className="form-control datetimepicker  "
  dateFormat="dd/MM/yyyy" 
/>


                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                      <DatePicker
  selected={leaveFormData.to}
  name="to"
  onChange={(date) => handleChange('to', date)} // Pass name and date directly
  className="form-control datetimepicker  "
  dateFormat="dd/MM/yyyy" 
/>
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    // onChange={handleChange}
                    className="form-control"
                    readonly
                    type="text"
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readonly
                    value="12"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    onChange={handleChange}
                    rows="4"
                    className="form-control"
                    value={leaveFormData.reason}
                    name="reason"
                  ></textarea>
                </div>
                <div className="submit-section">
                  <button
                    onClick={handleSubmitLeave}
                    className="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DeleteLeave = ({ ShowDeleteLeaveModal, selectedData }) => {
 const dispatch = useDispatch()
 const handleDelete = ()=>{
  dispatch(deleteLeave(selectedData.id))
  ShowDeleteLeaveModal()
 }
  console.log('selectedData', selectedData)
  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div className="  modal custom-modal d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to delete this leave?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary continue-btn"
                      onClick={handleDelete}
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      data-bs-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                      onClick={ShowDeleteLeaveModal}
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
