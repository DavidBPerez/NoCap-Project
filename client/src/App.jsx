import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { socket, connectToServer } from './controllers/SocketController.jsx';

import ProjectRouter from './ProjectRouter.jsx';
import './App.css';
import UIController from './controllers/UIController.jsx';

export default function App() {
  const startApplication = () => {
    socket.emit('start-application', (response) => {
      console.log('Start Application Response:', response);
    });
  };
  
  const exitApplication = () => {
    socket.emit('exit-application', (response) => {
      console.log('Exit Application Response:', response);
    });
  };
  
  useEffect(() => {
    connectToServer();
    
    return () => {
      socket.disconnect();
      console.log('Socket Closed');
    };
  }, []);
  
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ProjectRouter />
        {/*
        <UIController
          startApplication={startApplication}
          exitApplication={exitApplication}
        /> */}
      </BrowserRouter>
    </RecoilRoot>
  );
}
