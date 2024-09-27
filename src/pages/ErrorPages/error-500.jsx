import React from "react";

const error_500 = () => {
  return (
    <div className="error-page">
      <div className="main-wrapper">
        <div className="error-box">
          <h1>500</h1>
          <h3>
            <i className="fa-solid fa-triangle-exclamation"></i> Oops! Something
            went wrong
          </h3>
          <p>The page you requested was not found.</p>
          <a href="admin-dashboard.html" className="btn btn-custom">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default error_500;
