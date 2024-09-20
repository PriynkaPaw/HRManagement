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
    <><div class="page-wrapper">

    <div class="content container-fluid">
    
    <div class="page-header">
    <div class="row">
    <div class="col">
    <h3 class="page-title">Daily Scheduling</h3>
    <ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
    <li class="breadcrumb-item"><a href="employees.html">Employees</a></li>
    <li class="breadcrumb-item active">Shift Scheduling</li>
    </ul>
    </div>
    <div class="col-auto float-end ms-auto">
    <Link to="/shiftlist" class="btn add-btn m-r-5" >Shifts</Link>
    <a href="#" class="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}> Assign Shifts</a>
    </div>
    </div>
    </div>
    
    
    
    <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
    <div class="input-block mb-3 form-focus">
    <input type="text" class="form-control floating"/>
    <label class="focus-label">Employee</label>
    </div>
    </div>
    <div class="col-sm-6 col-md-3">
    <div class="input-block mb-3 form-focus select-focus">
    <select class="form-control select floating">
    <option>All Department</option>
    <option value="1">Finance</option>
    <option value="2">Finance and Management</option>
    <option value="3">Hr & Finance</option>
    <option value="4">ITech</option>
    </select>
    <label class="focus-label">Department</label>
    </div>
    </div>
    <div class="col-sm-6 col-md-2">
    <div class="input-block mb-3 form-focus focused">
    <div class="cal-icon">
    <input class="form-control floating datetimepicker" type="text"/>
    </div>
    <label class="focus-label">From</label>
    </div>
    </div>
    <div class="col-sm-6 col-md-2">
    <div class="input-block mb-3 form-focus focused">
    <div class="cal-icon">
    <input class="form-control floating datetimepicker" type="text"/>
    </div>
    <label class="focus-label">To</label>
    </div>
    </div>
    <div class="col-sm-6 col-md-2">
    <a href="#" class="btn btn-success w-100"> Search </a>
    </div>
    </div>
    
    <div class="row">
    <div class="col-md-12">
    <div class="table-responsive">
    <table class="table table-striped custom-table datatable leave-employee-table">
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
        <h2 class="table-avatar">
        <a href="profile.html" class="avatar"><img src="assets/img/profiles/avatar-02.jpg" alt="User Image"/></a>
        <a href="profile.html">{data.name} <span>{data.role}</span></a>
        </h2>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" class="green-border" onClick={ShowEditShiftScheduleModal}>
        <span class="username-info m-b-10">{data.scheduledShift} </span>
        <span class="userrole-info">Web Designer - {data.department}</span>
        </a>
        </h2>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus"  ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"  onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus"></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal} >
        <span><i class="fa-solid fa-plus" ></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" class="green-border" onClick={ShowEditShiftScheduleModal}>
        <span class="username-info m-b-10">6:30 am - 9:30 pm ( 14 hrs 15 mins)</span>
        <span class="userrole-info">Web Designer - SMARTHR</span>
        </a>
        </h2>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule" onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus"></i></span>
        </a>
        </div>
        </td>
        <td>
        <div class="user-add-shedule-list">
        <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule"onClick={ShowAddShiftScheduleModal}>
        <span><i class="fa-solid fa-plus" ></i></span>
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
      <div class="modal-backdrop fade show"></div>

        
<div id="add_schedule" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add Schedule</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddShiftScheduleModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="col-sm-6">

</div>
<div class="col-sm-6">

</div>

<div class="col-sm-6">

</div>
<div class="col-sm-4">

</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">Start Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker" /><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>

<div class="col-sm-4">

</div>
<div class="col-sm-4">
<div class="input-block mb-3">
<label class="col-form-label">End Time <span class="text-danger">*</span></label>
<div class="input-group time">
<input class="form-control timepicker" /><span class="input-group-text"><i class="fa-regular fa-clock"></i></span>
</div>
</div>
</div>
<div class="col-sm-4">

</div>
<div class="col-sm-4">

</div>
<div class="col-sm-12">

</div>
<div class="col-sm-12">

</div>
</div>
<div class="submit-section">
<button class="btn btn-primary submit-btn">Submit</button>
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
      <div class="modal-backdrop fade show"></div>

        <div id="edit_schedule" class="modal custom-modal d-block" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Edit Schedule</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditShiftScheduleModal}>
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
        <option selected value>Development</option>
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
        <option selected value="1">Richard Miles </option>
        <option value="2">John Smith</option>
        <option value="3">Mike Litorus </option>
        <option value="4">Wilmer Deluna</option>
        </select>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="input-block mb-3">
        <label class="col-form-label">Date <span class="text-danger">*</span></label>
        <div class="cal-icon"><input class="form-control datetimepicker" type="text" /></div>
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
        <option selected value="4">New Shift</option>
        </select>
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Min Start Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="06:11 am" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Start Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="06:30 am" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Max Start Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="08:12 am" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Min End Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="09:12 pm" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">End Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="09:30 pm" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Max End Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="09:45 pm" />
        </div>
        </div>
        <div class="col-sm-4">
        <div class="input-block mb-3">
        <label class="col-form-label">Break Time <span class="text-danger">*</span></label>
        <input class="form-control timepicker" type="text" value="45" />
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
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="monday" class="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">M</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="tuesday" class="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">T</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="wednesday" class="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">W</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="thursday" class="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">T</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="friday" class="days recurring" checked onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">F</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="saturday" class="days recurring" onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">S</span></label>
        <label class="checkbox-inline"><input type="checkbox" name="week_days[]" value="sunday" class="days recurring" onclick="if (!window.__cfRLUnblockHandlers) return false; return false;" data-cf-modified-fc8cb6f9411e59086ea96cca- /><span class="checkmark">S</span></label>
        </div>
        </div>
        <div class="col-sm-6">
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
        <div class="col-sm-12">
        <div class="input-block mb-3">
        <label class="col-form-label">Accept Extra Hours </label>
        <div class="form-check form-switch">
        <input type="checkbox" class="form-check-input" id="customSwitch3" checked />
        <label class="form-check-label" for="customSwitch3"></label>
        </div>
        </div>
        </div>
        <div class="col-sm-12">
        <div class="input-block mb-3">
        <label class="col-form-label">Publish </label>
        <div class="form-check form-switch">
        <input type="checkbox" class="form-check-input" id="customSwitch4" checked /> 
        <label class="form-check-label" for="customSwitch4"></label>
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