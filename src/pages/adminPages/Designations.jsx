import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Designations() {
    const designations = [
      { id: 1, title: "Web Designer", department: "Web Development" },
      { id: 2, title: "Web Developer", department: "Web Development" },
      { id: 3, title: "Android Developer", department: "Application Development" },
      { id: 4, title: "IOS Developer", department: "Application Development" },
      { id: 5, title: "UI Designer", department: "Application Development" },
      { id: 6, title: "UX Designer", department: "Application Development" },
      { id: 7, title: "IT Technician", department: "Application Development" },
      { id: 8, title: "Product Manager", department: "Application Development" },
      { id: 9, title: "SEO Analyst", department: "Application Development" },
      { id: 10, title: "Front End Designer", department: "Application Development" },
      { id: 11, title: "Front End Developer", department: "Application Development" },
      { id: 12, title: "Systems Engineer", department: "Application Development" },
      { id: 13, title: "Systems Administrator", department: "Application Development" },
    ];
  
    const [designationDropdown, setDesignationDropdown] = useState(null);
    const [showEditDesignation, setShowEditDesignation] = useState(false);
    const [showAddDesignation, setShowAddDesignation] = useState(false);
    const [selectedDesignation, setSelectdDesignation] = useState("")
    const [showDeleteDesignationModal, setDeleteDesignationModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    const toggleDropdown = (id) => {
      setDesignationDropdown((prevId) => (prevId === id ? null : id));
    };
  
    const ShowEditDesignationModal = (designation) => {
      setShowEditDesignation(!showEditDesignation);
      setDesignationDropdown(null);
      setSelectdDesignation(designation)
    };
  
    const ShowAddDesignationModal = () => {
      setShowAddDesignation(!showAddDesignation);
      setDesignationDropdown(null);
    };
  
    const ShowDeleteDesignationModal = () => {
      setDeleteDesignationModal(!showDeleteDesignationModal);
      setDesignationDropdown(null);
    };
  
    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDesignations = designations.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(designations.length / itemsPerPage);
  
    const departmentDropdownRef = useRef(null);
  
    const handlePreviousPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  

    const [departments, setDepartments] = useState([]);
    const [designation, setDesignation] = useState([]);
  
    useEffect(() => {
      const fetchDepartments = async () => {
        try {
          const token =process.env.REACT_APP_TOKEN
          const response = await axios.get(
            "http://192.168.1.183:8888/api/departments/",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          setDepartments(response.data);
        } catch (error) {
          console.error("Error fetching departments:", error);
        }
      };
      const fetchDesignations = async () => {
        try {
          const token =process.env.REACT_APP_TOKEN
          const response = await axios.get(
            "http://192.168.1.183:8888/api/designations/",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          setDesignation(response.data);
        } catch (error) {
          console.error("Error fetching departments:", error);
        }
      };
      fetchDesignations()
      fetchDepartments();
    }, []);

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Designations</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Designations</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <Link
                  href="#"
                  className="btn add-btn"
                  onClick={ShowAddDesignationModal}
                >
                  <i className="fa-solid fa-plus"></i> Add Designation
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
                      <th className="width-thirty">#</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designation.map((designation) => (
                      <tr key={designation?.id}>
                        <td>{designation?.id}</td>
                        <td>{designation?.name}</td>
                        <td>{designation?.department}</td>
                        <td className="text-end">
                          <div
                            ref={departmentDropdownRef}
                            className="dropdown dropdown-action"
                          >
                            <Link
                              className="action-icon dropdown-toggle show"
                              data-bs-toggle="dropdown"
                              aria-expanded={designationDropdown === designation?.id}
                              onClick={() => toggleDropdown(designation.id)}
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            {designationDropdown === designation?.id && (
                              <div className="dropdown-menu dropdown-menu-right show">
                                <Link
                                  className="dropdown-item"
                                  onClick={()=>ShowEditDesignationModal(designation)}
                                >
                                  <i className="fa-solid fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  onClick={ShowDeleteDesignationModal}
                                >
                                  <i className="fa-regular fa-trash-can m-r-5"></i> Delete
                                </Link>
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
  
          {/* Pagination Controls */}
          {/* <div className="pagination-container mt-3">
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
          </div> */}
        </div>
  
        {/* Modals */}
        {showEditDesignation && (
          <EditDesignationModal ShowEditDesignationModal={ShowEditDesignationModal} selectedDesignation={selectedDesignation} departments ={departments} />
        )}
        {showDeleteDesignationModal && (
          <DeleteDesignationModal ShowDeleteDesignationModal={ShowDeleteDesignationModal} />
        )}
        {showAddDesignation && (
          <AddDesignationModdal ShowAddDesignationModal={ShowAddDesignationModal} departments ={departments} />
        )}
      </div>
    );
  }
  
  export default Designations;


const AddDesignationModdal =({ShowAddDesignationModal,departments})=>{
  console.log("departments",departments)

  const [designationForm , setDesignationForm] = useState({
  
    name: "",
    code :"10202",
    department: null,
    description: ""
})

 const handleOnChange =(e)=>{
    const {name, value} = e.target
    setDesignationForm({
      ...designationForm,
      [name]:value
    })
 }

 const handleSubmit = async(e)=>{
     console.log('designation Form data', designationForm)
     try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.post('http://192.168.1.183:8888/api/designations/', designationForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      ShowAddDesignationModal()
      return response.data; 
    } catch (err) {
      return err
    }
 }

    return (
        <>
      <div className="modal-backdrop fade show"></div>

          <div id="add_designation" className="modal custom-modal d-block" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
    <div className="modal-header">
    <h5 className="modal-title">Add Designation</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowAddDesignationModal}> 
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div className="modal-body">
    <form>
    <div className="input-block mb-3">
    <label className="col-form-label">Designation Name <span className="text-danger">*</span></label>
    <input className="form-control" type="text" name='name' value={designationForm.name}  onChange={handleOnChange} />
    </div>
    <div className="input-block mb-3">
    <label className="col-form-label">Department <span className="text-danger">*</span></label>
    <select className="form-control select" name='department' value={designationForm.department}  onChange={handleOnChange}>
    <option>Select Department</option>
    {departments.map((desg) => (
                          <option key={desg.id} value={desg.id}>
                            {desg.name}
                          </option>
                        ))}
    </select>
    </div>
    <div className="submit-section">
    <button className="btn btn-primary submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
        </>
    )
}

const EditDesignationModal =({ShowEditDesignationModal,selectedDesignation ,departments})=>{
  console.log("selectedDesignation",selectedDesignation)

  const [designationForm , setDesignationForm] = useState({
  
    name: selectedDesignation.name,
    code :"10202",
    department: selectedDesignation.department,
    description: ""
})

 const handleOnChange =(e)=>{
    const {name, value} = e.target
    setDesignationForm({
      ...designationForm,
      [name]:value
    })
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()
     console.log('designation Form data', designationForm)
     try {
      const token = process.env.REACT_APP_TOKEN
  
 
      const response = await axios.put(`http://192.168.1.183:8888/api/designations/${selectedDesignation.id}/`, designationForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      ShowEditDesignationModal()
      return response.data; 
    } catch (err) {
      return err
    }
 }

    return (
        <>
      <div className="modal-backdrop fade show"></div>

            <div id="edit_designation" className="modal custom-modal d-block" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
    <div className="modal-header">
    <h5 className="modal-title">Edit Designation</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ShowEditDesignationModal}>
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div className="modal-body">
    <form>
    <div className="input-block mb-3">
    <label className="col-form-label">Designation Name <span className="text-danger">*</span></label>
    <input className="form-control" value={designationForm.name} name='name' onChange={handleOnChange} type="text" />
    </div>
    <div className="input-block mb-3">
    <label className="col-form-label">Department <span className="text-danger">*</span></label>
    <select className="form-control select" name='department' value={designationForm.department} onChange={handleOnChange}>
    <option>Select Department</option>
    {departments.map((desg) => (
                          <option key={desg.id} value={desg.id}>
                            {desg.name}
                          </option>
                        ))}
    </select>
    </div>
    <div className="submit-section">
    <button className="btn btn-primary submit-btn" onClick={handleSubmit}>Save</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
        </>
    )
}


const DeleteDesignationModal =({ShowDeleteDesignationModal}) =>{
    return (
        <>
      <div className="modal-backdrop fade show"></div>

        <div className="modal custom-modal d-block" id="delete_designation" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
    <div className="modal-body">
    <div className="form-header">
    <h3>Delete Designation</h3>
    <p>Are you sure want to delete?</p>
    </div>
    <div className="modal-btn delete-action">
    <div className="row">
    <div className="col-6">
    <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
    </div>
    <div className="col-6">
    <a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary cancel-btn" onClick={ShowDeleteDesignationModal}>Cancel</a>
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