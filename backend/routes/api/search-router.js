const express = require('express');
const searchController = require('../../controllers/searchController');

const router = express.Router();

router.get('/:id', searchController.getBoardById);
router.patch('/:id', searchController.updateBoardById);

module.exports = router;
