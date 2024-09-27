import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EmployeeLeave() {
  const [showEditLeave, setShowEditLeave] = useState(false);
  const [showAddLeave, setShowAddLeave] = useState(false);
  const [showDeleteLeaveModal, setDeleteLeaveModal] = useState(false);
  const [leaveDropdown, setLeaveDropdown] = useState(false);

  const ShowEditLeaveModal = () => {
    setShowEditLeave(!showEditLeave);
  };

  const ShowAddLeaveModal = () => {
    setShowAddLeave(!showAddLeave);
  };
  const ShowDeleteLeaveModal = () => {
    setDeleteLeaveModal(!showDeleteLeaveModal);
  };
  const toggleDropdown = (id) => {
    console.log("id: ", id);
    setLeaveDropdown((prevId) => (prevId === id ? null : id));
  };
  const leaveListData = useSelector(
    (state) => state.employeeLeave.employeeLeaves
  );

 
  

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
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Annual Leave</h6>
                <h4>12</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Medical Leave</h6>
                <h4>3</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Other Leave</h6>
                <h4>4</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-info">
                <h6>Remaining Leave</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table leave-employee-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th className="text-center">Status</th>
                      <th>Approved by</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveListData &&
                      leaveListData.map((data, index) => (
                        <>
                          <tr>
                            <td>{data.leave_type} </td>
                            <td> {data.from} </td>
                            <td>{data.to} </td>
                            <td>{data.no_of_day}</td>
                            <td>{data.reason}</td>
                            <td className="text-center">
                              <div className="action-label">
                                <a
                                  className="btn btn-white btn-sm btn-rounded"
                                  href="javascript:void(0);"
                                >
                                  <i className="fa-regular fa-circle-dot text-purple"></i>{" "}
                                  {/* New */}
                                  {data.status}
                                </a>
                              </div>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-xs">
                                  <img
                                    src="assets/img/profiles/avatar-09.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="#">Richard Miles</a>
                              </h2>
                            </td>
                            <td className="text-end">
                              <div className="dropdown dropdown-action">
                           
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
                                      onClick={ShowEditLeaveModal}
                                    >
                                      <i className="fa-solid fa-pencil m-r-5"></i>{" "}
                                      Edit
                                    </Link>

                                    <Link
                                      className="dropdown-item"
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
        {showAddLeave && <AddLeave ShowAddLeaveModal={ShowAddLeaveModal} />}
        {showEditLeave && <EditLeave ShowEditLeaveModal={ShowEditLeaveModal} />}
        {showDeleteLeaveModal && (
          <DeleteLeave ShowDeleteLeaveModal={ShowDeleteLeaveModal} />
        )}
        <div
          className="modal custom-modal fade"
          id="delete_approve"
          role="dialog"
        ></div>
      </div>
    </>
  );
}

export default EmployeeLeave;

const AddLeave = ({ ShowAddLeaveModal }) => {
  const [leaveFormData, setLeaveFormData] = useState({
    leave_type: "",
    from: "",
    to: "",
    no_of_day: "",
    reason: "",
    status: "",
    approved_by: "",
    img_url: "",
  });
  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName.target) {
      const { name, type } = eOrName.target;
  
      if (type === "file") {
        const file = eOrName.target.files[0];
        if (file) {
          setLeaveFormData({
            ...leaveFormData,
            [name]: file, 
          });
        }
      } else {
        const { value } = eOrName.target;
        setLeaveFormData({
          ...leaveFormData,
          [name]: value,
        });
      }
    } else {
      const formattedDate = format(value, "yyyy-MM-dd");
      setLeaveFormData({
        ...leaveFormData,
        [eOrName]: formattedDate,
      });
    }
  };
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div id="add_leave" className="modal custom-modal d-block" role="dialog">
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
                    className="form-control select"
                    value={leaveFormData.leave_type}
                  >
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    {/* <input className="form-control datetimepicker" type="text" /> */}
                    <DatePicker
                          selected={leaveFormData.from}
                          name="from"
                          onChange={(date) =>
                            handleInputChange("from", date)
                          } 
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
                    {/* <input className="form-control datetimepicker" type="text" /> */}
                    <DatePicker
                          selected={leaveFormData.to}
                          name="to"
                          onChange={(date) =>
                            handleInputChange("to", date)
                          } 
                          className="form-control datetimepicker  "
                          dateFormat="dd/MM/yyyy"
                        />
                  </div>
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readonly type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readonly value="12" type="text" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea rows="4" className="form-control"></textarea>
                </div>
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

const EditLeave = ({ ShowEditLeaveModal }) => {
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div id="edit_leave" className="modal custom-modal d-block" role="dialog">
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
                  <input className="form-control" readonly type="text" value="2" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readonly value="12" type="text" />
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

const DeleteLeave = ({ ShowDeleteLeaveModal }) => {
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div id="delete_leave" className="modal custom-modal d-block" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to Cancel this leave?</p>
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
