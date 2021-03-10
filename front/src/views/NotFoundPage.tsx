import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/container/Container';
import Grid from '../components/grid/Grid';

function NotFoundPage() {
  return (
    <Container viewContainer>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <h1>404: Not found page </h1>
        </Grid>
        <Grid item>
          <Link to="/">Return Home</Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFoundPage;
