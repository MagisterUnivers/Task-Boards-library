const express = require('express');
const boardsController = require('../../controllers/boardsController');

const router = express.Router();

router.post('/', boardsController.createBoard);
router.patch('/:id', boardsController.updateBoardById);
router.delete('/:id', boardsController.deleteBoardById);

module.exports = router;
