const express = require('express')
const router = express.Router();
const { getLists, createList } = require('../controllers/lists')

router.route('/').get(getLists).post(createList)

module.exports = router;