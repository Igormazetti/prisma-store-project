import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// Type for our state
export interface UserState {
  userState: string;
}

// Initial state
const initialState: UserState = {
  userState: '',
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserState(state, action) {
      state.userState = action.payload;
    },
  },
});

export const { setUserState } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user.userState;

export default userSlice.reducer;
