const express = require('express');
const client = require('prom-client');

const app = express();
const register = client.register;

const counter = new client.Counter({
    name: 'node_request_count',
    help: 'Total number of requests'
});

app.get('/', (req, res) => {
    counter.inc();
    res.send('Hello from Node.js App with Prometheus metrics!');
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
