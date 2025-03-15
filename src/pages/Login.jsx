// Import necessary dependencies
import React from 'react'; // Importing React to build the component
import LoginForm from '../components/LoginForm'; // Importing the LoginForm component to be used in this component

// Login component definition
const Login = () => {
  return (
    // Wrapping the LoginForm component inside a div to be rendered
    <div>
      {/* Rendering the LoginForm component */}
      <LoginForm />
    </div>
  );
}

// Exporting the Login component for use in other parts of the application
export default Login;
