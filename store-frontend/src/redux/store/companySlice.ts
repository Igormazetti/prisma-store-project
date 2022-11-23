import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// Type for our state
export interface CompanyState {
  companyState: {
    id: number;
    name: string;
  };
}

// Initial state
const initialState: CompanyState = {
  companyState: {
    id: 0,
    name: '',
  },
};

// Actual Slice
export const companySlice = createSlice({
  name: 'company',
  initialState: initialState,
  reducers: {
    setCompanyState(state, action) {
      state.companyState = action.payload;
    },
  },
});

export const { setCompanyState } = companySlice.actions;

export const selectCompanyState = (state: AppState) =>
  state.company.companyState;

export default companySlice.reducer;
