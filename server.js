const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get("/api/googleid", (req, res) => {
  res.json({ id: process.env.GOOGLE_CLIENT_ID });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}.`));