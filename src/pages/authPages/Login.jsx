import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../reduxStore/Reducer/authReducer";
import { storeTokensInSession } from "../../utils/Utils";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const [loginFormData, setLoginFormData] = useState({
    email:"",
    password:""
   })
   const [showPassword, setShowPassword] = useState(false);
   const [errors, setErrors] = useState({ email: "", password: "" });

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
     const { name, value } = e.target;
     setLoginFormData({
       ...loginFormData,
       [name]: value,
     });
   };
   
   const validateForm = () => {
     let valid = true;
     const newErrors = { email: "", password: "" };
   
     if (!loginFormData.email) {
       newErrors.email = "Email is required";
       valid = false;
     } 
     else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
       newErrors.email = "Please enter a valid email";
       valid = false;                                
     }
   
     if (!loginFormData.password) {
       newErrors.password = "Password is required";
       valid = false;
     }
   
     setErrors(newErrors);
     return valid;
   };
   
  //  const handleSubmit2 = async (e) => {
	// 	e.preventDefault();
	// 	const data = validate(formData);
	// 	if (data) {
	// 		setLoading(true);
	// 		dispatch(postLogin(formData))
	// 			.then((response) => {
	// 				const cleanedResponse = { response: response.payload }
	// 				const Authentication = cleanedResponse;
	// 				storeTokensInSession(Authentication);
	// 				storeUserInfo(Authentication);
	// 				setLoading(false);
	// 			})
	// 			.catch(() => {
	// 				setLoading(false);
	// 			});
	// 		rememberMeHandler();
	// 	}
	// };
   const handleSubmit = async (e) => {
     e.preventDefault();
     console.log("loginFormData:", loginFormData);
   
     if (validateForm()) {
       try {
      //    dispatch(loginUser(loginFormData)).then((response) => {
      //     console.log("response", response)
			// 		const cleanedResponse = { response: response.payload }
			// 		const Authentication = cleanedResponse;
      //     console.log('Authentication: ', Authentication);
			// 		storeTokensInSession(Authentication);
      //     navigate('/dashboard')
			// 	}
      // )
			// 	.catch(() => {
			// 	});
   
        //  localStorage.setItem('isLogin', true);
   
        //  const Login = localStorage.getItem("isLogin") === "true";
        //  if (Login) {            
        //    navigate('/dashboard');
        //  }                       
       } catch (error) {
         console.error("Login failed", error);
       }
     }
   };
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <Link to="/job-list" className="btn btn-primary apply-btn"> Apply Job</Link>
          <div className="container">
            <div className="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>

                <form >
                  <div className="input-block mb-4">
                    <label className="col-form-label">Email Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={loginFormData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                  </div>
                  <div className="input-block mb-4">
                    <div className="row align-items-center">
                      <div className="col">
                        <label className="col-form-label">Password</label>
                      </div>
                      <div className="col-auto">
                        <Link className="text-muted" to="/forgot-password"> Forgot password?</Link>
                      </div>
                    </div>
                    <div className="position-relative">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        name ="password"
                        value={loginFormData.password}
                        onChange={handleChange}
                        required
                      />
                      {/* <span
                        className="fa-solid fa-eye-slash"
                        id="toggle-password"
                      ></span> */}
                        <span
        className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
        id="toggle-password"
        onClick={togglePasswordVisibility}
       
      ></span>
                      {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                  </div>
                  <div className="input-block mb-4 text-center">
                    <button className="btn btn-primary account-btn" type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                  <div className="account-footer">
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
