import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockLocations, mockCharacterCollection } from './character.mock-data';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterApi: Character | null = null;
  try {
    let characterEndpoint = `${BASE_URL}/character/${id}`;
    const response = await fetch(characterEndpoint);

    if (response.ok) {
      characterApi = await response.json();
    }

    return characterApi;
  } catch (ex) {
    console.log(ex);
  }
};

export const getLocations = async (): Promise<Lookup[]> => {
  return mockLocations;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
