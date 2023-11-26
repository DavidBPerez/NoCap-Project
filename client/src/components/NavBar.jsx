import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default function NavBar(props) {
  const { navOptions, onLogout, isGoogleSignIn } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setIsLoggedIn(!!firebaseUser);
    });

    return () => unsubscribe();
  }, [auth]);
  
  const homeLink = (
    <Link to="/">
      <IconButton edge="start">
        <Avatar src="../../public/img/no_cap.jfif" alt="Home" />
      </IconButton>
    </Link>
  );

  const NavElements = navOptions.map((element, index) => (
    <Link key={index} to={element.pagePath}>
      <IconButton edge="end">
        <Avatar src={element.imgPath} alt={element.imgDesc} />
      </IconButton>
    </Link>
  ));

  const authButton = isLoggedIn ? (
    <>
      {isGoogleSignIn ? (
        <button onClick={onLogout}>Sign out with Google</button>
      ) : (
        <button onClick={onLogout}>Logout</button>
      )}
    </>
  ) : (
    <Link to="/login">
      <button>Login</button>
    </Link>
  );

  return (
    <AppBar position="sticky" className="bg-dark">
      <Toolbar className="d-flex justify-content-between">
        {homeLink}
        {NavElements}
        {authButton}
      </Toolbar>
    </AppBar>
  );
}
