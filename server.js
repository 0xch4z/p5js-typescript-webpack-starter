const express = require('express');
const { log } = require('console');

const app = express();

const PORT = process.env.PORT || 3000;

app
  .use(express.static(__dirname + '/public'))
  .listen(PORT, () => log(`> http://localhost:${PORT}`));
