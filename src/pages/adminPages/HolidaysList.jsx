import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddHoliday from "./AddHoliday";

const HolidaysList = () => {
  const holidayDropdownRef = useRef({});
  const holidayListData = useSelector((state) => state.holiday.holidays);
  const [holidayData, setHolidayData] = useState(holidayListData);
  const [holidayDropdown, setHolidayDropdown] = useState(false);
  const [showAddHoliday, setShowAddHoliday] = useState(false);
  const [showEditHoliday, setShowEditHoliday] = useState(false);
  // console.log("holidayData: ", holidayData);

  const toggleDropdown = (id) => {
    setHolidayDropdown((prevId) => (prevId === id ? null : id));
  };

  const handleClickOutside = (event) => {
    if (
      holidayDropdownRef.current &&
      !holidayDropdownRef.current.contains(event.target)
    ) {
      setHolidayDropdown(false);
    }
  };
  const ShowAddHolidayModal = () => {
    setShowAddHoliday(!showAddHoliday);
  };

  const ShowEditHolidayModal = () => {
    setShowEditHoliday(!showEditHoliday);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setHolidayData(holidayListData);
  }, [holidayData]);

  return (
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Holidays 2019</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="admin-dashboard.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Holidays</li>
              </ul>
            </div>
            <div class="col-auto float-end ms-auto">
              <a
                href="#"
                class="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_holiday"
                onClick={ShowAddHolidayModal}
              >
                <i class="fa-solid fa-plus"></i> Add Holiday
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title </th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {holidayData &&
                    holidayData.map((data, index) => (
                      <tr class="holiday-completed">
                        <td>{data?.id}</td>
                        <td>{data?.title}</td>
                        <td>{data?.holiday_date}</td>
                        <td>{data?.Day}</td>
                        <td class="text-end">
                          {/* <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i class="fa-solid fa-pencil m-r-5"></i> Edit</a>
                          <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                          </div>
                          </div> */}
                          <div
                            ref={holidayDropdownRef}
                            className="dropdown dropdown-action"
                          >
                            <Link
                              className="action-icon dropdown-toggle show"
                              data-bs-toggle="dropdown"
                              aria-expanded={holidayDropdown === data.id}
                              onClick={() => toggleDropdown(data.id)}
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            {/* {holidayDropdown &&  */}
                            {holidayDropdown === data.id && (
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
                                  data-bs-target="#edit_holiday"
                                  // onClick={() => ShowEditEmployeeModal(data)}
                                  onClick={ShowEditHolidayModal}
                                >
                                  <i class="fa-solid fa-pencil m-r-5"></i> Edit
                                </Link>
                                <a
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_holiday"
                                  // onClick={() => ShowDeleteEmployeeModal(data)}
                                >
                                  <i class="fa-regular fa-trash-can m-r-5"></i>{" "}
                                  Delete
                                </a>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Add Employee Modal================================== */}
      {showAddHoliday && (
        <AddHoliday
          ShowAddHolidayModal={ShowAddHolidayModal}
          holidayData={holidayData}
          actionType={"add"}
        />
      )}
      {showEditHoliday && (
        <EditHoliday
          ShowEditHolidayModal={ShowEditHolidayModal}
          // actionType={"add"}
        />
      )}
      {/* <AddHoliday /> */}

      <div class="modal custom-modal fade" id="delete_holiday" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-header">
                <h3>Delete Holiday</h3>
                <p>Are you sure want to delete?</p>
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
    </div>
  );
};

export default HolidaysList;

const EditHoliday = ({ ShowEditHolidayModal }) => {
  return (
    <div class="modal custom-modal fade" id="edit_holiday" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Holiday</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="input-block mb-3">
                <label class="col-form-label">
                  Holiday Name <span class="text-danger">*</span>
                </label>
                <input class="form-control" value="New Year" type="text" />
              </div>
              <div class="input-block mb-3">
                <label class="col-form-label">
                  Holiday Date <span class="text-danger">*</span>
                </label>
                <div class="cal-icon">
                  <input
                    class="form-control datetimepicker"
                    value="01-01-2019"
                    type="text"
                  />
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
