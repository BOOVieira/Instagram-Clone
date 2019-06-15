const express = require('express')
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)
routes.post('/posts/:id/Like', LikeController.store)

module.exports = routes