import React, { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Departments = () => {
  const [departments] = useState([
    { id: 1, name: "Web Development" },
    { id: 2, name: "Application Development" },
    { id: 3, name: "IT Management" },
    { id: 4, name: "Accounts Management" },
    { id: 5, name: "Support Management" },
    { id: 6, name: "Marketing" },
  ]);
  const [departmentDropdown, setDepartmentDropdown] = useState(null); 
  const [showEditDepartment, setShowEditDepartment] = useState(false);
  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const [showDeleteDepartmentModal, setDeleteDepartmentModal] = useState(false);
  const departmentList = useSelector((state)=> state.department.departments)

  console.log("department List", departmentList)
  const toggleDropdown = (id) => {
    setDepartmentDropdown((prevId) => (prevId === id ? null : id));
  };
  const ShowEditDepartmentModal = () => {setShowEditDepartment(!showEditDepartment);
    setDepartmentDropdown(null); 
  }
  const ShowAddDepartmentModal = () =>{ setShowAddDepartment(!showAddDepartment);
    setDepartmentDropdown(null); 
  }
  const ShowDeleteDepartmentModal = () => {setDeleteDepartmentModal(!showDeleteDepartmentModal);  setDepartmentDropdown(null); }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(departmentList.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const departmentDropdownRef = useRef(null);
  const offset = currentPage * itemsPerPage;
  const currentDepartments = departmentList.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Department</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Department</li>
                </ul>
              </div>
              <div class="col-auto float-end ms-auto">
                <Link
                  href="#"
                  class="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_department"
                  onClick={ShowAddDepartmentModal}
                >
                  <i class="fa-solid fa-plus"></i> Add Department
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div>
                <table className="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th className="width-thirty">#</th>
                      <th>Department Name</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDepartments.map((department, index) => (
                      <tr key={department.id}>
                        <td>{department.id}</td>
                        <td>{department.name}</td>
                        <td className="text-end">
                        <div
                              ref={departmentDropdownRef}
                              className="dropdown dropdown-action"
                            >
                              <Link
                                className="action-icon dropdown-toggle show"
                                data-bs-toggle="dropdown"
                                aria-expanded={departmentDropdown === department.id}
                                onClick={() => toggleDropdown(department.id)}
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              {departmentDropdown === department.id && (
                                <div className="dropdown-menu dropdown-menu-right show">
                                  <Link
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_department"
                                    onClick={ShowEditDepartmentModal}
                                  >
                                    <i className="fa-solid fa-pencil m-r-5"></i>{" "}
                                    Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_approve"
                                    onClick={ShowDeleteDepartmentModal}
                                  >
                                    <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                    Delete
                                  </Link>
                                </div>
                              )}
                            </div>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center mt-3"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>

       {
        showEditDepartment && <EditDepartmentModal ShowEditDepartmentModal={ShowEditDepartmentModal} />
       }
       {
        showDeleteDepartmentModal && <DeleteDepartmentModal ShowDeleteDepartmentModal={ShowDeleteDepartmentModal} />
       }
       {
        showAddDepartment && <AddDepartmentModal ShowAddDepartmentModal={ShowAddDepartmentModal} />
       }

        {/* Edit Department Modal */}
       

      
      </div>
    </div>
  );
};

export default Departments;


const AddDepartmentModal =({ShowAddDepartmentModal})=>{
  const [departmentData, setDepartmentData] = useState({
    id:Math.random(),
    name:""
  })

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("department name",departmentData )
    ShowAddDepartmentModal()
  }

  return (
    <>
      <div class="modal-backdrop fade show"></div>

      <div
          id="add_department"
          className="modal custom-modal d-block"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Department</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={ShowAddDepartmentModal}
                >
                <span aria-hidden="true">&times;</span>

                  </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Department Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" name="name" value={departmentData.name} onChange={(e)=>setDepartmentData(e.target.value)} type="text" />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></>
  )
}

const EditDepartmentModal =({ShowEditDepartmentModal}) =>{
  return (
    <>
      <div class="modal-backdrop fade show"></div>

     <div
          id="edit_department"
          className="modal custom-modal d-block "
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Department</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={ShowEditDepartmentModal}
                >
                <span aria-hidden="true">&times;</span>

                  </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Department Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="IT Management"
                    />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div></>
  )
}

const DeleteDepartmentModal =({ShowDeleteDepartmentModal}) =>{
  return (
    <>
      {/* Delete Department Modal */}
      <div class="modal-backdrop fade show"></div>

      <div
          className="modal custom-modal d-block"
          id="delete_department"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Department</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="#" className="btn btn-primary continue-btn">
                        Delete
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary cancel-btn"
                        onClick={ShowDeleteDepartmentModal}
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></>
  )
}