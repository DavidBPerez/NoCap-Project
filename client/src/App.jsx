import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { socket, connectToServer } from './controllers/SocketController.jsx';
import {createUser, storeUserData} from "./firebase.mjs"

import ProjectRouter from './ProjectRouter.jsx';
import './App.css';

export default function App() {
  useEffect(() => {
    connectToServer();
    createUser("hi@hirerec.com", "hihihi") //TEST: REMOVE
    storeUserData("hihihihihhi", "hi@hirecrec.com", "hithere", 25, "female");
    return () => {
      socket.disconnect();
      console.log('Socket Closed');
    };
  });
  
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ProjectRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}
