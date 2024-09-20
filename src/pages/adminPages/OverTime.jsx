import React, { useState } from 'react'

function OverTime() {
    const data = [
        {
          id: 1,
          avatar: 'assets/img/profiles/avatar-02.jpg',
          name: 'John Doe',
          profileLink: '/profile',
          date: '8 Mar 2019',
          hours: 2,
          type: 'Normal day OT 1.5x',
          description: 'Lorem ipsum dollar',
          statusColor: 'text-purple',
          statusText: 'New',
          approverAvatar: 'assets/img/profiles/avatar-09.jpg',
          approverName: 'Richard Miles',
        },
      ];
      
  const [overTimeDropdown, setOverTimeDropdown] = useState(null);
  const [showEditOverTime, setShowEditOverTime] = useState(false);
  const [showAddOverTime, setShowAddOverTime] = useState(false);
  const [showDeleteOverTimeModal, setDeleteOverTimeModal] = useState(false);


  const toggleDropdown = (id) => {
    setOverTimeDropdown((prevId) => (prevId === id ? null : id));
  };

  const ShowEditOverTimeModal = () => {
    setShowEditOverTime(!showEditOverTime);
    setOverTimeDropdown(null);
  };

 
  const ShowAddOverTimeModal = () => {
    setShowAddOverTime(!showAddOverTime);
    setOverTimeDropdown(null);
  };

  const ShowDeleteOverTimeModal = () => {
    setDeleteOverTimeModal(!showDeleteOverTimeModal);
    setOverTimeDropdown(null);
  };
  return (
    <>
    <div class="page-wrapper">

<div class="content container-fluid">

<div class="page-header">
<div class="row align-items-center">
<div class="col">
<h3 class="page-title">Overtime</h3>
<ul class="breadcrumb">
<li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
<li class="breadcrumb-item active">Overtime</li>
</ul>
</div>
<div class="col-auto float-end ms-auto">
<a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_overtime" onClick={ShowAddOverTimeModal}><i class="fa-solid fa-plus"></i> Add Overtime</a>
</div>
</div>
</div>


<div class="row">
<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div class="stats-info">
<h6>Overtime Employee</h6>
<h4>12 <span>this month</span></h4>
</div>
</div>
<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div class="stats-info">
<h6>Overtime Hours</h6>
<h4>118 <span>this month</span></h4>
</div>
</div>
<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div class="stats-info">
<h6>Pending Request</h6>
<h4>23</h4>
</div>
</div>
<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div class="stats-info">
<h6>Rejected</h6>
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
<th>#</th>
<th>Name</th>
<th>OT Date</th>
<th class="text-center">OT Hours</th>
<th>OT Type</th>
<th>Description</th>
<th class="text-center">Status</th>
<th>Approved by</th>
<th class="text-end">Actions</th>
</tr>
</thead>
<tbody>
{
    data.map((item)=>(
        <>
        <tr>
      <td>{item.id}</td>
      <td>
        <h2 class="table-avatar blue-link">
          <a href="profile.html" class="avatar">
            <img src={item.avatar} alt="User Image" />
          </a>
          <a href={item.profileLink}>{item.name}</a>
        </h2>
      </td>
      <td> {item.date}</td>
      <td class="text-center">{item.hours}</td>
      <td>{item.type}</td>
      <td>{item.description}</td>
      <td class="text-center">
        <div class="action-label">
          <a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
            <i class="fa-regular fa-circle-dot {item.statusColor}"></i> {item.statusText}
          </a>
        </div>
      </td>
      <td>
        <h2 class="table-avatar">
          <a href="profile.html" class="avatar avatar-xs">
            <img src="{item.approverAvatar}" alt="User Image" />
          </a>
          <a href="#">{item.approverName}</a>
        </h2>
      </td>
      <td class="text-end">
        <div class="dropdown dropdown-action">
          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded={overTimeDropdown === item.id} 
          onClick={()=>toggleDropdown(item.id)}>
            <i class="material-icons">more_vert</i>
          </a>
          {
            overTimeDropdown === item.id && (
                <>
                    <div class="dropdown-menu dropdown-menu-right show">
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_overtime" onClick={ShowEditOverTimeModal}>
              <i class="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_overtime" onClick={ShowDeleteOverTimeModal}>
              <i class="fa-regular fa-trash-can m-r-5"></i> Delete
            </a>
          </div>
                </>
            )
          }
      
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
    showAddOverTime && <AddOverTime ShowAddOverTimeModal={ShowAddOverTimeModal} />
}
{
    showEditOverTime && <EditOverTime ShowEditOverTimeModal={ShowEditOverTimeModal} />
}
{
    showDeleteOverTimeModal && <DeleteOverTime ShowDeleteOverTimeModal ={ShowDeleteOverTimeModal} />
}


</div>
    </>

  )
}

export default OverTime


const AddOverTime =({ShowAddOverTimeModal})=>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

<div id="add_overtime" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add Overtime</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddOverTimeModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="input-block mb-3">
<label class="col-form-label">Select Employee <span class="text-danger">*</span></label>
<select class="select">
<option>-</option>
<option>John Doe</option>
<option>Richard Miles</option>
<option>John Smith</option>
</select>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Overtime Date <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control datetimepicker" type="text"/>
</div>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Overtime Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text"/>
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
</div>

        </>
    )
}

const EditOverTime =({ShowEditOverTimeModal}) =>{
    return (
        <>
      <div class="modal-backdrop fade show"></div>

        <div id="edit_overtime" class="modal custom-modal d-block" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Edit Overtime</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditOverTimeModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form>
<div class="input-block mb-3">
<label class="col-form-label">Select Employee <span class="text-danger">*</span></label>
<select class="select">
<option>-</option>
<option>John Doe</option>
<option>Richard Miles</option>
<option>John Smith</option>
</select>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Overtime Date <span class="text-danger">*</span></label>
<div class="cal-icon">
<input class="form-control datetimepicker" type="text"/>
</div>
</div>
<div class="input-block mb-3">
<label class="col-form-label">Overtime Hours <span class="text-danger">*</span></label>
<input class="form-control" type="text" />
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
</div>

        </>
    )
}

const DeleteOverTime =({ShowDeleteOverTimeModal}) =>
    {
        return (
            <>
      <div class="modal-backdrop fade show"></div>

<div class="modal custom-modal d-block" id="delete_overtime" role="dialog">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="form-header">
<h3>Delete Overtime</h3>
<p>Are you sure want to Cancel this?</p>
</div>
<div class="modal-btn delete-action">
<div class="row">
<div class="col-6">
<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
</div>
<div class="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn" onClick={ShowDeleteOverTimeModal}>Cancel</a>
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