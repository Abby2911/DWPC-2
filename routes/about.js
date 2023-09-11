var express = require('express');
var router = express.Router();
/* GET / users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//GET "/user/about"
router.get('/tec', function(_, res) {
    res.render('tec', {nombre: "Martinez Garcia Marcos Adan y Reyes Landin Abigail Vianney"});
  });


module.exports = router;
