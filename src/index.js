import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import getAnswer from './modules/getAnswer';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World');
// });

app.post('/api/', async (req, res) => {
  const answer = await getAnswer(req.body.question);
  await res.json({
    answer,
  });
});

app.listen(3333);