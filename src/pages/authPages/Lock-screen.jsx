import React from "react";
import { Link } from "react-router-dom";

const Lock_screen = () => {
  return (
    <div class="account-page">
      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div class="account-box">
              <div class="account-wrapper">
                <div class="lock-user">
                  <img
                    src="assets/img/profiles/avatar-02.jpg"
                    alt="User Image"
                    class="rounded-circle"
                  />
                  <h4>John Doe</h4>
                </div>

                <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard.html">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Password</label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="input-block mb-3 text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Enter
                    </button>
                  </div>
                  <div class="account-footer">
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
