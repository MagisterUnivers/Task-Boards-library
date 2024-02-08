const { ctrlWrapper } = require('../decorators');
const fs = require('fs/promises');

const Boards = require('../models/boards');

const createBoard = async (req, res) => {
  const { title } = req.body
  const result = await Boards.create({ title })
  res.status(201).json(result)
}


module.exports = {
  createBoard: ctrlWrapper(createBoard)
};
