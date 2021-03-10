import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterDetail } from '../../../core/models/rickMortyApi.models';

interface CharacterDetailState {
  isLoadingCharacterDetail: boolean;
  characterDetail: CharacterDetail | null;
  error: Error | null;
}

const initialState: CharacterDetailState = {
  isLoadingCharacterDetail: false,
  characterDetail: null,
  error: null,
};

export const characterSlice = createSlice({
  name: 'character-detail',
  initialState,
  reducers: {
    requestedCharacterDetail: (state) => {
      state.isLoadingCharacterDetail = true;
    },
    succeedCharacterDetail: (state, action: PayloadAction<CharacterDetail>) => {
      state.isLoadingCharacterDetail = false;
      state.characterDetail = action.payload;
    },
    failedCharacterDetail: (state, action: PayloadAction<Error>) => {
      state.isLoadingCharacterDetail = false;
      state.error = action.payload;
    },
  },
});

export const { requestedCharacterDetail, succeedCharacterDetail, failedCharacterDetail } = characterSlice.actions;

export default characterSlice.reducer;
