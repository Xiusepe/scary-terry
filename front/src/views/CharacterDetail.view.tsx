import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/container/Container';

function CharacterDetail() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { CharacterId } = useParams<{ CharacterId: string }>();

  return (
    <Container viewContainer>
      <h2>Character detail works</h2>
      <p>{CharacterId}</p>
    </Container>
  );
}

export default CharacterDetail;
