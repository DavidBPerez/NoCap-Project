import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import {useState, useEffect} from 'react';
import {io} from 'socket.io-client';

import './App.css'
import ProjectRouter from "./ProjectRouter.jsx"
import UIController from './controllers/UIController.jsx'

export default function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const serverURL = `http://localhost:5173`;
    const newSocket = io(serverURL);
    setSocket(newSocket);
    
    return() => {
      newSocket.disconnect();
    };
  }, []);

  const startApplication = () => {
    if(socket) {
      socket.emit('start-application');
      console.log('{Attempted to Start Application}');
    }
  };
  
  const exitApplication = () => {
    if(socket) {
      socket.emit('exit-application');
      console.log('{Attempted to Exit Application}');
    }
  };
  
  return(
    <RecoilRoot>
      <BrowserRouter>
        <ProjectRouter/>
        <UIController
          startApplication={startApplication}
          exitApplication={exitApplication}
        />
      </BrowserRouter>
    </RecoilRoot>
  )
}
