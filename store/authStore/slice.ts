import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authInitialState } from "./initialState";
import { handleLoginAsync, handleLogoutAsync } from "./thunks";
import { IResponseLogin } from "../../interface";

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    handleUserData(state, action: PayloadAction<IResponseLogin>) {
      if (action.payload) {
        state.user.first_name = action.payload.first_name;
        state.user.last_name = action.payload.last_name;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLoginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        } else {
          state.error = "Usuário e/ou senha incorreto(s)";
          state.loading = false;
        }
      })
      .addCase(handleLoginAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(handleLogoutAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(handleLogoutAsync.pending, (state) => {
        state.loading = true;
      });
  },
});
