import React from 'react';
import { createRoot } from 'react-dom/client';
import {useEffect} from 'react'
import App from './App.jsx';


const reactRoot = createRoot(document.getElementById('root'));

//test



reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
