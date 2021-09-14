const express = require('express');
const { shorten, redirectUrl } = require('../controllers/url');

const router = express.Router();

router.post('/api/url/shorten', shorten);
router.get('/redirect/:code', redirectUrl);

module.exports = router;
