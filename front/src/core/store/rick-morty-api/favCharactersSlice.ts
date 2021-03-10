import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavCharacter } from '../../../core/models/rickMortyApi.models';

interface FavCharactersState {
  isLoadingFavCharacters: boolean;
  favCharacterList: FavCharacter[];
  error: Error | null;
}

const initialState: FavCharactersState = {
  isLoadingFavCharacters: false,
  favCharacterList: [],
  error: null,
};

export const favCharactersSlice = createSlice({
  name: 'favCharacters',
  initialState,
  reducers: {
    requestedFav: (state) => {
      state.isLoadingFavCharacters = true;
    },
    succeedFav: (state, action: PayloadAction<FavCharacter[]>) => {
      state.isLoadingFavCharacters = false;
      state.favCharacterList = action.payload;
    },
    failedFav: (state, action: PayloadAction<Error>) => {
      state.isLoadingFavCharacters = false;
      state.error = action.payload;
    },
  },
});

export const { requestedFav, succeedFav, failedFav } = favCharactersSlice.actions;

export default favCharactersSlice.reducer;
