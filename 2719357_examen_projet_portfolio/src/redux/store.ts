import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testimonialReducer from './slices/testimonialSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
