const express = require('express');
const router = express.Router();
const { main, userdata, forget } = require('../controllers/mainController');
const mainValidator = require('../validators/mainValidator')

router.get('/', main);
router.post('/',mainValidator, userdata);
router.get('/color', forget);

module.exports = router;