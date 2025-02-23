import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const AppLayout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

  return (
    <div className="app-layout">
      <Navbar />
      <div className="flex">
        {showSidebar && <Sidebar />}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;