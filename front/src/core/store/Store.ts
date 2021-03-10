/* eslint-disable no-undef */
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import userSessionReducer from "./user-session/userSessionSlice";
import charactersReducer from "./rick-morty-api/charactersSlice";
import favCharacterReducer from "./rick-morty-api/favCharactersSlice";

export const store = configureStore({
  reducer: { characters: charactersReducer, user: userSessionReducer, favCharacters: favCharacterReducer, },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;