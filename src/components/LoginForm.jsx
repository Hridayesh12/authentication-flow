// Importing necessary dependencies
import React, { useCallback, useState } from "react"; // React and useState hooks for managing state
import { useDispatch, useSelector } from "react-redux"; // useDispatch to dispatch actions and useSelector to access Redux state
import Swal from "sweetalert2"; // SweetAlert2 for showing styled alerts (error messages, etc.)
import { useNavigate } from "react-router-dom"; // useNavigate for programmatically navigating between routes
import { loginUser } from "../store/slices/cUserSlice"; // loginUser action to update Redux store with logged-in user data

const LoginForm = () => {
  // Dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();
  
  // Accessing the list of users from Redux store
  const users = useSelector((state) => state.users);

  // useNavigate hook for navigating between pages
  const navigate = useNavigate();

  // Defining state for email/phone, password, and user verification status
  const [emailPhone, setEmailPhone] = useState(""); // State for storing email/phone input value
  const [password, setPassword] = useState(""); // State for storing password input value
  const [isVerified, setIsVerified] = useState(false); // State for tracking if the user is verified (not used in current logic)

  // handleSubmit function triggered when the user submits the login form
  const handleSubmit = async () => {
    // Checking if the email/phone input is empty
    if (emailPhone.length <= 0) {
      Swal.fire({
        position: "top-middle", // Position of the alert
        icon: "error", // Type of alert (error)
        title: "Email Or Phone is Required", // Title of the alert
        showConfirmButton: false, // Disable confirm button
        timer: 1500, // Time before the alert closes
      });
      // Checking if password input is empty
      if (password.length <= 0) {
        Swal.fire({
          position: "top-middle",
          icon: "error",
          title: "Password is Required", // Title of the alert for empty password
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
    }

    // Initializing flags for user verification and password correctness
    let isUserPresent = false;
    let isPasswordCorrect = false;
    let currentUser = {}; // Object to hold the current user data

    // Iterating over users to check if the entered email/phone matches any existing user
    users?.forEach((user) => {
      if (user.data.phone == emailPhone || user.data.email == emailPhone) {
        isUserPresent = true; // User found in the system

        if (user.data.password === password) {
          isPasswordCorrect = true; // Password matches
          currentUser = user.data; // Storing the user data
        }
      }
    });

    // If no user found with the entered email/phone, show error alert
    if (!isUserPresent) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Please Enter Correct Phone or Email", // Error message for incorrect phone/email
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // If user found but password is incorrect, show error alert
    if (isUserPresent && !isPasswordCorrect) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Password is incorrect", // Error message for incorrect password
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Dispatch the login action to store the logged-in user in Redux
    dispatch(loginUser({ currentUser }));

    // Navigate to the home page after successful login
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2> {/* Login form title */}
        
        {/* Email/Phone input */}
        <div className="mb-4">
          <input
            type="text"
            value={emailPhone} // Bind the input value to emailPhone state
            placeholder="Enter Email or Phone" // Placeholder text
            name="email"
            onChange={(e) => {
              setEmailPhone(e.target.value); // Update the emailPhone state on input change
            }}
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <input
            type="password"
            value={password} // Bind the input value to password state
            placeholder="Enter Password" // Placeholder text
            name="password"
            onChange={(e) => {
              setPassword(e.target.value); // Update the password state on input change
            }}
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button to trigger form submission */}
        <button
          onClick={() => {
            handleSubmit(); // Call handleSubmit when the button is clicked
          }}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>

        {/* Redirect to the register page if the user doesn't have an account */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/register")} // Navigate to the register page on click
            className="text-blue-500 font-semibold hover:underline"
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; // Export the component to be used in other parts of the app
