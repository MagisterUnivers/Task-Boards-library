const express = require('express');
const searchController = require('../../controllers/searchController');

const router = express.Router();

router.get('/:id', searchController.getBoardById);
router.get('/', searchController.getAllBoards);


module.exports = router;
