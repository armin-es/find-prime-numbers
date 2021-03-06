/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();
const port = 4000;

app.use(cors());

app.use('/', indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
