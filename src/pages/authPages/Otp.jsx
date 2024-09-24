import React from "react";

const Otp = () => {
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
                <h3 class="account-title">OTP</h3>
                <p class="account-subtitle">Verification your account</p>

                <form action="https://smarthr.dreamstechnologies.com/html/template/admin-dashboard.html">
                  <div class="otp-wrap">
                    <input
                      type="text"
                      placeholder="0"
                      maxlength="1"
                      class="otp-input"
                    />
                    <input
                      type="text"
                      placeholder="0"
                      maxlength="1"
                      class="otp-input"
                    />
                    <input
                      type="text"
                      placeholder="0"
                      maxlength="1"
                      class="otp-input"
                    />
                    <input
                      type="text"
                      placeholder="0"
                      maxlength="1"
                      class="otp-input"
                    />
                  </div>
                  <div class="input-block mb-4 text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Enter
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Not yet received?{" "}
                      <a href="javascript:void(0);">Resend OTP</a>
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

export default Otp;
