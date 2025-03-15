// Importing necessary dependencies
import React, { useEffect, useState } from "react"; // React and useState, useEffect hooks for handling state and lifecycle
import { useDispatch, useSelector } from "react-redux"; // For accessing Redux state and dispatching actions
import { useNavigate } from "react-router-dom"; // For navigating between routes programmatically
import { logoutUser } from "../store/slices/cUserSlice"; // Importing the logout action from Redux slice

const HomePage = () => {
  // Defining the profile picture URL
  const profilePic =
    "https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart.jpg";

  // Initializing necessary hooks
  const navigate = useNavigate(); // Hook to navigate between routes
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [cUser, setCUser] = useState({}); // Local state to store the current user
  const currentUser = useSelector((state) => state.currentUser.currentUser); // Accessing currentUser from the Redux store
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State to track the logout process

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggingOut(true); // Set logout state to true when logout is initiated

    setTimeout(() => {
      setIsLoggingOut(false); // Reset the logout state after a delay (simulate logout)
      dispatch(logoutUser()); // Dispatch the logout action to Redux store
    }, 2000); // Simulating logout delay of 2 seconds
  };

  // useEffect hook to redirect user if not logged in and set the current user data
  useEffect(() => {
    if (!currentUser.name) {
      navigate("/login"); // If no user name found in the current user, redirect to login
    }
    setCUser(currentUser); // Set the current user state
  }, [currentUser, navigate]); // Re-run the effect when currentUser or navigate changes

  return (
    <>
      {/* Container for the HomePage */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="flex flex-col items-center">
            {/* Profile picture display */}
            <img
              src={profilePic} // Using the profile picture URL
              alt="Profile" // Alt text for accessibility
              className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" // Tailwind CSS for styling the profile picture
            />
            {/* Display user greeting */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Hello, {cUser.name} {/* Displaying the user's name */}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome back! You're successfully logged in. {/* Message indicating successful login */}
            </p>
            {/* Conditional rendering of the logout button or loading state */}
            {isLoggingOut ? (
              <button
                disabled
                className="w-full py-2 px-4 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed opacity-60 focus:outline-none"
              >
                Logging Out... {/* Show while logging out */}
              </button>
            ) : (
              <button
                onClick={handleLogout} // Trigger logout action when clicked
                className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Logout {/* Button text */}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage; // Exporting the component for use elsewhere in the app
