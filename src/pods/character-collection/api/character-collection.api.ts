import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';
import { FilterCharacter } from '../components/search/filter-form.component';
import { graphQLClient } from '../../../core/api';

interface GetCharacterCollectionResponse {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (filter?: FilterCharacter): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query ($name: String, $type: String, $species: String, $status: String, $gender: String){
  characters (filter: {name: $name, type: $type, species: $species, status: $status, gender: $gender}) {
    results {
      id
      name
      status
      species
      gender
      image
    }
  }
}`;
  let variables = {};
  if (filter) variables = { ...filter };
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query, { ...variables });
  return characters.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
