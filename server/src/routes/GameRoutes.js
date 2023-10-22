const express = require('express');
const GameController = require('../controllers/GameController');

const router = express.Router();

router.use('/game', GameController);

module.exports = router;
