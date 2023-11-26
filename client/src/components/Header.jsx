import React from 'react';
import NavBar from './NavBar';
import { getAuth, signOut } from 'firebase/auth';

export default function Header(props) {
  const { navOptions, isLoggedIn, isGoogleSignIn } = props;
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        if (isGoogleSignIn) {
          console.log('User signed out from Google successfully');
        } else {
          console.log('User signed out successfully');
        }
        // Redirect to login or homepage after sign out
        // You can use the 'navigate' function or any other routing logic here
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
