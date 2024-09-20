import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedRoutes from './pages/routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './pages/routes/UnauthenticatedRoutes';

const App = () => {
  const isAuthenticated = true;

  return (
    <Router>
      {/* {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />} */}
      <AuthenticatedRoutes />
      <UnauthenticatedRoutes />
    </Router>
  );
};

export default App;
