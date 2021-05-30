
    const router = require('express').Router();
    const weatherController = require('../controllers/weatherController');
    router.get('/',weatherController.index);
    router.get('/about',weatherController.about);
    router.get('/weather',weatherController.weather);

    module.exports = router;