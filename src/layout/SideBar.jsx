import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/slices/cUserSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-blue-600 text-white h-screen w-64 p-4 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="flex items-center mb-8">
          <span className="text-2xl font-semibold">Dashboard</span>
        </div>
        <div className="space-y-6">
          <Link
            to="/"
            className="block py-2 px-4 rounded-md hover:bg-blue-500"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 rounded-md hover:bg-blue-500"
          >
            Profile
          </Link>
          <Link
            to="/"
            className="block py-2 px-4 rounded-md hover:bg-blue-500"
          >
            About
          </Link>
        </div>
       
      </div>

     
    </div>
  );
};

export default Sidebar;
