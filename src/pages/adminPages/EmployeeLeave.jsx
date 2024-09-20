import React, { useState } from "react";
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
  console.log("leaveListData: ", leaveListData);

  return (
    <>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Leaves</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Leaves</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_leave"
                  onClick={ShowAddLeaveModal}
                >
                  <i class="fa-solid fa-plus"></i> Add Leave
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Annual Leave</h6>
                <h4>12</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Medical Leave</h6>
                <h4>3</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Other Leave</h6>
                <h4>4</h4>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stats-info">
                <h6>Remaining Leave</h6>
                <h4>5</h4>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table leave-employee-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-end">Actions</th>
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
                            <td class="text-center">
                              <div class="action-label">
                                <a
                                  class="btn btn-white btn-sm btn-rounded"
                                  href="javascript:void(0);"
                                >
                                  <i class="fa-regular fa-circle-dot text-purple"></i>{" "}
                                  {/* New */}
                                  {data.status}
                                </a>
                              </div>
                            </td>
                            <td>
                              <h2 class="table-avatar">
                                <a href="profile.html" class="avatar avatar-xs">
                                  <img
                                    src="assets/img/profiles/avatar-09.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="#">Richard Miles</a>
                              </h2>
                            </td>
                            <td class="text-end">
                              <div class="dropdown dropdown-action">
                           
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
        {showAddLeave && <AddLeave ShowAddLeaveModal={ShowAddLeaveModal} />}
        {showEditLeave && <EditLeave ShowEditLeaveModal={ShowEditLeaveModal} />}
        {showDeleteLeaveModal && (
          <DeleteLeave ShowDeleteLeaveModal={ShowDeleteLeaveModal} />
        )}
        <div
          class="modal custom-modal fade"
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

  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div id="add_leave" class="modal custom-modal d-block" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Leave</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowAddLeaveModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Leave Type <span class="text-danger">*</span>
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
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    From <span class="text-danger">*</span>
                  </label>
                  <div class="cal-icon">
                    <input class="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    To <span class="text-danger">*</span>
                  </label>
                  <div class="cal-icon">
                    <input class="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Number of days <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" readonly type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Remaining Leaves <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" readonly value="12" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Leave Reason <span class="text-danger">*</span>
                  </label>
                  <textarea rows="4" class="form-control"></textarea>
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

const EditLeave = ({ ShowEditLeaveModal }) => {
  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div id="edit_leave" class="modal custom-modal d-block" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Leave</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={ShowEditLeaveModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Leave Type <span class="text-danger">*</span>
                  </label>
                  <select class="form-control select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    From <span class="text-danger">*</span>
                  </label>
                  <div class="cal-icon">
                    <input
                      class="form-control datetimepicker"
                      value="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    To <span class="text-danger">*</span>
                  </label>
                  <div class="cal-icon">
                    <input
                      class="form-control datetimepicker"
                      value="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Number of days <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" readonly type="text" value="2" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Remaining Leaves <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" readonly value="12" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">
                    Leave Reason <span class="text-danger">*</span>
                  </label>
                  <textarea rows="4" class="form-control">
                    Going to hospital
                  </textarea>
                </div>
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

const DeleteLeave = ({ ShowDeleteLeaveModal }) => {
  return (
    <>
      <div class="modal-backdrop fade show"></div>
      <div id="delete_leave" class="modal custom-modal d-block" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to Cancel this leave?</p>
              </div>
              <div class="modal-btn delete-action">
                <div class="row">
                  <div class="col-6">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-primary continue-btn"
                    >
                      Delete
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="javascript:void(0);"
                      data-bs-dismiss="modal"
                      class="btn btn-primary cancel-btn"
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
