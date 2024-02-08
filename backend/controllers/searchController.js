const { ctrlWrapper } = require('../decorators');
const { HttpError } = require('../helpers');
const fs = require('fs/promises');

const Boards = require('../models/boards');

const getBoardById = async (req, res) => {
const { id } = req.params;
	const result = await Boards.findById(id).exec();
  	if (!result) throw HttpError(404, `Board with id=${id} was not found`);
	res.json(result);
};

const updateBoardById = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const board = await Boards.findByIdAndUpdate(id, { title }, { new: true });
    if (!board) {
      throw new HttpError(404, `Board with id=${id} was not found`);
    }
    res.json(board);
}

module.exports = {
  getBoardById: ctrlWrapper(getBoardById),
  updateBoardById: ctrlWrapper(updateBoardById)
};
