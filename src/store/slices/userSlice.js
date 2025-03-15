import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit to create a slice of state

// Initial state is an empty array where user data will be stored
const initialState = [];

const userSlice = createSlice({
    name: 'users', // The name of the slice, used for debugging and in the Redux DevTools
    initialState, // The initial state for this slice, an empty array
    reducers: {
        // Reducer function to handle adding a user to the state
        addUser: (state, { payload }) => {
            state.push(payload); // Push the user data (payload) to the state array
        }
    }
});

// Export the addUser action so it can be dispatched in the components
export const { addUser } = userSlice.actions;

// Export the reducer to be used in the store configuration
export default userSlice.reducer;
