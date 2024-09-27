import React from "react";

const Lock_screen = () => {
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <div className="lock-user">
                  <img
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="User_Image"
                    className="rounded-circle"
                  />
                  <h4>John Doe</h4>
                </div>

                <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard.html">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="input-block mb-3 text-center">
                    <button className="btn btn-primary account-btn" type="submit">
                      Enter
                    </button>
                  </div>
                  <div className="account-footer">
                    <p>
                      Sign in as a different user?{" "}
                      <a href="index.html">Login</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock_screen;
