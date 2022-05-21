export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface InfoEntityApi {
  pages: number;
}

export interface CharactersResponseApi {
  results: CharacterEntityApi[];
  info: InfoEntityApi;
}
