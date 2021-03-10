import React from 'react';
import clsx from 'clsx';
import './Card.scss';

import Grid from '../grid/Grid';
import LikeWidget from '../like-widget/LikeWidget';
import { Character } from '~core/models/rickMortyApi.models';

export interface CardProps {
  /**
   * The Data that will be rendered in the card. Required
   *  @type {Character}
   */
  character: Character;
  /**
   * Callback por card click or enter events
   * @param characterId string
   */
  onCharacterClicked: (characterId: string) => void;
  className?: string;
}

const Card = (props: CardProps) => {
  const { character, className, onCharacterClicked } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(['Card', className])}
      onClick={() => onCharacterClicked(character.id)}
      onKeyPress={(e) => {
        if (e.key === '13') {
          onCharacterClicked(character.id);
        }
      }}
    >
      <Grid container maxHeight direction="column">
        <Grid className="character-img-container" item s={7} m={7} l={7}>
          <img src={character.image} alt={character.name} loading={'lazy'} />
        </Grid>

        <Grid className="description-container" item s={5} m={5} l={5} xl={5} container>
          <Grid className="bold-text" item s={12} m={12} l={12} xl={12}>
            <b>{character && character.name}</b>
          </Grid>
          <Grid className="secondary-text" item s={12} m={12} l={12} xl={12}>
            <p>{character && character.origin.name + ' - ' + character.origin.dimension}</p>
          </Grid>
          <Grid className="like-widget" item s={12} m={12} l={12} xl={12} container justifyContent="flex-end">
            <LikeWidget characterId={character.id} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
