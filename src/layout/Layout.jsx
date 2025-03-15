import React, { useState } from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-blue-600 text-white w-64 p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Button to toggle sidebar visibility (mobile only) */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-blue-600 p-2 mb-4"
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        {/* Main content (children will be rendered here) */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
