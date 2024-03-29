const { ctrlWrapper } = require('../decorators');
const fs = require('fs/promises');

const Boards = require('../models/boards');

const createBoard = async (req, res) => {
  const { title } = req.body
  const result = await Boards.create({ title })
  res.status(201).json(result)
}

const updateBoardById = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const board = await Boards.findByIdAndUpdate(id, { title }, { new: true });
    if (!board) {
      throw new HttpError(404, `Board with id=${id} was not found`);
    }
    res.json(board);
}

const deleteBoardById = async (req, res) => {
  const {id} = req.params
   const deletedBoard = await Boards.findByIdAndDelete(id);
    if (!deletedBoard) {
      throw new HttpError(404, `Board with id=${id} was not found`);
    }
    res.json({ message: `Board with id=${id} has been deleted` });
}


module.exports = {
  createBoard: ctrlWrapper(createBoard),
  updateBoardById: ctrlWrapper(updateBoardById),
  deleteBoardById: ctrlWrapper(deleteBoardById)
};
