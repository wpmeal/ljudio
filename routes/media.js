const { Router } = require('express');
const router = new Router();

const { searchMedia } = require('../controller/mediaControl.js');

// a route to search for media
router.post('/search', searchMedia);



module.exports = router;