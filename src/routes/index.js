const express = require('express')
const router = express.Router()
const controller = require('../controllers')
const validations = require('../validations')

router.get('/repository-by-stars', [controller.repoByStars])

router.get('/repositories', [validations.repos, controller.repos])

router.get('/repositories-by-date', [
  validations.reposByDate,
  controller.repoByDate,
])

module.exports = router
