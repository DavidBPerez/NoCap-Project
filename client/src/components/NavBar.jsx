import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function NavBar(props) {
  const NavBarOptions = props.navOptions;

  const homeLink = (
    <Link to="/">
      <IconButton edge="start">
        <Avatar src="../../public/img/no_cap.jfif" alt="Home" />
      </IconButton>
    </Link>
  );

  const NavElements = NavBarOptions.map((element, index) => (
    <Link key={index} to={element.pagePath}>
      <IconButton edge="end">
        <Avatar src={element.imgPath} alt={element.imgDesc} />
      </IconButton>
    </Link>
  ));

  return (
    <AppBar position="sticky" className="bg-dark">
      <Toolbar className="d-flex justify-content-between">
        {homeLink}
        {NavElements}
      </Toolbar>
    </AppBar>
  );
}
