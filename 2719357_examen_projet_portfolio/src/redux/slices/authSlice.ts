import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  nom: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      if (state.user?.email === action.payload.email && state.user?.password === action.payload.password) {
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
