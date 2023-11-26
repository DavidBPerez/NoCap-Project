import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import AboutPage from './views/About';
import LoginPage from './views/Login';
import CharacterCreation from './views/CharacterCreation';
import GamePage from './views/GamePage';

const routes = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/character_creation" element={<CharacterCreation />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
);

export default function ProjectRouter() {
  return routes;
}
