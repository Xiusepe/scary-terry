import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../../core/models/rickMortyApi.models';

interface CharactersState {
  isLoadingCharacters: boolean;
  charactersList: Character[];
  error: Error | null;
}

const initialState: CharactersState = {
  isLoadingCharacters: false,
  charactersList: [],
  error: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    requestedCharacters: (state) => {
      state.isLoadingCharacters = true;
    },
    succeedCharacters: (state, action: PayloadAction<Character[]>) => {
      state.isLoadingCharacters = false;
      state.charactersList = action.payload;
    },
    failedCharacters: (state, action: PayloadAction<Error>) => {
      state.isLoadingCharacters = false;
      state.error = action.payload;
    },
  },
});

export const { requestedCharacters, succeedCharacters, failedCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
