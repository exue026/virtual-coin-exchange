import express from 'express'

const app = express();
const port = process.env.PORT || 8080;

app.get('/api', (req, res, next) => {
  res.send({ data: 'hello world' });
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
