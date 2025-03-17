import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit to create a slice of state

// Initial state containing an empty object for currentUser
const initialState = {
    currentUser: {} // Default value for currentUser is an empty object
};

const cUserSlice = createSlice({
    name: 'currentUser', // The name of the slice used for debugging and in Redux DevTools
    initialState, // The initial state for this slice
    reducers: {
        // Reducer for logging in a user. It sets the currentUser from the payload
        loginUser: (state, { payload }) => {
            console.log(state); // Logs the current state before the change
            console.log(payload.currentUser); // Logs the user data that will be set to currentUser
            state.currentUser = payload.currentUser; // Update the currentUser state with the user data from payload
        },
        // Reducer for logging out a user. It clears the currentUser object
        logoutUser: (state) => {
            console.log(state); // Logs the current state before the change
            state.currentUser = {}; // Reset the currentUser state to an empty object
        }
    }
});

// Export the loginUser and logoutUser actions so they can be dispatched in the components
export const { loginUser, logoutUser } = cUserSlice.actions;

// Export the reducer to be used in the store configuration
export default cUserSlice.reducer;
