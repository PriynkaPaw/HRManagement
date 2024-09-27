import { format } from 'date-fns';
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';

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
    <div className="page-wrapper">

<div className="content container-fluid">

<div className="page-header">
<div className="row align-items-center">
<div className="col">
<h3 className="page-title">Overtime</h3>
<ul className="breadcrumb">
<li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
<li className="breadcrumb-item active">Overtime</li>
</ul>
</div>
<div className="col-auto float-end ms-auto">
<a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_overtime" onClick={ShowAddOverTimeModal}><i className="fa-solid fa-plus"></i> Add Overtime</a>
</div>
</div>
</div>


<div className="row">
<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div className="stats-info">
<h6>Overtime Employee</h6>
<h4>12 <span>this month</span></h4>
</div>
</div>
<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div className="stats-info">
<h6>Overtime Hours</h6>
<h4>118 <span>this month</span></h4>
</div>
</div>
<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div className="stats-info">
<h6>Pending Request</h6>
<h4>23</h4>
</div>
</div>
<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
<div className="stats-info">
<h6>Rejected</h6>
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
<th>#</th>
<th>Name</th>
<th>OT Date</th>
<th className="text-center">OT Hours</th>
<th>OT Type</th>
<th>Description</th>
<th className="text-center">Status</th>
<th>Approved by</th>
<th className="text-end">Actions</th>
</tr>
</thead>
<tbody>
{
    data.map((item)=>(
        <>
        <tr>
      <td>{item.id}</td>
      <td>
        <h2 className="table-avatar blue-link">
          <a href="profile.html" className="avatar">
            <img src={item.avatar} alt="User Image" />
          </a>
          <a href={item.profileLink}>{item.name}</a>
        </h2>
      </td>
      <td> {item.date}</td>
      <td className="text-center">{item.hours}</td>
      <td>{item.type}</td>
      <td>{item.description}</td>
      <td className="text-center">
        <div className="action-label">
          <a className="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
            <i className="fa-regular fa-circle-dot {item.statusColor}"></i> {item.statusText}
          </a>
        </div>
      </td>
      <td>
        <h2 className="table-avatar">
          <a href="profile.html" className="avatar avatar-xs">
            <img src="{item.approverAvatar}" alt="User Image" />
          </a>
          <a href="#">{item.approverName}</a>
        </h2>
      </td>
      <td className="text-end">
        <div className="dropdown dropdown-action">
          <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded={overTimeDropdown === item.id} 
          onClick={()=>toggleDropdown(item.id)}>
            <i className="material-icons">more_vert</i>
          </a>
          {
            overTimeDropdown === item.id && (
                <>
                    <div className="dropdown-menu dropdown-menu-right show">
            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_overtime" onClick={ShowEditOverTimeModal}>
              <i className="fa-solid fa-pencil m-r-5"></i> Edit
            </a>
            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_overtime" onClick={ShowDeleteOverTimeModal}>
              <i className="fa-regular fa-trash-can m-r-5"></i> Delete
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
  const [formData, setFormData] = useState({
    date :""
  })

  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName.target) {
      const { name, type } = eOrName.target;
  
      if (type === "file") {
        const file = eOrName.target.files[0];
        if (file) {
          setFormData({
            ...formData,
            [name]: file, 
          });
        }
      } else {
        const { value } = eOrName.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      const formattedDate = format(value, "yyyy-MM-dd");
      setFormData({
        ...formData,
        [eOrName]: formattedDate,
      });
    }
  };
    return (
        <>
      <div className="modal-backdrop fade show"></div>

<div id="add_overtime" className="modal custom-modal d-block" role="dialog">
<div className="modal-dialog modal-dialog-centered" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Add Overtime</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddOverTimeModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form>
<div className="input-block mb-3">
<label className="col-form-label">Select Employee <span className="text-danger">*</span></label>
<select className="form-control select">
<option>-</option>
<option>John Doe</option>
<option>Richard Miles</option>
<option>John Smith</option>
</select>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Overtime Date <span className="text-danger">*</span></label>
<div className="cal-icon">
{/* <input className="form-control datetimepicker" type="text"/> */}
<DatePicker
                          selected={formData.date}
                          name="date"
                          onChange={(date) =>
                            handleInputChange("date", date)
                          } 
                          className="form-control datetimepicker  "
                          dateFormat="dd/MM/yyyy"
                        />
</div>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Overtime Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text"/>
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
</div>

        </>
    )
}

const EditOverTime =({ShowEditOverTimeModal}) =>{
    return (
        <>
      <div className="modal-backdrop fade show"></div>

        <div id="edit_overtime" className="modal custom-modal d-block" role="dialog">
<div className="modal-dialog modal-dialog-centered" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Edit Overtime</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditOverTimeModal}>
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<form>
<div className="input-block mb-3">
<label className="col-form-label">Select Employee <span className="text-danger">*</span></label>
<select className="select">
<option>-</option>
<option>John Doe</option>
<option>Richard Miles</option>
<option>John Smith</option>
</select>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Overtime Date <span className="text-danger">*</span></label>
<div className="cal-icon">
<input className="form-control datetimepicker" type="text"/>
</div>
</div>
<div className="input-block mb-3">
<label className="col-form-label">Overtime Hours <span className="text-danger">*</span></label>
<input className="form-control" type="text" />
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
</div>

        </>
    )
}

const DeleteOverTime =({ShowDeleteOverTimeModal}) =>
    {
        return (
            <>
      <div className="modal-backdrop fade show"></div>

<div className="modal custom-modal d-block" id="delete_overtime" role="dialog">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-body">
<div className="form-header">
<h3>Delete Overtime</h3>
<p>Are you sure want to Cancel this?</p>
</div>
<div className="modal-btn delete-action">
<div className="row">
<div className="col-6">
<a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
</div>
<div className="col-6">
<a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary cancel-btn" onClick={ShowDeleteOverTimeModal}>Cancel</a>
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