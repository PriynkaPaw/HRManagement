import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ShiftAndSchedule() {
    const employees = [
        {
          id: 1,
          name: "John Doe",
          role: "Web Designer",
          avatar: "assets/img/profiles/avatar-02.jpg",
          scheduledShift: "6:30 am - 9:30 pm (14 hrs 15 mins)",
          department: "SMARTHR"
        },
        {
          id: 2,
          name: "Richard Miles",
          role: "Web Developer",
          avatar: "assets/img/profiles/avatar-09.jpg",
          scheduledShift: "6:30 am - 9:30 pm (14 hrs 15 mins)",
          department: "SMARTHR"
        },
        {
          id: 3,
          name: "John Smith",
          role: "Android Developer",
          avatar: "assets/img/profiles/avatar-10.jpg",
          scheduledShift: "6:30 am - 9:30 pm (14 hrs 15 mins)",
          department: "SMARTHR"
        }
      ]


      const [showEditShiftSchedule, setShowEditShiftSchedule] = useState(false);
      const [showAddShiftSchedule, setShowAddShiftSchedule] = useState(false);
    
      const ShowEditShiftScheduleModal = () => {
        setShowEditShiftSchedule(!showEditShiftSchedule);
      };
    
      const ShowAddShiftScheduleModal = () => {
        setShowAddShiftSchedule(!showAddShiftSchedule);
      };
    
      
  return (
    <><div className="page-wrapper">

    <div className="content container-fluid">
    
    <div className="page-header">
    <div className="row">
    <div className="col">
    <h3 className="page-title">Daily Scheduling</h3>
    <ul className="breadcrumb">
    <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
    <li className="breadcrumb-item"><a href="employees.html">Employees</a></li>
    <li className="breadcrumb-item active">Shift Scheduling</li>
    </ul>
    </div>
    <div className="col-auto float-end ms-auto">
    <Link to="/shiftlist" className="btn add-btn m-r-5" >Shifts</Link>
    <a href="#" className="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}> Assign Shifts</a>
    </div>
    </div>
    </div>
    
    
    
    <div className="row filter-row">
    <div className="col-sm-6 col-md-3">
    <div className="input-block mb-3 form-focus">
    <input type="text" className="form-control floating"/>
    <label className="focus-label">Employee</label>
    </div>
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="input-block mb-3 form-focus select-focus">
    <select className="form-control select floating">
    <option>All Department</option>
    <option value="1">Finance</option>
    <option value="2">Finance and Management</option>
    <option value="3">Hr & Finance</option>
    <option value="4">ITech</option>
    </select>
    <label className="focus-label">Department</label>
    </div>
    </div>
    <div className="col-sm-6 col-md-2">
    <div className="input-block mb-3 form-focus focused">
    <div className="cal-icon">
    <input className="form-control floating datetimepicker" type="text"/>
    </div>
    <label className="focus-label">From</label>
    </div>
    </div>
    <div className="col-sm-6 col-md-2">
    <div className="input-block mb-3 form-focus focused">
    <div className="cal-icon">
    <input className="form-control floating datetimepicker" type="text"/>
    </div>
    <label className="focus-label">To</label>
    </div>
    </div>
    <div className="col-sm-6 col-md-2">
    <a href="#" className="btn btn-success w-100"> Search </a>
    </div>
    </div>
    
    <div className="row">
    <div className="col-md-12">
    <div className="table-responsive">
    <table className="table table-striped custom-table datatable leave-employee-table">
    <thead>
    <tr>
    <th>Scheduled Shift</th>
    <th>Fri 21</th>
    <th>Sat 22</th>
    <th>Sun 23</th>
    <th>Mon 24</th>
    <th>Tue 25</th>
    <th>Wed 26</th>
    <th>Thu 27</th>
    <th>Fri 28</th>
    <th>Sat 29</th>
    </tr>
    </thead>
    <tbody>
{
    employees.map((data)=>(
        <>  <tr>
        <td>
        <h2 className="table-avatar">
        <a href="profile.html" className="avatar"><img src="assets/img/profiles/avatar-02.jpg" alt="User Image"/></a>
        <a href="profile.html">{data.name} <span>{data.role}</span></a>
        </h2>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" className="green-border" onClick={ShowEditShiftScheduleModal}>
        <span className="username-info m-b-10">{data.scheduledShift} </span>
        <span className="userrole-info">Web Designer - {data.department}</span>
        </a>
        </h2>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus"  ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"  onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus"></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal} >
        <span><i className="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" className="green-border" onClick={ShowEditShiftScheduleModal}>
        <span className="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
        <span className="userrole-info">Web Designer - SMARTHR</span>
        </a>
        </h2>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus"></i></span>
        </a>
        </div>
        </td>
        <td>
        <div className="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i className="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        </tr>
        </>
    ))
}
  
  
    </tbody>
    </table>
    </div>
    </div>
    </div>
    
    </div>

    {
        showAddShiftSchedule && <AddShiftSchedule ShowAddShiftScheduleModal={ShowAddShiftScheduleModal} />
    }
    {
        showEditShiftSchedule && <EditShiftSchedule ShowEditShiftScheduleModal={ShowEditShiftScheduleModal} />
    }
    
    </div></>
  )
}

export default ShiftAndSchedule



const AddShiftSchedule =({ShowAddShiftScheduleModal}) =>{
    return (
        <>
      <div className="modal-backdrop fade show"></div>

        
<div id="add_schedule" className="modal custom-modal d-block" role="dialog">
<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Add Schedule</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddShiftScheduleModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form>
<div className="row">
<div className="col-sm-6">

</div>
<div className="col-sm-6">

</div>

<div className="col-sm-6">

</div>
<div className="col-sm-4">

</div>
<div className="col-sm-4">
<div className="input-block mb-3">
<label className="col-form-label">Start Time <span className="text-danger">*</span></label>
<div className="input-group time">
<input className="form-control timepicker" /><span className="input-group-text"><i className="fa-regular fa-clock"></i></span>
</div>
</div>
</div>

<div className="col-sm-4">

</div>
<div className="col-sm-4">
<div className="input-block mb-3">
<label className="col-form-label">End Time <span className="text-danger">*</span></label>
<div className="input-group time">
<input className="form-control timepicker" /><span className="input-group-text"><i className="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div className="col-sm-4">

</div>
<div className="col-sm-4">

</div>
<div className="col-sm-12">

</div>
<div className="col-sm-12">

</div>
</div>
<div className="submit-section">
<button className="btn btn-primary submit-btn">Submit</button>
</div>
</form>
</div>
</div>
</div>
</div></>
    )
}


const EditShiftSchedule =({ShowEditShiftScheduleModal}) =>{
    return (
        <>
      <div className="modal-backdrop fade show"></div>

        <div id="edit_schedule" className="modal custom-modal d-block" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title">Edit Schedule</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditShiftScheduleModal}>
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
        <form>
        <div className="row">
        <div className="col-sm-6">
        <div className="input-block mb-3">
        <label className="col-form-label">Department <span className="text-danger">*</span></label>
        <select className="form-control select">
        <option value>Select</option>
        <option selected value>Development</option>
        <option value="1">Finance</option>
        <option value="2">Finance and Management</option>
        <option value="3">Hr & Finance</option>
        <option value="4">ITech</option>
        </select>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="input-block mb-3">
        <label className="col-form-label">Employee Name <span className="text-danger">*</span></label>
        <select className="form-control select">
        <option value>Select </option>
        <option selected value="1">Richard Miles </option>
        <option value="2">John Smith</option>
        <option value="3">Mike Litorus </option>
        <option value="4">Wilmer Deluna</option>
        </select>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="input-block mb-3">
        <label className="col-form-label">Date <span className="text-danger">*</span></label>
        <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="input-block mb-3">
        <label className="col-form-label">Shifts <span className="text-danger">*</span></label>
        <select className="form-control select">
        <option value>Select </option>
        <option value="1">10'o clock Shift</option>
        <option value="2">10:30 shift</option>
        <option value="3">Daily Shift </option>
        <option selected value="4">New Shift</option>
        </select>
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Min Start Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="06:11 am" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Start Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="06:30 am" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Max Start Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="08:12 am" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Min End Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="09:12 pm" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">End Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="09:30 pm" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Max End Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="09:45 pm" />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="input-block mb-3">
        <label className="col-form-label">Break Time <span className="text-danger">*</span></label>
        <input className="form-control timepicker" type="text" value="45" />
        </div>
        </div>
        <div className="col-sm-12">
        <div className="form-check">
        <input type="checkbox" className="form-check-input" id="customCheck1" />
        <label className="form-check-label" for="customCheck1">Recurring Shift</label>
        </div>
        </div>
        <div className="col-sm-12">
        <div className="input-block mb-3">
        <label className="col-form-label">Repeat Every</label>
        <select className="form-control select">
        <option value>1 </option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="3">4</option>
        <option selected value="4">5</option>
        <option value="3">6</option>
        </select>
        <label className="col-form-label">Week(s)</label>
        </div>
        </div>
        <div className="col-sm-12">
        <div className="input-block mb-3 wday-box">
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="monday" className="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">M</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="tuesday" className="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">T</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="wednesday" className="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">W</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="thursday" className="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">T</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="friday" className="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">F</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="saturday" className="days recurring" onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">S</span></label>
        <label className="checkbox-inline"><input type="checkbox" name="week_days[]" value="sunday" className="days recurring" onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span className="checkmark">S</span></label>
        </div>
        </div>
        <div className="col-sm-6">
        <div className="input-block mb-3">
        <label className="col-form-label">End On <span className="text-danger">*</span></label>
        <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
        </div>
        </div>
        <div className="col-sm-12">
        <div className="form-check">
        <input type="checkbox" className="form-check-input" id="customCheck2" />
        <label className="form-check-label" for="customCheck2">Indefinite</label>
        </div>
        </div>
        <div className="col-sm-12">
        <div className="input-block mb-3">
        <label className="col-form-label">Accept Extra Hours </label>
        <div className="form-check form-switch">
        <input type="checkbox" className="form-check-input" id="customSwitch3" checked />
        <label className="form-check-label" for="customSwitch3"></label>
        </div>
        </div>
        </div>
        <div className="col-sm-12">
        <div className="input-block mb-3">
        <label className="col-form-label">Publish </label>
        <div className="form-check form-switch">
        <input type="checkbox" className="form-check-input" id="customSwitch4" checked /> 
        <label className="form-check-label" for="customSwitch4"></label>
        </div>
        </div>
        </div>
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
    )
}