import React from 'react';
import NavBar from './NavBar';

export default function Header(props) {
  return (
    <header>
      <NavBar navOptions={props.navOptions} />
    </header>
  );
}
