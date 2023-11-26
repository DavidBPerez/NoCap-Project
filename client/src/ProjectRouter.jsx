import React from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import Homepage from './views/Homepage';
import AboutPage from './views/About';
import LoginPage from './views/Login';
import CharacterCreation from './views/CharacterCreation';
import GamePage from './views/GamePage';

export default function ProjectRouter() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage navigate={navigate} />} />
      <Route path="/character_creation" element={<CharacterCreation />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}
