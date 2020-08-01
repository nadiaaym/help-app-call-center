const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const callsController = require('./controllers/calls.controller');

const PORT = process.env.PORT || 9000;

app.use(cors());

const baseDir = path.resolve(__dirname, '../');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(baseDir, 'frontend/build')))

app.use('/api/calls', callsController);

app.get('/', (req, res) => {
  res.sendFile(path.join(baseDir, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`API express server listening on port: ${PORT}`)
});