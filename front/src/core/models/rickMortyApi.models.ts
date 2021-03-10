export interface FavCharacter {
  id: string,
  _id: string;
}

export interface Origin {
  name: string;
  dimension: string;
}

export interface Character {
  id: string;
  name: string;
  origin: Origin;
  image: string;
}

export interface CharacterDetail {
  id: string;
  name: string;
  type: string;
  status: string;
  gender: string;
  origin: Origin;
  image: string;
}

export interface PostNewFavResponse {
  data: FavCharacter[];
}

export interface GetCharactersResponse {
  data: { characters: { results: Character[]; }; };
}

export interface GetCharacterDetailResponse {
  data: { character: CharacterDetail; };
}