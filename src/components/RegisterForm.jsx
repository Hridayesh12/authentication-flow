import React, { useState } from "react"; // Import React and useState for state management
import { useDispatch } from "react-redux"; // Import useDispatch for dispatching Redux actions
import Swal from "sweetalert2"; // Import SweetAlert2 for showing alert messages
import { addUser } from "../store/slices/userSlice"; // Import action to add user data in Redux store
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation after form submission

// Function to gather data (could be used for async operations like API calls)
const gatherData = async (info) => {
  return info; // Returning the provided information
};

const RegisterForm = () => {
  // Declaring state variables to manage form data
  const dispatch = useDispatch(); // Redux dispatch to trigger actions
  const navigate = useNavigate(); // Hook to navigate between routes after form submission
  const [name, setName] = useState(""); // State for name input
  const [age, setAge] = useState(null); // State for age input
  const [gender, setGender] = useState(""); // State for gender selection
  const [phone, setPhone] = useState(null); // State for phone number input
  const [phoneError, setPhoneError] = useState(null); // State for phone error validation
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [isVerified, setIsVerified] = useState(false); // State for checkbox verification
  const [isRegistering, setIsRegistering] = useState(false); // State for managing form submission loading state

  // Handle phone input change and validate the phone length
  const handlePhoneChange = (e) => {
    if (e.target.value.length <= 10) {
      setPhone(e.target.value); // Update phone state
    }
    // Display error if phone number length is less than 10 digits
    if (e.target.value.length < 10) {
      setPhoneError("At least 10 digits required");
    } else {
      setPhoneError(null); // Remove error if length is sufficient
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validation checks for all the required fields
    if (name.length <= 0) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Name Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if name is empty
    }
    if (!age) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Age Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if age is empty
    }
    if (!gender) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Gender Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if gender is not selected
    }
    if (!phone) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Phone Number Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if phone is empty
    }
    if (email.length <= 0) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Email Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if email is empty
    }
    if (password.length <= 0) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Password Required",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if password is empty
    }
    if (!isVerified) {
      Swal.fire({
        position: "top-middle",
        icon: "error",
        title: "Please Verify All The Information Is Correct",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop submission if information is not verified
    }

    // Gather all form data for submission
    const data = await gatherData({
      name,
      age,
      email,
      password,
      gender,
      phone,
      isVerified,
    });

    // Set isRegistering to true to disable the submit button and show loading
    setIsRegistering(true);
    
    // Dispatch the action to add the user to the Redux store
    dispatch(addUser({ data }));

    // After 2 seconds, stop the loading and navigate to the login page
    setTimeout(() => {
      setIsRegistering(false); // Stop the loading state
      navigate("/login"); // Redirect to login page
    }, 2000);
  };

  return (
    // Main container for the register form
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        
        {/* Name input */}
        <div className="mb-4">
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            name="name"
            onChange={(e) => setName(e.target.value)} // Update name state
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Age input */}
        <div className="mb-4">
          <input
            type="number"
            value={age}
            placeholder="Enter Age"
            name="age"
            onChange={(e) => setAge(e.target.value)} // Update age state
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender radio buttons */}
        <div className="mb-4">
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                onClick={(e) => setGender(e.target.value)} // Update gender state
                className="h-5 w-5 text-blue-500 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-lg">Male</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={(e) => setGender(e.target.value)} // Update gender state
                className="h-5 w-5 text-pink-500 border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500"
              />
              <span className="text-lg">Female</span>
            </label>
          </div>
        </div>

        {/* Phone number input */}
        <div className="mb-4">
          <input
            type="number"
            value={phone}
            placeholder="Enter Phone Number"
            name="phone"
            onChange={handlePhoneChange} // Handle phone number validation
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>} {/* Display phone error */}
        </div>
        
        {/* Email input */}
        <div className="mb-4">
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)} // Update password state
            className="px-4 py-2 text-lg border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox for verifying the details */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isVerified}
              onChange={() => setIsVerified(!isVerified)} // Toggle verification state
              className="h-5 w-5 text-blue-500 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
            />
            <label className="text-lg">Verify All The Details Are Correct</label>
          </div>
        </div>

        {/* Submit button or loading state */}
        <div className="flex justify-between mt-6">
         {isRegistering ? 
           <button
             disabled
             className="w-full py-2 px-4 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed opacity-60 focus:outline-none"
           >
             Submitting...
           </button> :
           <button
             onClick={handleSubmit} // Trigger form submission
             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
           >
             Submit
           </button>
         }
        </div>

        {/* Redirect to login page if already have an account */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/login")} // Navigate to login page
            className="text-blue-500 font-semibold hover:underline"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm; // Export the RegisterForm component
