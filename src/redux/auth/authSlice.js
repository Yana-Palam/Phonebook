import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
