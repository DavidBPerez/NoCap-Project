import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { socket, connectToServer } from './controllers/SocketController.jsx';
import { auth } from "./firebase.mjs";
import { onAuthStateChanged } from 'firebase/auth';
import ProjectRouter from './ProjectRouter.jsx';

export default function App() {
  useEffect(() => {
    connectToServer();

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log('User authenticated');
      } else {
        console.log('No user authenticated');
      }
    });

    return () => {
      unsubscribe();
      socket.disconnect();
      console.log('Socket Closed');
    };
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <ProjectRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}
