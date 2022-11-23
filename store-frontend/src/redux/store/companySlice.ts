import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// Type for our state
export interface CompanyState {
  companyStateId: number;
}

// Initial state
const initialState: CompanyState = {
  companyStateId: 0,
};

// Actual Slice
export const companySlice = createSlice({
  name: 'companyId',
  initialState: initialState,
  reducers: {
    setCompanyState(state, action) {
      state.companyStateId = action.payload;
    },
  },
});

export const { setCompanyState } = companySlice.actions;

export const selectCompanyState = (state: AppState) =>
  state.companyId.companyStateId;

export default companySlice.reducer;
