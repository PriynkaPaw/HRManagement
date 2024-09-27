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
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              {/* <a href="admin-dashboard.html"> */}
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              {/* </a> */}
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>

                <form >
                  <div className="input-block mb-4">
                    <label className="col-form-label">
                      Email<span className="mandatory">*</span>
                    </label>
                    <input className="form-control" type="text"  name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="input-block mb-4">
                    <label className="col-form-label">
                      Password<span className="mandatory">*</span>
                    </label>
                    <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} />
                  </div>
                  {/* <div className="input-block mb-4">
                    <label className="col-form-label">
                      Repeat Password<span className="mandatory">*</span>
                    </label>
                    <input className="form-control" type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                  </div> */}
                  <div className="input-block mb-4 text-center">
                    <button className="btn btn-primary account-btn" type="submit" onClick={handleSubmit}>
                      Register
                    </button>
                  </div>
                  <div className="account-footer">
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
