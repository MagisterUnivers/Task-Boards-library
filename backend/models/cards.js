const { Schema, model } = require('mongoose');

const CardsSchema = Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required']
		},
		description: {
			type: String,
			required: [true, 'Description is required'],
			unique: true
		},
		category: {
		type: String,
		required: [true, 'Category is required'],
		unique: true
		},
	},
	{ versionKey: false, timestamps: true }
);

const Cards = model('cards', CardsSchema);

module.exports = Cards;
