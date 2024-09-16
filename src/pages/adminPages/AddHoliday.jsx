import React, { useState, useEffect } from "react";
import { addHoliday } from "../../reduxStore/slices/holidaysSlice";
import { useDispatch } from "react-redux";
const AddHoliday = ({ holidayData, actionType, ShowAddHolidayModal }) => {
  // State for form inputs
  const [holidayName, setHolidayName] = useState("");
  const [holidayDate, setHolidayDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();

  // Populate fields if editing an existing holiday
  useEffect(() => {
    if (holidayData) {
      setHolidayName(holidayData.title || "");
      setHolidayDate(holidayData.holiday_date || "");
    }
  }, [holidayData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: Math.random(),
      title: holidayName,
      holiday_date: holidayDate,
    };

    console.log("formData", formData);
    dispatch(addHoliday(formData));
    ShowAddHolidayModal();
    setIsModalOpen(false);
  };
  return (
    <>
      <div class="modal-backdrop fade show"></div>

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
                    <input
                      className="form-control"
                      type="text"
                      value={holidayDate}
                      onChange={(e) => setHolidayDate(e.target.value)}
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
