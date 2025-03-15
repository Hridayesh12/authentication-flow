// Importing necessary functions from Redux Toolkit
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // combineReducers to combine multiple reducers, configureStore to set up the Redux store
import userReducer from "./slices/userSlice"; // Reducer for managing user-related actions and state
import cUserReducer from "./slices/cUserSlice"; // Reducer for managing the current logged-in user's state

// Combining multiple reducers into one rootReducer
const rootReducer = combineReducers({
    // users state is handled by the userReducer
    users: userReducer,

    // currentUser state is handled by the cUserReducer
    currentUser: cUserReducer
});

// Configuring the Redux store with the rootReducer
const store = configureStore({
    reducer: rootReducer // Set the rootReducer to manage the state
});

// Exporting the store so it can be used throughout the application
export default store;
