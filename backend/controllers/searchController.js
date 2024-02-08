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

module.exports = {
  getBoardById: ctrlWrapper(getBoardById)
};
