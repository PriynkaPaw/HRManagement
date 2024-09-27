import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddHoliday from "./AddHoliday";
import { fetchHolidayList, updateHoliday } from "../../reduxStore/Reducer/adminReducer";
import { format } from "date-fns";

const HolidaysList = () => {
  const holidayDropdownRef = useRef({});
  const holidayListData = useSelector((state) => state.holiday.holidays);
  const [holidayData, setHolidayData] = useState(holidayListData);
  const [holidayDropdown, setHolidayDropdown] = useState(false);
  const [showAddHoliday, setShowAddHoliday] = useState(false);
  const [showEditHoliday, setShowEditHoliday] = useState(false);
  const [showDeleteHoliday, setShowDeleteHoliday] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [holidays ,setHolidays] = useState("")


  // console.log("holidayData: ", holidayData);

  const toggleDropdown = (id) => {
    setHolidayDropdown((prevId) => (prevId === id ? null : id));
  };

  const handleClickOutside = (event) => {
    if (
      holidayDropdownRef.current &&
      !holidayDropdownRef.current.contains(event.target)
    ) {
      setHolidayDropdown(false);
    }
  };
  const ShowAddHolidayModal = () => {
    setShowAddHoliday(!showAddHoliday);
    setHolidayDropdown(null)
  };
  const ShowDeleteHolidayModal = (id) => {
    console.log("id",id)
    setShowDeleteHoliday(!showDeleteHoliday);
    setHolidayDropdown(null)
    setSelectedHoliday(id)

  };

  const ShowEditHolidayModal = (data) => {
    setShowEditHoliday(!showEditHoliday);
    setHolidayDropdown(null)
    setSelectedHoliday(data)


  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHolidayList())
      .then((res) => {
        setHolidays(res.payload)
      });
  }, [dispatch]);
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    setHolidayData(holidayListData);
  }, [holidayData]);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Holidays 2019</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Holidays</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_holiday"
                onClick={ShowAddHolidayModal}
              >
                <i className="fa-solid fa-plus"></i> Add Holiday
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title </th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {holidays &&
                    holidays.map((data, index) => (
                      <tr className="holiday-completed">
                        <td>{data?.id}</td>
                        <td>{data?.name}</td>
                        <td>{data?.date ? format(new Date(data.date), 'd MMMM yyyy') : ''}</td>
                        <td>{data?.Day}</td>
                        <td className="text-end">
                          {/* <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                          <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i className="fa-solid fa-pencil m-r-5"></i> Edit</a>
                          <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa-regular fa-trash-can m-r-5"></i> Delete</a>
                          </div>
                          </div> */}
                          <div
                            ref={holidayDropdownRef}
                            className="dropdown dropdown-action"
                          >
                            <Link
                              className="action-icon dropdown-toggle show"
                              data-bs-toggle="dropdown"
                              aria-expanded={holidayDropdown === data.id}
                              onClick={() => toggleDropdown(data.id)}
                            >
                              <i className="material-icons">more_vert</i>
                            </Link>
                            {/* {holidayDropdown &&  */}
                            {holidayDropdown === data.id && (
                              <div
                                className="dropdown-menu dropdown-menu-right show"
                                style={{
                                  position: "absolute",
                                  inset: "0px 0px auto auto",
                                  margin: 0,
                                  transform: "translate(0px, 34px)",
                                }}
                                data-popper-placement="bottom-end"
                              >
                                <Link
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_holiday"
                                  // onClick={() => ShowEditEmployeeModal(data)}
                                  onClick={()=>ShowEditHolidayModal(data)}
                                >
                                  <i className="fa-solid fa-pencil m-r-5"></i> Edit
                                </Link>
                                <a
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_holiday"
                                  // onClick={() => ShowDeleteEmployeeModal(data)}
                                  onClick={()=>ShowDeleteHolidayModal(data.id)}
                                >
                                  <i className="fa-regular fa-trash-can m-r-5"></i>{" "}
                                  Delete
                                </a>
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
      </div>
      {/* Add Employee Modal================================== */}
      {showAddHoliday && (
        <AddHoliday
          ShowAddHolidayModal={ShowAddHolidayModal}
          holidayData={holidayData}
          actionType={"add"}
        />
      )}
      {showEditHoliday && (
        <EditHoliday
          ShowEditHolidayModal={ShowEditHolidayModal}
          selectedHoliday ={selectedHoliday}
          // actionType={"add"}
        />
      )}
      {
        showDeleteHoliday && (
          <DeleteHoliday ShowDeleteHolidayModal={ShowDeleteHolidayModal}   selectedHoliday ={selectedHoliday} />
        )
      }
     

    
    </div>
  );
};

export default HolidaysList;

const EditHoliday = ({ ShowEditHolidayModal, selectedHoliday }) => {

  const [formData, setFormData] = useState({
    id:selectedHoliday.id,
    name:selectedHoliday.name,
    date:selectedHoliday.date,
    description: selectedHoliday.description
  })

  const dispatch = useDispatch()
  console.log("updated data", formData)

  const handleUpdate =(e)=>{
    e.preventDefault()
     dispatch(updateHoliday(formData))
     ShowEditHolidayModal()
  }
  
  const handleOnChange =(e)=>{

    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })

  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>

    <div className="modal custom-modal d-block" id="edit_holiday" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Holiday</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={ShowEditHolidayModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Holiday Name <span className="text-danger">*</span>
                </label>
                <input className="form-control" value={formData.name} name="name" type="text" onChange={handleOnChange} />
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Holiday Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    value={formData.date}
                    name="date"
                    onChange={handleOnChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="input-block mb-3">
                <label className="col-form-label">
                  Holiday Description <span className="text-danger">*</span>
                </label>
                <input className="form-control" value={formData.description} name="description" type="text" onChange={handleOnChange} />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn" onClick={handleUpdate} >Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const DeleteHoliday =({ShowDeleteHolidayModal,selectedHoliday}) =>{

  console.log("Selected holiday ID", selectedHoliday)
  const dispatch = useDispatch()
  const handleDelete =()=>{
    // dispatch(deleteHoliday(selectedHoliday))
    ShowDeleteHolidayModal()
  }
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal custom-modal d-block" id="delete_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Holiday</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary continue-btn"
                      onClick={handleDelete}
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      data-bs-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                      onClick={ShowDeleteHolidayModal}
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