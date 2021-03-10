import axios, { AxiosResponse } from 'axios';

import { FavCharacter, GetCharacterDetailResponse, GetCharactersResponse } from "../../core/models/rickMortyApi.models";


export function getFavList(): Promise<AxiosResponse<FavCharacter[]>> {
  return axios.get('http:/localhost:3000/api/list', {
    headers: {
      'Authorization': `Bearer ${getUserToken}`,
      'Content-Type': 'application/json'
    }
  });
};

export function mutateFavList(characterId: string): Promise<AxiosResponse<FavCharacter[]>> {
  return axios.put('http:/localhost:3000/api/list', { characterId }, {
    headers: {
      'Authorization': `Bearer ${getUserToken}`,
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

const getUserToken = (): string => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDg3Yjc1OTlkZmUzMjAxYzQ4OWY0MSIsImlhdCI6MTYxNTM2MjkzMywiZXhwIjoxNjI0MDAyOTMzfQ.8feMOi_n2W9wLz-PKhiC746p2GtQ_IgzeFSAF2jm4sw';
};
