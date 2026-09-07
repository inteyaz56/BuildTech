import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    id: 1,
    name: "Rajesh Kumar",
    role: "owner",
    roleName: "Owner",
    initials: "RK",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    switchUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { switchUser } = userSlice.actions;

export default userSlice.reducer;
