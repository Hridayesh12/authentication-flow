// Import necessary dependencies
import logo from './logo.svg'; // Importing the logo image
import './App.css'; // Importing the App CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router for navigation
import HomePage from './pages/HomePage'; // Importing the HomePage component
import Login from './pages/Login'; // Importing the Login component
import Register from './pages/Register'; // Importing the Register component
import { Provider } from 'react-redux'; // Importing the Provider component for Redux
import store from './store/store'; // Importing the Redux store
import Layout from './layout/Layout';

function App() {
  return (
    // Wrapping the app in the Redux Provider to give components access to the store
    <Provider store={store}>
      {/* Setting up Router to enable routing in the app */}
      <Router>
        {/* Defining the routes for the application */}
        <Routes>
          {/* HomePage route, this will render when user visits the root '/' path */}
          <Route path='/' element={<Layout><HomePage /></Layout>} />

          {/* Login route, this will render the Login component when the user visits '/login' */}
          <Route path='/login' element={<Login />} />

          {/* Register route, this will render the Register component when the user visits '/register' */}
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App; // Exporting the App component for use in other parts of the application
