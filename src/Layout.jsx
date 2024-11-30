// import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Dynamic content will render here */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
