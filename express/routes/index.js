var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ober Rides' })
});

app.get('/driver-acc', (request, response) => {
  response.render('driver-acc')
});

module.exports = router;
