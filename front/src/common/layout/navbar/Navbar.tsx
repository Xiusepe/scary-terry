import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import './Navbar.scss';

import Container from '../../../components/container/Container';
import Grid from '../../../components/grid/Grid';
import NavbarLogo from '../../../components/navbar-logo/NavbarLogo';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <Container className={clsx('Navbar', { collections: pathname === '/collections' })}>
        <Grid container justifyContent="space-between" alignItems="center" maxHeight>
          <Grid item>
            <NavbarLogo />
          </Grid>
        </Grid>
      </Container>
      <div className="fixed-position-offset"></div>
    </>
  );
}

export default Navbar;
