import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { socket, connectToServer } from './controllers/SocketController.jsx';

import ProjectRouter from './ProjectRouter.jsx';
import './App.css';

export default function App() {
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
      </BrowserRouter>
    </RecoilRoot>
  );
}
