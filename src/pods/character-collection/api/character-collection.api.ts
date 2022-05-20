import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';
import { graphQLClient } from '../../../core/api';

interface GetCharacterCollectionResponse {
    characters: {
      results: CharacterEntityApi[];
    }
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
  characters {
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
}`;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
    query
  );
  return characters.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
