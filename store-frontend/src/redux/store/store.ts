import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { tokenSlice } from './tokenSlice';
import { companySlice } from './companySlice';
import { userSlice } from './userSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      [tokenSlice.name]: tokenSlice.reducer,
      [companySlice.name]: companySlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
