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

const loadUserFromStorage = (): AuthState => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user');
      if (saved) {
        const user = JSON.parse(saved);
        return {
          user,
          isAuthenticated: true
        };
      }
    }
    return {
      user: null,
      isAuthenticated: false
    };
  };

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
// };

const initialState: AuthState = loadUserFromStorage();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // register: (state, action: PayloadAction<User>) => {
    //   state.user = action.payload;
    //   state.isAuthenticated = true;

    //   localStorage.setItem('user', JSON.stringify(action.payload));

    // },

    register: (state, action: PayloadAction<User>) => {
        const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
        const exists = savedUsers.find((u: User) => u.email === action.payload.email);
      
        if (!exists) {
          const updatedUsers = [...savedUsers, action.payload];
          localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
      
        state.user = null;
        state.isAuthenticated = false;
      },

    // login: (state, action: PayloadAction<{ email: string; password: string }>) => {
    //   if (state.user?.email === action.payload.email && state.user?.password === action.payload.password) {
    //     state.isAuthenticated = true;
    //   }
    // },

    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
      
        const match = users.find(
          (u: User) =>
            u.email === action.payload.email &&
            u.password === action.payload.password
        );
      
        if (match) {
          state.user = match;
          state.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(match));
        }
      },

    // login: (state, action: PayloadAction<{ email: string; password: string }>) => {
    //     const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
      
    //     if (
    //       savedUser.email === action.payload.email &&
    //       savedUser.password === action.payload.password
    //     ) {
    //       state.user = savedUser;
    //       state.isAuthenticated = true;
    //     }
    //   },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem('user');

    }
  },
});

export const { register, login,  logout } = authSlice.actions;
export default authSlice.reducer;
