import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AdminLeaves() {
  const leaveListData = useSelector((state) => state.leave.leaves);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [leaveDropdown, setLeaveDropdown] = useState(false);
  const [leaveData, setLeaveData] = useState(leaveListData);
  const [showEditLeave, setShowEditLeave] = useState(false);
  const [showAddLeave, setShowAddLeave] = useState(false);
  const [showDeleteLeaveModal, setDeleteLeaveModal] = useState(false);

  const ShowEditLeaveModal = () => {
    setShowEditLeave(!showEditLeave);
  };

  const ShowAddLeaveModal = () => {
    setShowAddLeave(!showAddLeave);
  };
  const ShowDeleteLeaveModal = () => {
    setDeleteLeaveModal(!showDeleteLeaveModal);
  };
  const leaveDropdownRef = useRef({});
  const toggleDropdown = (id) => {
    console.log("id: ", id);
    setLeaveDropdown((prevId) => (prevId === id ? null : id));
  };
  const handleClickOutside = (event) => {
    if (
      leaveDropdownRef.current &&
      !leaveDropdownRef.current.contains(event.target)
    ) {
      setLeaveDropdown(false);
    }
  };
  //   useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);
  useEffect(() => {
    setLeaveData(leaveListData);
  }, [leaveData]);

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

          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Employee Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <select className="form-control select floating">
                  <option> -- Select -- </option>
                  <option>Casual Leave</option>
                  <option>Medical Leave</option>
                  <option>Loss of Pay</option>
                </select>
                <label className="focus-label">Leave Type</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus select-focus">
                <select className="form-control select floating">
                  <option> -- Select -- </option>
                  <option> Pending </option>
                  <option> Approved </option>
                  <option> Rejected </option>
                </select>
                <label className="focus-label">Leave Status</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="input-block mb-3 form-focus">
                <div className="cal-icon">
                  {/* <input
                    className="form-control floating datetimepicker"
                    type="text"
                  /> */}
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
              <a href="#" className="btn btn-success w-100">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>

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
                    {leaveData &&
                      leaveData.map((data, index) => (
                        <>
                          <tr>
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
                            <td>{data.from} </td>
                            <td>{data.to}</td>
                            <td>{data.no_of_day} </td>
                            <td>{data.reason}</td>
                            <td className="text-center">
                              <div className="dropdown action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa-regular fa-circle-dot text-purple"></i>{" "}
                                  New
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                    <i className="fa-regular fa-circle-dot text-success"></i>{" "}
                                    Approved
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fa-regular fa-circle-dot text-danger"></i>{" "}
                                    Declined
                                  </a>
                                </div>
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
                                      class="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_holiday"
                                      onClick={ShowEditLeaveModal}
                                    >
                                      <i class="fa-solid fa-pencil m-r-5"></i>{" "}
                                      Edit
                                    </Link>

                                    <Link
                                      class="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_holiday"
                                      onClick={ShowDeleteLeaveModal}
                                    >
                                      <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                      Delete
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {showEditLeave && (
          <EditLeave
            ShowEditLeaveModal={ShowEditLeaveModal}
            // actionType={"add"}
          />
        )}

        {showAddLeave && <AddLeave ShowAddLeaveModal={ShowAddLeaveModal} />}

        {showDeleteLeaveModal && (
          <DeleteLeave ShowDeleteLeaveModal={ShowDeleteLeaveModal} />
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

const EditLeave = ({ ShowEditLeaveModal }) => {
  const handleSubmitEditLeave = () => {
    ShowEditLeaveModal();
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
    employeeId: "",
    leave_type: "",
    start_date: "",
    end_date: "",
    leave_status: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmitLeave = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

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
                    className="   form-control select"
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
                    <input
                      className="form-control datetimepicker"
                      type="text"
                      name="start_date"
                      value={leaveFormData.start_date}
                      onChange={handleChange}
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
                      type="text"
                      name="end_date"
                      value={leaveFormData.end_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
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

const DeleteLeave = ({ ShowDeleteLeaveModal }) => {
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
