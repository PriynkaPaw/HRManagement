import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedRoutes from './pages/routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './pages/routes/UnauthenticatedRoutes';
import RouterApp from './router/router';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLogin") === "true";
//     setIsAuthenticated(loginStatus);
//   }, []); 
// console.log("app running");
//   console.log("isAuthenticated", isAuthenticated);

  return (
    // <Router>
    //   {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    // </Router>
    <div className="App">
           <RouterApp />
        </div>
  );
};

export default App;
