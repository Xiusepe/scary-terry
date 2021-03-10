import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../core/store/Store';
import Container from '../components/container/Container';
import Grid from '../components/grid/Grid';
import Card from '../components/card/Card';
import { requestCharactersByName } from '../core/thunks/rickMortyApi.thunks';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoadingCharacters, charactersList } = useSelector((appState: RootState) => appState.characters);

  useEffect(() => {
    dispatch(requestCharactersByName(''));
  }, []);

  const onCharacterClicked = (characterId: string) => {
    history.push(`character-detail/${characterId}`);
  };

  return (
    <Container viewContainer>
      {!isLoadingCharacters && charactersList && charactersList.length !== 0 && (
        <Grid container spacing={2} zeroMinWidth>
          {charactersList.map((character) => {
            return (
              <Grid key={character.id} item s={12} m={6} l={4} xl={4}>
                <Card key={character.id} character={character} onCharacterClicked={onCharacterClicked} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default Home;
