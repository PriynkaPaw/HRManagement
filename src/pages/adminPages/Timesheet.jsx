import React, { useRef, useState } from 'react';
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
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div id="add_todaywork" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add Today Work details</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddTimesheetModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Project <span class="text-danger">*</span></label>
<select class="select">
<option>Office Management</option>
<option>Project Management</option>
<option>Video Calling App</option>
<option>Hospital Administration</option>
</select>
</div>
</div>
<div class="row">
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Deadline <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control" type="text" value="5 May 2019" readonly />
</div>
</div>
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Total Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" value="100" readonly />
</div>
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Remaining Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" value="60" readonly />
</div>
</div>
<div class="row">
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Date <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control datetimepicker" type="text" />
</div>
</div>
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" />
</div>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Description <span class="text-danger">*</span></label>
<textarea rows="4" class="form-control"></textarea>
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

const EditTodayWork =({ShowEditTimesheetModal}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>
        
<div id="edit_todaywork" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Edit Work Details</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditTimesheetModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="row">
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Project <span class="text-danger">*</span></label>
<select class="select">
<option>Office Management</option>
<option>Project Management</option>
<option>Video Calling App</option>
<option>Hospital Administration</option>
</select>
</div>
</div>
<div class="row">
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Deadline <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control" type="text" value="5 May 2019" readonly />
</div>
</div>
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Total Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" value="100" readonly />
</div>
<div class="input-block mb-3 col-sm-4">
<label class="col-form-label">Remaining Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" value="60" readonly />
</div>
</div>
<div class="row">
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Date <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control datetimepicker" value="03/03/2019" type="text" />
</div>
</div>
<div class="input-block mb-3 col-sm-6">
<label class="col-form-label">Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" value="9" />
</div>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Description <span class="text-danger">*</span></label>
<textarea rows="4" class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</textarea>
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
    )
}

const DeleteTodayWork =({ShowDeleteTimesheetModal}) =>{
    return (

        <>
      <div class="modal-backdrop fade show"></div>

<div class="modal custom-modal d-block" id="delete_workdetail" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Delete Work Details</h3>
<p>Are you sure want to delete?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn" onClick={ShowDeleteTimesheetModal}>Cancel</a>
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