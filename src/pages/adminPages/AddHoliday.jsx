import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import { addHoliday } from "../../reduxStore/Reducer/adminReducer";
const AddHoliday = ({ holidayData, actionType, ShowAddHolidayModal }) => {
  // State for form inputs
  const [holidayName, setHolidayName] = useState("");
  const [holidayDate, setHolidayDate] = useState("");
  const [description, setDescription] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();
  console.log("holiday Dataa", holidayData)
  // Populate fields if editing an existing holiday
  useEffect(() => {
    if (holidayData) {
      setHolidayName(holidayData.name || "");
      setHolidayDate(holidayData.date || "");
    }
  }, [holidayData]);
  
  const formatDate = (date) => {
    if (!date) return '';
    // const formattedDate = format(value, "yyyy-MM-dd");
    return format(date, 'yyyy-MM-dd');

    // return format(date, 'd MMMM yyyy');
  };

  const getDayFromDate = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    if (!date) return '';
    
    const parsedDate = new Date(date); 
    const dayIndex = parsedDate.getDay();
    return dayNames[dayIndex]; 
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const dayOfWeek = getDayFromDate(holidayDate);

    const formData = { 
      name: holidayName,
      date: holidayDate ? formatDate(holidayDate) : '',
      Day: dayOfWeek ,
      description: description
    };
    console.log("formData", formData);
    dispatch(addHoliday(formData));
    ShowAddHolidayModal();
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className={`modal custom-modal fade ${
          isModalOpen ? "show d-block" : ""
        }`}
        id="add_holiday"
        style={{ display: isModalOpen ? "block" : "none" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {actionType === "add" ? "Add Holiday" : "Update Holiday"}
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  ShowAddHolidayModal();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Holiday Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={holidayName}
                    onChange={(e) => setHolidayName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Holiday Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    {/* <input
                      className="form-control"
                      type="text"
                      value={holidayDate}
                      onChange={(e) => setHolidayDate(e.target.value)}
                      required
                    /> */}
                  <DatePicker
                    selected={holidayDate}
                    onChange={(date) => setHolidayDate(date)}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                  />
                  </div>
                  <div className="input-block mb-3">
                  <label className="col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    {actionType === "add" ? "Submit" : "Update"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHoliday;
