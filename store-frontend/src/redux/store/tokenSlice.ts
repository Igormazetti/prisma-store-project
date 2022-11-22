import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface TokenState {
  tokenState: string;
}

// Initial state
const initialState: TokenState = {
  tokenState: "",
};

// Actual Slice
export const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    setTokenState(state, action) {
      state.tokenState = action.payload;
    },
  },
});

export const { setTokenState } = tokenSlice.actions;

export const selectTokenState = (state: AppState) => state.token.tokenState;

export default tokenSlice.reducer;
