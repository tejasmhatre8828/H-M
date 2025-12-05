import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { user: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            // console.log(action.payload, "payload")
        },
        logout: (state) => {
            state.user = null;
        },
        updateUser(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { login, logout, updateUser } = counterSlice.actions;

export const store = configureStore({
    reducer: { counter: counterSlice.reducer },
})
