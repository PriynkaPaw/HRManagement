import React from "react";

const error_500 = () => {
  return (
    <div class="error-page">
      <div class="main-wrapper">
        <div class="error-box">
          <h1>500</h1>
          <h3>
            <i class="fa-solid fa-triangle-exclamation"></i> Oops! Something
            went wrong
          </h3>
          <p>The page you requested was not found.</p>
          <a href="admin-dashboard.html" class="btn btn-custom">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default error_500;
