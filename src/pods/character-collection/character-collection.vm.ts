import { Character } from '../character/character.vm';

export interface CharacterEntityVm {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterCollectionVm {
  characters: CharacterEntityVm[];
  pages: number;
  page: number;
}

export const createEmptyCharacterCollection = (): CharacterCollectionVm => ({
  characters: [],
  pages: 0,
  page: 1,
});
