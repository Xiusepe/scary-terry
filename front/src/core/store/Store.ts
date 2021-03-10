/* eslint-disable no-undef */
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';

import userSessionReducer from "./user-session/userSessionSlice";
import characterDetailReducer from "./rick-morty-api/characterDetailSlice";
import charactersReducer from "./rick-morty-api/charactersSlice";
import favCharacterReducer from "./rick-morty-api/favCharactersSlice";

export const store = configureStore({
  reducer: { user: userSessionReducer, character: characterDetailReducer, characters: charactersReducer, favCharacters: favCharacterReducer, },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;