import axios, { AxiosResponse } from 'axios';

import { GetCharacterDetailResponse, GetCharactersResponse, PostNewFavResponse } from "../../core/models/rickMortyApi.models";


export function getFavList(): Promise<AxiosResponse<PostNewFavResponse>> {
  const token = getUserToken();
  return axios.get('http://localhost:3000/api/fav', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export function mutateFavList(characterId: string): Promise<AxiosResponse<PostNewFavResponse>> {
  const token = getUserToken();
  return axios.post('http://localhost:3000/api/fav', { id: characterId }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export function getCharactersBySearchValue(searchValue = ''): Promise<AxiosResponse<GetCharactersResponse>> {
  return axios.post('https://rickandmortyapi.com/graphql', {
    query: `
    query {
      characters(filter:{ name: "${searchValue}"}){
        results{
          id
          name
          origin{
            name,
            dimension
          }
          image
        }
      }
    }
      `
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export function getCharacterById(characterId = '1'): Promise<AxiosResponse<GetCharacterDetailResponse>> {
  return axios.post('https://rickandmortyapi.com/graphql', {
    query: `
    query {
      character(id: "${characterId}") {
        id
        name
        status
        type
        gender
        origin {
          name
          dimension
        }
        image
      }
    }
      `
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const getUserToken = (): string | null => {
  return window.sessionStorage.getItem('token');
};
