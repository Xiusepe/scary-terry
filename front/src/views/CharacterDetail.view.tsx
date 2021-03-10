import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../core/store/Store';
import { requestCharacterById } from '../core/thunks/rickMortyApi.thunks';
import Container from '../components/container/Container';
import Grid from '../components/grid/Grid';
import LikeWidget from '../components/like-widget/LikeWidget';

function CharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();

  const dispatch = useDispatch();
  const { isLoadingCharacterDetail, characterDetail } = useSelector(
    (appState: RootState) => appState.character
  );

  useEffect(() => {
    console.log(characterId);
    dispatch(requestCharacterById(characterId));
  }, [characterId]);

  return (
    <Container viewContainer>
      {!isLoadingCharacterDetail && characterDetail && (
        <>
          <h1>{characterDetail.name}:</h1>
          <Grid container direction="column">
            <Grid item>
              <Grid container>
                <Grid item s={12} m={6} l={6} xl={6}>
                  <img src={characterDetail.image} alt={characterDetail.name}></img>
                </Grid>
                <Grid item s={12} m={6} l={6} xl={6}>
                  <LikeWidget characterId={characterDetail.id} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item s={12} m={12} l={12} xl={12}>
                <p>
                  <b>Name:</b> {characterDetail.name}
                </p>
              </Grid>
              <Grid item s={12} m={12} l={12} xl={12}>
                <p>
                  <b>Gender:</b> {characterDetail.gender}
                </p>
              </Grid>
              <Grid item s={12} m={12} l={12} xl={12}>
                <p>
                  <b>Status:</b>
                  {characterDetail.status}
                </p>
              </Grid>
              <Grid item s={12} m={12} l={12} xl={12}>
                <p>
                  <b>Origin name:</b> {characterDetail.origin.name}
                </p>
              </Grid>
              <Grid item s={12} m={12} l={12} xl={12}>
                <p>
                  <b>Origin dimension:</b> {characterDetail.origin.dimension}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default CharacterDetail;
