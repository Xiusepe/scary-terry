export interface FavCharacter {
  id: string,
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
  origin: string;
  image: string;
}

export interface GetCharactersResponse {
  data: { characters: { results: Character[]; }; };

}