import React from "react";
import { Link } from "react-router-dom";

const Forgot_password = () => {
  return (
    <div class="account-page">
      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-logo">
              <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
            </div>

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Forgot Password?</h3>
                <p class="account-subtitle">
                  Enter your email to get a password reset link
                </p>

                <form>
                  <div class="input-block mb-4">
                    <label class="col-form-label">Email Address</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-block mb-4 text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Reset Password
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Remember your password? <Link to="/login">Login</Link>
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

export default Forgot_password;
