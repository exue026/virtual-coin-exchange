const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/api', (req, res, next) => {
  res.send({ data: 'Hello, World!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
