const express = require('express');
const cors = require('cors');

const cardsRouter = require('./routes/api/cards-router');
const boardsRouter = require('./routes/api/boards-router');
const searchRouter = require('./routes/api/search-router');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/cards', cardsRouter);
app.use('/boards', boardsRouter);
app.use('/search', searchRouter);
app.get("/api/home", (req, res) => {
  res.json({message: "Hello World"})
})

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({
		message
	});
});

module.exports = app;
