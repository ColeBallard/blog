const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}.`));