const express = require('express');
const cardsController = require('../../controllers/cardsController');

const router = express.Router();

router.post('/:id', cardsController.createCard);
router.patch('/:id', cardsController.updateCardById);
router.delete('/:id', cardsController.deleteCardById);

module.exports = router;
