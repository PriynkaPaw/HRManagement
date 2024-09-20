import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShiftList = () => {
  const shifts = [
    {
      id: 1,
      name: "10'o clock Shift",
      minStartTime: "09:00:00 am",
      startTime: "10:00:00 am",
      maxStartTime: "10:30:00 am",
      minEndTime: "06:00:00 pm",
      endTime: "06:30:00 pm",
      maxEndTime: "07:00:00 pm",
      breakTime: "30 mins",
      status: "Active",
    },
    {
      id: 2,
      name: "10:30 shift",
      minStartTime: "10:00:00 am",
      startTime: "10:30:00 am",
      maxStartTime: "11:00:00 am",
      minEndTime: "06:30:00 pm",
      endTime: "07:00:00 pm",
      maxEndTime: "07:30:00 pm",
      breakTime: "45 mins",
      status: "Active",
    },
    {
      id: 3,
      name: "Daily Rout",
      minStartTime: "06:00:00 am",
      startTime: "06:30:00 am",
      maxStartTime: "07:00:00 am",
      minEndTime: "03:00:00 pm",
      endTime: "03:30:00 pm",
      maxEndTime: "04:00:00 pm",
      breakTime: "60 mins",
      status: "Active",
    },
    {
      id: 4,
      name: "New Shift",
      minStartTime: "06:11:00 am",
      startTime: "06:30:00 am",
      maxStartTime: "08:12:00 am",
      minEndTime: "09:12:00 pm",
      endTime: "09:30:00 pm",
      maxEndTime: "09:45:00 pm",
      breakTime: "45 mins",
      status: "Active",
    },
    {
      id: 5,
      name: "Recurring Shift",
      minStartTime: "08:30:00 am",
      startTime: "09:00:00 am",
      maxStartTime: "09:30:00 am",
      minEndTime: "05:30:00 pm",
      endTime: "06:00:00 pm",
      maxEndTime: "06:30:00 pm",
      breakTime: "60 mins",
      status: "Active",
    },
  ];
  const [shiftListDropdown, setShiftListDropdown] = useState(null);
  const [showEditShiftList, setShowEditShiftList] = useState(false);
  const [showAddShiftList, setShowAddShiftList] = useState(false);
  const [showDeleteShiftListModal, setDeleteShiftListModal] = useState(false);
  const [showAddSchedule, setShowAddSchedule] = useState(false);


  const toggleDropdown = (id) => {
    setShiftListDropdown((prevId) => (prevId === id ? null : id));
  };

  const ShowEditShiftListModal = () => {
    setShowEditShiftList(!showEditShiftList);
    setShiftListDropdown(null);
  };

  const ShowAddSchedule =()=>{
    setShowAddSchedule(!showAddSchedule)
  }
  const ShowAddShiftListModal = () => {
    setShowAddShiftList(!showAddShiftList);
    setShiftListDropdown(null);
  };

  const ShowDeleteShiftListModal = () => {
    setDeleteShiftListModal(!showDeleteShiftListModal);
    setShiftListDropdown(null);
  };


  return (
    <div className="page-wrapper">

    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col">
            <h3 className="page-title">Shift List</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="admin-dashboard.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Employees</a>
              </li>
              <li className="breadcrumb-item active">Shift List</li>
            </ul>
          </div>
          <div className="col-auto float-end ms-auto">
            <a
              href="#"
              className="btn add-btn m-r-5"
              data-bs-toggle="modal"
              data-bs-target="#add_shift"
              onClick={ShowAddShiftListModal}
            >
              Add Shifts
            </a>
            <a
              href="#"
              className="btn add-btn m-r-5"
              data-bs-toggle="modal"
              data-bs-target="#add_schedule"
              onClick={ShowAddSchedule}
            >
              Assign Shifts
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table datatable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Shift Name</th>
                  <th>Min Start Time</th>
                  <th>Start Time</th>
                  <th>Max Start Time</th>
                  <th>Min End Time</th>
                  <th>End Time</th>
                  <th>Max End Time</th>
                  <th>Break Time</th>
                  <th className="text-center">Status</th>
                  <th className="text-end no-sort">Action</th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift) => (
                  <tr key={shift.id}>
                    <td>{shift.id}</td>
                    <td>{shift.name}</td>
                    <td>{shift.minStartTime}</td>
                    <td>{shift.startTime}</td>
                    <td>{shift.maxStartTime}</td>
                    <td>{shift.minEndTime}</td>
                    <td>{shift.endTime}</td>
                    <td>{shift.maxEndTime}</td>
                    <td>{shift.breakTime}</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i className="fa-regular fa-circle-dot text-success"></i>{" "}
                          {shift.status}
                        </a>
                      </div>
                    </td>
                    <td className="text-end">
                      <div className="dropdown dropdown-action">
                        <Link
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded={shiftListDropdown === shift.id}
                          onClick={()=>toggleDropdown(shift.id)}
                        >
                          <i className="material-icons">more_vert</i>
                        </Link>
                        {
                            shiftListDropdown === shift.id &&  <div className="dropdown-menu dropdown-menu-right show">
                            <Link
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_shift"
                              onClick={ShowEditShiftListModal}
                            >
                              <i className="fa-solid fa-pencil m-r-5"></i> Edit
                            </Link>
                            <Link
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_employee"
                              onClick={ShowDeleteShiftListModal}
                            >
                              <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                              Delete
                            </Link>
                          </div>
                        }
                       
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

    {
        showAddShiftList && <AddShift ShowAddShiftListModal={ShowAddShiftListModal} />
    }
    {
        showDeleteShiftListModal && <DeleteShift ShowDeleteShiftListModal={ShowDeleteShiftListModal} />
    }
    {
        showEditShiftList && <EditShift ShowEditShiftListModal={ShowEditShiftListModal} />
    }
    {
        showAddSchedule && <AddSchedule ShowAddSchedule={ShowAddSchedule} />
    }
    </div>
  );
};

export default ShiftList;


const AddShift =({ShowAddShiftListModal}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div id="add_shift" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add Shift</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddShiftListModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Shift Name <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Min Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Max Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Min End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Max End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Break Time (In Minutes) </label>
<input type="text" class="form-control timepicker"/>
</div>
</div>
<div class="col-sm-12">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="customCheck1" />
<label class="form-check-label" for="customCheck1">Recurring Shift</label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Repeat Every</label>
<select class="form-control select">
<option value>1 </option>
<option value="1">2</option>
<option value="2">3</option>
<option value="3">4</option>
<option selected value="4">5</option>
<option value="3">6</option>
</select>
<label class="col-form-label">Week(s)</label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3 wday-box">
<label class="checkbox-inline"><input type="checkbox" value="monday" class="days recurring" checked /><span class="checkmark">M</span></label>
<label class="checkbox-inline"><input type="checkbox" value="tuesday" class="days recurring" checked /><span class="checkmark">T</span></label>
<label class="checkbox-inline"><input type="checkbox" value="wednesday" class="days recurring" checked /><span class="checkmark">W</span></label>
<label class="checkbox-inline"><input type="checkbox" value="thursday" class="days recurring" checked /><span class="checkmark">T</span></label>
<label class="checkbox-inline"><input type="checkbox" value="friday" class="days recurring" checked /><span class="checkmark">F</span></label>
<label class="checkbox-inline"><input type="checkbox" value="saturday" class="days recurring" /><span class="checkmark">S</span></label>
<label class="checkbox-inline"><input type="checkbox" value="sunday" class="days recurring" /><span class="checkmark">S</span></label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">End On <span class="text-danger">*</span></label>
<div class="cal-icon"><input class="form-control datetimepicker" type="text" /></div>
</div>
</div>
<div class="col-sm-12">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="customCheck2" />
<label class="form-check-label" for="customCheck2">Indefinite</label>
</div>
</div>
<div class="col-md-12">
<div class="input-block mb-3">
<label class="col-form-label">Add Tag </label>
<input type="text" class="form-control" />
</div>
</div>
<div class="col-md-12">
<div class="input-block mb-3">
<label class="col-form-label">Add Note </label>
<textarea class="form-control"></textarea>
</div>
</div>
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
    )
}

const EditShift =({ShowEditShiftListModal}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div id="edit_shift" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Edit Shift</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditShiftListModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Shift Name <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Min Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Max Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Min End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Max End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-md-4">
<div class="input-block mb-3">
<label class="col-form-label">Break Time (In Minutes) </label>
<input type="text" class="form-control timepicker"/>
</div>
</div>
<div class="col-sm-12">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="customCheck3"/>
<label class="form-check-label" for="customCheck3">Recurring Shift</label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Repeat Every</label>
<select class="select">
<option value>1 </option>
<option value="1">2</option>
<option value="2">3</option>
<option value="3">4</option>
<option selected value="4">5</option>
<option value="3">6</option>
</select>
<label class="col-form-label">Week(s)</label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3 wday-box">
<label class="checkbox-inline"><input type="checkbox" value="monday" class="days recurring" checked/><span class="checkmark">M</span></label>
<label class="checkbox-inline"><input type="checkbox" value="tuesday" class="days recurring" checked/><span class="checkmark">T</span></label>
<label class="checkbox-inline"><input type="checkbox" value="wednesday" class="days recurring" checked/><span class="checkmark">W</span></label>
<label class="checkbox-inline"><input type="checkbox" value="thursday" class="days recurring" checked/><span class="checkmark">T</span></label>
<label class="checkbox-inline"><input type="checkbox" value="friday" class="days recurring" checked/><span class="checkmark">F</span></label>
<label class="checkbox-inline"><input type="checkbox" value="saturday" class="days recurring"/><span class="checkmark">S</span></label>
<label class="checkbox-inline"><input type="checkbox" value="sunday" class="days recurring" /><span class="checkmark">S</span></label>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">End On <span class="text-danger">*</span></label>
<div class="cal-icon"><input class="form-control datetimepicker" type="text" /></div>
</div>
</div>
<div class="col-sm-12">
<div class="form-check">
<input type="checkbox" class="form-check-input" id="customCheck4"/>
<label class="form-check-label" for="customCheck4">Indefinite</label>
</div>
</div>
<div class="col-md-12">
<div class="input-block mb-3">
<label class="col-form-label">Add Tag </label>
<input type="text" class="form-control" /> 
</div>
</div>
<div class="col-md-12">
<div class="input-block mb-3">
<label class="col-form-label">Add Note </label>
<textarea class="form-control"></textarea>
</div>
</div>
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
    )
}


const AddSchedule =({ShowAddSchedule}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div id="add_schedule" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add Schedule</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddSchedule}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="col-sm-6">
<div class="input-block mb-3">
<label class="col-form-label">Department <span class="text-danger">*</span></label>
<select class="form-control select">
<option value>Select</option>
<option value>Development</option>
<option value="1">Finance</option>
<option value="2">Finance and Management</option>
<option value="3">Hr & Finance</option>
<option value="4">ITech</option>
</select>
</div>
</div>
<div class="col-sm-6">
<div class="input-block mb-3">
<label class="col-form-label">Employee Name <span class="text-danger">*</span></label>
<select class="form-control select">
<option value>Select </option>
<option value="1">Richard Miles </option>
<option value="2">John Smith</option>
<option value="3">Mike Litorus </option>
<option value="4">Wilmer Deluna</option>
</select>
</div>
</div>
<div class="col-sm-6">
<div class="input-block mb-3">
<label class="col-form-label">Date</label>
<div class="cal-icon"><input class="form-control datetimepicker" type="text"/></div>
</div>
</div>
<div class="col-sm-6">
<div class="input-block mb-3">
<label class="col-form-label">Shifts <span class="text-danger">*</span></label>
<select class="form-control select">
<option value>Select </option>
<option value="1">10'o clock Shift</option>
<option value="2">10:30 shift</option>
<option value="3">Daily Shift </option>
<option value="4">New Shift</option>
</select>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Min Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Max Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Min End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Max End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker"/><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Break Time <span class="text-danger">*</span></label>
<input class="form-control timepicker" type="text"/>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Accept Extra Hours </label>
<div class="form-switch">
<input type="checkbox" class="form-check-input" id="customSwitch1" checked/>
<label class="form-check-label" for="customSwitch1"></label>
</div>
</div>
</div>
<div class="col-sm-12">
<div class="input-block mb-3">
<label class="col-form-label">Publish </label>
<div class="form-switch">
<input type="checkbox" class="form-check-input" id="customSwitch2" checked/>
<label class="form-check-label" for="customSwitch2"></label>
</div>
</div>
</div>
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
    )
}


const DeleteShift =({ShowDeleteShiftListModal}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div class="modal custom-modal d-block" id="delete_employee" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Delete Shift</h3>
<p>Are you sure want to delete?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn" onClick={ShowDeleteShiftListModal}>Cancel</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
    )
}