import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    loginSuccess: (state) => {
      state.value = true;
    },
    logoutSuccess: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
