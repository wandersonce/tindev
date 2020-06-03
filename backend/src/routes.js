const express = require('express');

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Hello World!!');
});


routes.post('/devs', (req, res) => {
    return res.json({ ok: true });
})

module.exports = routes;