import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="account-page">
      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-logo">
              {/* <a href="admin-dashboard.html"> */}
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              {/* </a> */}
            </div>

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Register</h3>
                <p class="account-subtitle">Access to our dashboard</p>

                <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard.html">
                  <div class="input-block mb-4">
                    <label class="col-form-label">
                      Email<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-block mb-4">
                    <label class="col-form-label">
                      Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="input-block mb-4">
                    <label class="col-form-label">
                      Repeat Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="input-block mb-4 text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Register
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Already have an account? 
                      {/* <a href="index.html">Login</a> */}
                      <Link to="/login"> Login</Link>
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

export default Register;
