const fs = require('fs');
const https = require('https');
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

app.prepare().then(() => {
  const server = express();

  // Servir archivos estáticos
  server.use(express.static(path.join(__dirname, 'public')));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(httpsOptions, server).listen(3000, err => {
    if (err) throw err;
    console.log('Servidor HTTPS corriendo en https://localhost:3000 y https://192.168.1.70:3000');
  });
});
