import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../../core/models/userSession.models';

interface UserSessionState {
  isLoadingUserSession: boolean;
  user: User | null;
  error: string | null;
}

const initialState: UserSessionState = {
  isLoadingUserSession: false,
  user: null,
  error: null,
};

export const userSessionSlice = createSlice({
  name: 'user-session',
  initialState,
  reducers: {
    requested: (state) => {
      state.isLoadingUserSession = true;
    },
    succeed: (state, action: PayloadAction<User>) => {
      state.isLoadingUserSession = false;
      state.user = action.payload;
      state.error = null;
    },
    failed: (state, action: PayloadAction<string>) => {
      state.isLoadingUserSession = false;
      state.error = action.payload;
    },
  },
});

export const { requested, succeed, failed } = userSessionSlice.actions;

export default userSessionSlice.reducer;
