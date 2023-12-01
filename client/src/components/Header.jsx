import React from 'react';
import NavBar from './NavBar';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

export default function Header(props) {
  const { navOptions, isLoggedIn, isGoogleSignIn } = props;
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        if (isGoogleSignIn) {
          console.log('User signed out from Google successfully');
        } else {
          console.log('User signed out successfully');
        }
        navigate(isLoggedIn ? '/' : '/login');
      })
      .catch((error) => {
        console.error('Sign-out error', error);
      });
  };

  return (
    <header>
      <NavBar navOptions={navOptions} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    </header>
  );
}
