import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../reduxStore/slices/employeeSlice';
const DeleteEmployee = ({employeeId, ShowDeleteEmployeeModal}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmployee(employeeId));
    ShowDeleteEmployeeModal();
  };
  return (
<>
<div class="modal-backdrop fade show"></div>

<div class="modal custom-modal d-block" id="delete_employee" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Employee</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a
                        onClick={handleDelete}
                        class="btn btn-primary continue-btn"
                      >
                        Delete
                      </a>
                    </div>
                    <div class="col-6" onClick={ShowDeleteEmployeeModal}>
                      <a
                        data-bs-dismiss="modal"
                        class="btn btn-primary cancel-btn"
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
</>  )
}

export default DeleteEmployee