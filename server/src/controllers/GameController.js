// Skeleton file --> Depreciated

const express = require('express');
const router = express.Router();

// Store game state -- for simplicity, use js object()
let gameData = {
  // Initialize game state props here
};

router.post('/start-game', (req, res) => {
  // Implement logic to initialize session here (if needed)
  // Generate initial game state, store in server/db, send client
  gameData = {
    // Initialize game state props (as needed)
  };

  // Handle player stats, scenarios, and game services on server

  res.json({ message: 'Game started' });
});

router.post('/exit-game', (req, res) => {
  // Implement logic to handle exit, save, and clean up
  
  gameData = {};
  res.json({ message: 'Game exited' });
});

module.exports = router;
