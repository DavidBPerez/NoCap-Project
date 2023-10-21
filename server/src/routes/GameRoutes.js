const express = require('express');
const GameController = require('../controllers/GameController');

const router = express.Router();

// Set game-related routes as needed
router.use('/game', GameController);

module.exports = router;
