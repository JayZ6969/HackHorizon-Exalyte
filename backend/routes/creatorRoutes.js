const express = require('express');
const { Router } = express;
const creatorController = require('../controllers/creatorControllers');
const dotenv = require('dotenv');
const creatorRouter = Router();

dotenv.config();

creatorRouter.post('/signup', creatorController.signup);
creatorRouter.post('/login', creatorController.login);

module.exports = creatorRouter; 