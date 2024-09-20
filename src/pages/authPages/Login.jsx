import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../reduxStore/Reducer/authReducer";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const [loginFormData, setLoginFormData] = useState({
    email:"",
    password:""
   })

   const handleChange =(e)=>{
      const {name, value} = e.target
      setLoginFormData({
        ...loginFormData,
        [name]: value,
      });
   }

   const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log("loginForm Data", loginFormData)
   try {
    
    dispatch(loginUser(loginFormData))
    navigate('/dasboard')
    
   } catch (error) {
    
   }
   }
  return (
    <div class="account-page">
      <div class="main-wrapper">
        <div class="account-content">
          <Link to="/job-list" class="btn btn-primary apply-btn"> Apply Job</Link>
          <div class="container">
            <div class="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Login</h3>
                <p class="account-subtitle">Access to our dashboard</p>

                <form >
                  <div class="input-block mb-4">
                    <label class="col-form-label">Email Address</label>
                    <input
                      class="form-control"
                      type="text"
                      name="email"
                      value={loginFormData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="input-block mb-4">
                    <div class="row align-items-center">
                      <div class="col">
                        <label class="col-form-label">Password</label>
                      </div>
                      <div class="col-auto">
                        <Link class="text-muted" to="/forgot-password"> Forgot password?</Link>
                      </div>
                    </div>
                    <div class="position-relative">
                      <input
                        class="form-control"
                        type="password"
                        name ="password"
                        value={loginFormData.password}
                        onChange={handleChange}
                      />
                      <span
                        class="fa-solid fa-eye-slash"
                        id="toggle-password"
                      ></span>
                    </div>
                  </div>
                  <div class="input-block mb-4 text-center">
                    <button class="btn btn-primary account-btn" type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Don't have an account yet?
                      {/* <a href="Register.jsx">Register</a> */}
                      <Link to="/signup">Register</Link>
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

export default Login;
