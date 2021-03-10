import React from 'react';

import './NavbarLogo.scss';
import logo from 'url:../../assets/pickle-loading.png';
import { useHistory } from 'react-router';

export interface NavbarLogoProps {
  width?: string;
}

const NavbarLogo = (props: NavbarLogoProps) => {
  const { width = '50px' } = props;
  const history = useHistory();

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <div role="button" tabIndex={0} onClick={() => onLogoClick()} onKeyPress={() => onLogoClick()}>
      <img className="NavbarLogo" src={logo} alt="logo" width={width} />
    </div>
  );
};

export default NavbarLogo;
