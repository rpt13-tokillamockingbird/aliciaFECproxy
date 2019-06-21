const express = require('express');
const proxy = require('http-proxy-middleware');
const port = 5000;

const app = express();

const cors = require('cors');
app.use(cors());

app.use('/:id', express.static('client'));
app.use('/hundred/:id', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/Priya/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));
app.use('/productInfo/:id', proxy({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/productBuyerService/:id', proxy({ target: 'http://localhost:4554', changeOrigin: true }));
app.use('/productQtyInfo', proxy({ target: 'http://localhost:4000', changeOrigin: true }));
app.use('/review/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(port, () => console.log(`running on port 127.0.0.1:${port}`));
