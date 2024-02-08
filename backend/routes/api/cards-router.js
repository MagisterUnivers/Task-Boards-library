const express = require('express');
const cardsController = require('../../controllers/cardsController');

const router = express.Router();

router.get('/:id', cardsController.createCard);

module.exports = router;
