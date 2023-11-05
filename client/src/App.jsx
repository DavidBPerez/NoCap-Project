import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { socket, connectToServer } from './controllers/SocketController.jsx';

import ProjectRouter from './ProjectRouter.jsx';
import './App.css';

export default function App() {
  useEffect(() => {
    connectToServer();

      // Define the function inside the effect if it's not used elsewhere
    const getStory = async (prompt) => {
      console.log("Getting the response: ");
      try {
        const response = await fetch('/generate/initial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: prompt })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Story received from server:', data);
      } catch (error) {
        console.log('Error fetching the story:', error);
      }

    }
    const userPrompt = "Once upon a time";
    getStory(userPrompt);
  
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
