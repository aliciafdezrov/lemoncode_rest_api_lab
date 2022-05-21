import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import { Filter } from './components/search/filter.component';
import { FilterCharacter } from './components/search/filter-form.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onSearch: (filter: FilterCharacter) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete, onSearch } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button variant="contained" color="primary" onClick={onCreateCharacter}>
          Add character
        </Button>

        <Filter onSearch={onSearch}/>
      </div>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
