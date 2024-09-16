import React from 'react';
import Header from '../CommonPages/Header';
import Sidebar from '../CommonPages/Sidebar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
