// Importing necessary dependencies
import React, { useCallback, useState } from "react"; // React and hooks (useState, useCallback) for managing state and memoizing functions
import Swal from "sweetalert2"; // Importing SweetAlert2 for displaying styled alert pop-ups
import RegisterForm from "../components/RegisterForm"; // Importing the RegisterForm component, which will handle the registration form

// Register component definition
const Register = () => {

  
  return (
    <>
      {/* Rendering the RegisterForm component inside the Register component */}
      <RegisterForm /> 
    </>
  );
};

// Exporting the Register component so it can be used in other parts of the application (e.g., routing)
export default Register;
