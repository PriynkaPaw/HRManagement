import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

function Timesheet() {
  const timesheetData = [
    {
        id:1,
      name: 'John Doe',
      role: 'Web Designer',
      date: '8 Mar 2019',
      project: 'Office Management',
      assignedHours: 20,
      workedHours: 7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: 'avatar-02.jpg',
    },
    {
        id:2,

      name: 'Richard Miles',
      role: 'Web Developer',
      date: '8 Mar 2019',
      project: 'Project Management',
      assignedHours: 20,
      workedHours: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: 'avatar-09.jpg',
    },
    {
        id:3,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-01.jpg',
      },
      {
        id:4,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-03.jpg',
      },
      {
        id:5,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-04.jpg',
      },
      {
        id:6,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-05.jpg',
      },
      {
        id:7,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-06.jpg',
      },
      {
        id:8,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-07.jpg',
      },
      {
        id:9,

        name: 'Richard Miles',
        role: 'Web Developer',
        date: '8 Mar 2019',
        project: 'Project Management',
        assignedHours: 20,
        workedHours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        avatar: 'avatar-08.jpg',
      },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [timesheetDropdown, setTimesheetDropdown] = useState(null);
  const [showEditTimesheet, setShowEditTimesheet] = useState(false);
  const [showAddTimesheet, setShowAddTimesheet] = useState(false);
  const [showDeleteTimesheetModal, setDeleteTimesheetModal] = useState(false);


  const toggleDropdown = (id) => {
    setTimesheetDropdown((prevId) => (prevId === id ? null : id));
  };

  const ShowEditTimesheetModal = () => {
    setShowEditTimesheet(!showEditTimesheet);
    setTimesheetDropdown(null);
  };

  const ShowAddTimesheetModal = () => {
    setShowAddTimesheet(!showAddTimesheet);
    setTimesheetDropdown(null);
  };

  const ShowDeleteTimesheetModal = () => {
    setDeleteTimesheetModal(!showDeleteTimesheetModal);
    setTimesheetDropdown(null);
  };


    const itemsPerPage = 5;
    // Pagination 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTimesheet = timesheetData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(timesheetData.length / itemsPerPage)
    const timeSheetDropdownRef = useRef(null);
  
    const handlePreviousPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Timesheet</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                <li className="breadcrumb-item active">Timesheet</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <Link href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_todaywork" onClick={ShowAddTimesheetModal}>
                <i className="fa-solid fa-plus"></i> Add Today Work
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Date</th>
                    <th>Projects</th>
                    <th className="text-center">Assigned Hours</th>
                    <th className="text-center">Hours</th>
                    <th className="d-none d-sm-table-cell">Description</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTimesheet.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar">
                            <img src={`assets/img/profiles/${data.avatar}`} alt={`${data.name}`} />
                          </a>
                          <a href="profile.html">
                            {data.name} <span>{data.role}</span>
                          </a>
                        </h2>
                      </td>
                      <td>{data.date}</td>
                      <td><h2>{data.project}</h2></td>
                      <td className="text-center">{data.assignedHours}</td>
                      <td className="text-center">{data.workedHours}</td>
                      <td className="d-none d-sm-table-cell col-md-4">{data.description}</td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action"   ref={timeSheetDropdownRef}>
                          <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded={timesheetDropdown === data.id}
                              onClick={() => toggleDropdown(data.id)}>
                            <i className="material-icons">more_vert</i>
                          </Link>
                          {
                            timesheetDropdown === data.id && (      <div className="dropdown-menu dropdown-menu-right show">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_todaywork" onClick={ShowEditTimesheetModal}>
                                  <i className="fa-solid fa-pencil m-r-5" ></i> Edit
                                </Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_workdetail" onClick={ShowDeleteTimesheetModal}>
                                  <i className="fa-regular fa-trash-can m-r-5"></i> Delete
                                </Link>
                              </div>)
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
          {/* Pagination Controls */}
          <div className="pagination-container mt-3">
            <button
              className="btn btn-primary me-2"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary ms-2"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
      </div>

    {
        showEditTimesheet && <EditTodayWork ShowEditTimesheetModal={ShowEditTimesheetModal} />
    }
    {
        showDeleteTimesheetModal && <DeleteTodayWork ShowDeleteTimesheetModal={ShowDeleteTimesheetModal} />
    }
    {
        showAddTimesheet && <AddTodayWork ShowAddTimesheetModal={ShowAddTimesheetModal} />
    }

    </div>
  );
}



export default Timesheet


const AddTodayWork =({ShowAddTimesheetModal}) =>{

  const [timesheetFormData, setTimeSheetFormData] = useState({
deadline :"",
date:""
  })
  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName.target) {
      const { name, type } = eOrName.target;
      const inputValue = eOrName.target.value;
  
      // For text input
      if (type === "text") {
        setTimeSheetFormData({
          ...timesheetFormData,
          [name]: inputValue,
        });
      } 
      // Handle other input types (e.g., date)
      else if (type === "date") {
        const formattedDate = format(new Date(inputValue), "yyyy-MM-dd");
        setTimeSheetFormData({
          ...timesheetFormData,
          [name]: formattedDate,
        });
      }
    } else {
      // For non-event scenarios
      const formattedDate = format(value, "yyyy-MM-dd");
      setTimeSheetFormData({
        ...timesheetFormData,
        [eOrName]: formattedDate,
      });
    }
  };
  
    return (
        <>
      <div className="modal-backdrop fade show"></div>

        <div id="add_todaywork" className="modal custom-modal d-block" role="dialog">
<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Add Today Work details</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddTimesheetModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form>
<div className="row">
<div className=" input-block mb-3 col-sm-6">
<label className="col-form-label">Project <span className="text-danger">*</span></label>
<select className="form-control select">
<option>Office Management</option>
<option>Project Management</option>
<option>Video Calling App</option>
<option>Hospital Administration</option>
</select>
</div>
</div>
<div className="row">
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Deadline <span className="text-danger">*</span></label>
<div className="cal-icon">
{/* <input className="form-control" type="text" value="5 May 2019" readonly /> */}
<DatePicker
                          selected={timesheetFormData.deadline}
                          name="deadline"
                          onChange={(date) =>
                            handleInputChange("deadline", date)
                          } 
                          className="form-control datetimepicker  "
                          dateFormat="dd/MM/yyyy"
                        />
</div>
</div>
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Total Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" value="100" readonly />
</div>
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Remaining Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" value="60" readonly />
</div>
</div>
<div className="row">
<div className="input-block mb-3 col-sm-6">
<label className="col-form-label">Date <span className="text-danger">*</span></label>
<div className="cal-icon">
{/* <input className="form-control datetimepicker" type="text" /> */}
<DatePicker
                          selected={timesheetFormData.date}
                          name="date"
                          onChange={(date) =>
                            handleInputChange("date", date)
                          } 
                          className="form-control datetimepicker  "
                          dateFormat="dd/MM/yyyy"
                        />
</div>
</div>
<div className="input-block mb-3 col-sm-6">
<label className="col-form-label">Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" />
</div>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Description <span className="text-danger">*</span></label>
<textarea rows="4" className="form-control"></textarea>
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

const EditTodayWork =({ShowEditTimesheetModal}) =>{
    return (
        <>
      <div className="modal-backdrop fade show"></div>
        
<div id="edit_todaywork" className="modal custom-modal d-block" role="dialog">
<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Edit Work Details</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditTimesheetModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form>
<div className="row">
<div className="input-block mb-3 col-sm-6">
<label className="col-form-label">Project <span className="text-danger">*</span></label>
<select className="form-control select">
<option>Office Management</option>
<option>Project Management</option>
<option>Video Calling App</option>
<option>Hospital Administration</option>
</select>
</div>
</div>
<div className="row">
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Deadline <span className="text-danger">*</span></label>
<div className="cal-icon">
<input className="form-control" type="text" value="5 May 2019" readonly />
</div>
</div>
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Total Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" value="100" readonly />
</div>
<div className="input-block mb-3 col-sm-4">
<label className="col-form-label">Remaining Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" value="60" readonly />
</div>
</div>
<div className="row">
<div className="input-block mb-3 col-sm-6">
<label className="col-form-label">Date <span className="text-danger">*</span></label>
<div className="cal-icon">
<input className="form-control datetimepicker" value="03/03/2019" type="text" />
</div>
</div>
<div className="input-block mb-3 col-sm-6">
<label className="col-form-label">Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" value="9" />
</div>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Description <span className="text-danger">*</span></label>
<textarea rows="4" className="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</textarea>
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
    )
}

const DeleteTodayWork =({ShowDeleteTimesheetModal}) =>{
    return (

        <>
      <div className="modal-backdrop fade show"></div>

<div className="modal custom-modal d-block" id="delete_workdetail" role="dialog">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-body">
<div className="form-header">
<h3>Delete Work Details</h3>
<p>Are you sure want to delete?</p>
</div>
<div className="modal-btn delete-action">
<div className="row">
<div className="col-6">
<a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
</div>
<div className="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary cancel-btn" onClick={ShowDeleteTimesheetModal}>Cancel</a>
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