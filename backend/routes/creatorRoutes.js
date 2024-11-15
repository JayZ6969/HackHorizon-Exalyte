const express = require('express');
const { Router } = express;
const creatorController = require('../controllers/creatorControllers');
const dotenv = require('dotenv');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/multer');
const creatorRouter = Router();

dotenv.config();

creatorRouter.post('/signup', creatorController.signup);
creatorRouter.post('/login', creatorController.login);

creatorRouter.use(auth);

creatorRouter.post('/upload', upload.single('file'), creatorController.uploadStatus);
creatorRouter.get('/generate', creatorController.createQuestions);

module.exports = creatorRouter; 