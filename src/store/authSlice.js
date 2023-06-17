import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accessToken: "",
	refreshToken: "",
	loggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		setRefreshToken: (state, action) => {
			state.refreshToken = action.payload;
		},
		setLoggedIn: (state) => {
			state.loggedIn = !state.loggedIn;
		},
	},
});

export const { setAccessToken, setRefreshToken, setLoggedIn } =
	authSlice.actions;
export default authSlice.reducer;
