// import { Navigate, Outlet } from "react-router-dom";
// import { RouterPathName } from "./config";
// import Header from "../pages/CommonPages/Header";
// import React, { useEffect, useState } from "react";
// import Sidebar from "../pages/CommonPages/Sidebar";

// const ProtectedRoute = () => {
//   const token = sessionStorage.getItem("authAccessToken");
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     return () => setIsMounted(false);
//   }, []);

//   if (!isMounted) return null;

//   console.log('token: ', token);
//   return token ?
//     <React.Fragment>
//       <Header />
//       <Sidebar />
//       <Outlet />
//     </React.Fragment> :
//     <Navigate to={RouterPathName.login} replace />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { RouterPathName } from "./config";
import Header from "../pages/CommonPages/Header";
import React, { useEffect, useState } from "react";
import Sidebar from "../pages/CommonPages/Sidebar";

const ProtectedRoute = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const authToken = sessionStorage.getItem("authAccessToken");
    console.log('authToken: ', authToken);

    if(authToken==="undefined"){
      console.log('undefined: ');

      setToken(false)
    }
    else{

      setToken(authToken);
    }

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;
console.log("token",token);
  return token ? (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </React.Fragment>
  ) : (
    <Navigate to={RouterPathName.login} replace />
  );
};

export default ProtectedRoute;
