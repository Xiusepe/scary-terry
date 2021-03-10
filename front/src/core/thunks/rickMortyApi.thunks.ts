import { AppThunk } from "../store/Store";

import { failedFav, requestedFav, succeedFav } from "../store/rick-morty-api/favCharactersSlice";
import { failedCharacters, requestedCharacters, succeedCharacters } from "../store/rick-morty-api/charactersSlice";
import { failedCharacterDetail, requestedCharacterDetail, succeedCharacterDetail } from "../store/rick-morty-api/characterDetailSlice";
import { getCharacterById, getCharactersBySearchValue, getFavList, mutateFavList } from "../services/rickMortyApi.services";


export const requestFavList = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(requestedFav());
    const { data } = await getFavList();
    dispatch(succeedFav(data));
  } catch (e) {
    console.error(e);
    dispatch(failedFav(e));
  }
};

export const requestFavMutation = (characterId: string): AppThunk => async (dispatch: any) => {
  try {
    dispatch(requestedFav());
    const { data } = await mutateFavList(characterId);
    dispatch(succeedFav(data));
  } catch (e) {
    console.error(e);
    dispatch(failedFav(e));
  }
};

export const requestCharactersByName = (nameFilter: string): AppThunk => async (dispatch: any) => {
  try {
    dispatch(requestedCharacters());
    const { data } = await getCharactersBySearchValue(nameFilter);
    dispatch(succeedCharacters(data.data.characters.results));
  } catch (e) {
    console.error(e);
    dispatch(failedCharacters(e));
  }
};

export const requestCharacterById = (characterId: string): AppThunk => async (dispatch: any) => {
  try {
    dispatch(requestedCharacterDetail());
    const { data } = await getCharacterById(characterId);
    dispatch(succeedCharacterDetail(data.data.character));
  } catch (e) {
    console.error(e);
    dispatch(failedCharacterDetail(e));
  }
};