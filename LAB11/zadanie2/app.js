const express = require('express');
const app = express();
const promClient = require('prom-client');
const expressPromBundle = require('express-prom-bundle');

const metricsMiddleware = expressPromBundle({includeMethod: true});
const port = process.env.PORT || 8081;

app.use(metricsMiddleware);

app.get('/', (req, res) => {
  res.send('Zadanie 2!');
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
