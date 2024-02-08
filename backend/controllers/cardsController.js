const { ctrlWrapper } = require('../decorators');
const fs = require('fs/promises');

const Cards = require('../models/cards');

const createCard = async (req, res) => {
  const { title, description, category } = req.body
  const result = await Cards.create({ title, description, category })
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
  const {id} = req.params
   const deletedCard = await Cards.findByIdAndDelete(id);
    if (!deletedCard) {
      throw new HttpError(404, `Cards with id=${id} was not found`);
    }
    res.json({ message: `Cards with id=${id} has been deleted` });
}


module.exports = {
  createCard: ctrlWrapper(createCard),
  updateCardById: ctrlWrapper(updateCardById),
  deleteCardById: ctrlWrapper(deleteCardById)
};
