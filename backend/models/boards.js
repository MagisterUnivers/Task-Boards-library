const { Schema, model } = require('mongoose');

const boardSchema = Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required']
		},
		cards: {
			type: Array
		},
	},
	{ versionKey: false, timestamps: true }
);

const Boards = model('Boards', boardSchema);

module.exports = Boards;
