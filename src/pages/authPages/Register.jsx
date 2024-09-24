import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../reduxStore/Reducer/authReducer";

const Register = () => {
const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    // confirm_password :""
  })

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log("Register User Info", formData)
    try {
      // navigate('/login')
      dispatch(registerUser(formData))
    } catch (error) {
      
    }
  }
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

                <form >
                  <div class="input-block mb-4">
                    <label class="col-form-label">
                      Email<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="text"  name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div class="input-block mb-4">
                    <label class="col-form-label">
                      Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" name="password" value={formData.password} onChange={handleChange} />
                  </div>
                  {/* <div class="input-block mb-4">
                    <label class="col-form-label">
                      Repeat Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                  </div> */}
                  <div class="input-block mb-4 text-center">
                    <button class="btn btn-primary account-btn" type="submit" onClick={handleSubmit}>
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
