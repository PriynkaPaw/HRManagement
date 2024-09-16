import React, { useState } from "react";
import ReactPaginate from "react-paginate";
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

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(departments.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentDepartments = departments.slice(offset, offset + itemsPerPage);

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
                <a
                  href="#"
                  class="btn add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_department"
                >
                  <i class="fa-solid fa-plus"></i> Add Department
                </a>
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
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_department"
                              >
                                <i className="fa-solid fa-pencil m-r-5"></i>{" "}
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_department"
                              >
                                <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                Delete
                              </a>
                            </div>
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

        {/* Add Department Modal */}
        <div
          id="add_department"
          className="modal custom-modal fade"
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
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="input-block mb-3">
                    <label className="col-form-label">
                      Department Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Department Modal */}
        <div
          id="edit_department"
          className="modal custom-modal fade"
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
                />
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
        </div>

        {/* Delete Department Modal */}
        <div
          className="modal custom-modal fade"
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
    </div>
  );
};

export default Departments;
