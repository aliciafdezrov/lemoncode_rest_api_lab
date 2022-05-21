import React from 'react';
import { FilterCharacter } from '../../pods/character-collection/api';

interface CharacterCollectionContextModel {
  characterFilter: FilterCharacter;
  setCharacterFilter: (characterFilter: FilterCharacter) => void;
}

export const initialFilter: FilterCharacter = {
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
};

export const CharacterCollectionContext = React.createContext<CharacterCollectionContextModel>({
  characterFilter: initialFilter,
  setCharacterFilter: () => {
    console.log('Did you forgot to add CharacterCollectionContext on top of your app?');
  }
});

export const CharacterCollectionProvider: React.FC = props => {
  const {children} = props;
  const [characterFilter, setCharacterFilter] = React.useState<FilterCharacter>(initialFilter);

  return (
    <CharacterCollectionContext.Provider
      value={{
        characterFilter,
        setCharacterFilter,
      }}>
      {children}
    </CharacterCollectionContext.Provider>
  );
};
