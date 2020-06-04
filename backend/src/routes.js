const express = require('express');
const DevController = require('./controllers/DevController');
const LikeControler = require('./controllers/LikeController');

const routes = express.Router();

routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeControler.store);

module.exports = routes;