const express = require('express')
const router = express.Router()

// import controller
const {
  requireSignin,
  mitraMiddleware,
  clientMiddleware
} = require('../controllers/auth')
const { read, update } = require('../controllers/user')

router.get('/user/:id', requireSignin, read)
router.put('/client/update', requireSignin, clientMiddleware, update)
router.put('/mitra/update', requireSignin, mitraMiddleware, update)

module.exports = router
