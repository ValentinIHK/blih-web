var express = require('express');
var router = express.Router();
var Blih = require('blih');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/initToken', function(req, res, next) {
    const api = new Blih({ email: 'valentin.ichkour@epitech.eu', password: 'yZUhlbf@' });
    api.listRepositories()
        .then(console.log)
        .catch(console.log);
});

module.exports = router;
