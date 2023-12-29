import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { commonInitialState } from "./initialState";

export const commonSlice = createSlice({
  name: "common",
  initialState: commonInitialState,
  reducers: {
    handleSetActiveMenu(state, action: PayloadAction<number>) {
      state.activeMenu = action.payload;
    },
  },
});
