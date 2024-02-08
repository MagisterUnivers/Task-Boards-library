const express = require('express');
const boardsController = require('../../controllers/boardsController');

const router = express.Router();

router.post('/', boardsController.createBoard);

module.exports = router;
