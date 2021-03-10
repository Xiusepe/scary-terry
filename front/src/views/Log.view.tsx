import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '~core/store/Store';

import Container from '../components/container/Container';
import Grid from '../components/grid/Grid';

import { requestLogIn } from '../core/thunks/userSession.thunks';

function Log() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, error } = useSelector((appState: RootState) => appState.user);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(requestLogIn({ email, password }));
  };

  useEffect(() => {
    if (user && user.token) {
      history.push('/');
    }
  }, [user]);

  return (
    <Container viewContainer>
      <form id="login">
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <input
              type="email"
              required
              form="login"
              autoComplete="true"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </Grid>
          <Grid item>
            <input
              type="password"
              form="login"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </Grid>
          <Grid item>
            <button type="submit" onClick={(e) => onLogSubmit(e)}>
              Log In
            </button>
          </Grid>
          {error && (
            <Grid item>
              <span>Correct pasword and email are required</span>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  );
}

export default Log;
