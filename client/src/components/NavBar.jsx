import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

/**
* Renders a Navigation Bar for our project
* @param {Object} props.navOptions - An array of the objects each containing the following:
*   - pagePath: The route the page will go when clicked
*   - imgPath: The path to the image that is the "face" of the button
*   - imgDesc: The alt text (for accessibility) and the (tentative) Card Title
* @returns {JSX.Element}: A react component that functions as a navBar
*/

export default function NavBar(props) {
  const NavBarOptions = props.navOptions;

  //rendering the homelink
  const homeLink = (
    <Link to="/">
      <IconButton edge="start">
        <Avatar src="../public/img/no_cap.jfif" alt="Home" />
      </IconButton>
    </Link>
  );

  //rendering dynamic links
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
