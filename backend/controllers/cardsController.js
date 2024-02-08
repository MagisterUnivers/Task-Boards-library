const { ctrlWrapper } = require('../decorators');
const fs = require('fs/promises');

const Cards = require('../models/cards');
const Boards = require('../models/boards');

const createCard = async (req, res) => {
  const { title, description, category } = req.body
  const result = await Cards.create({ title, description, category })

  const cardId = result._id;

  const { id } = req.params;

  const board = await Boards.findById(id);
    if (!board) {
      throw new Error(`Board with id=${id} was not found`);
    }
    board.cards.push(cardId);
    await board.save();

  res.status(201).json(result)
}

const updateCardById = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  const cardObject = { title, description, category }

  const card = await Cards.findByIdAndUpdate(id, cardObject, { new: true });
    if (!card) {
      throw new HttpError(404, `Cardswith id=${id} was not found`);
    }
    res.json(card);
}

const deleteCardById = async (req, res) => {
  const { id } = req.params;
  const {boardId} = req.body

  const board = await Boards.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: `Board with id=${boardId} was not found` });
    }

    board.cards = board.cards.filter(cardId => cardId.toString() !== id);
    await board.save();
  
    const deletedCard = await Cards.findByIdAndDelete(id);
    if (!deletedCard) {
      throw new Error(`Card with id=${id} was not found`);
    }
  
    res.json({ message: `Card with id=${id} has been deleted` });
}


module.exports = {
  createCard: ctrlWrapper(createCard),
  updateCardById: ctrlWrapper(updateCardById),
  deleteCardById: ctrlWrapper(deleteCardById)
};
