const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/api', (req, res, next) => {
  const hello = 'hi'
  res.send({ data: hello })
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
