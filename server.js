'use strict';

const express = require('express');
const app = express();

// Port kommt von Azure
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send(':-))) Hello FS2025 DevOps Course! :-)))');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
