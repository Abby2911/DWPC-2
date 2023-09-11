var express = require('express');
var router = express.Router();

//GET "/user/about"
router.get('/tec', function(_, res) {
    res.render('tec', {tec: "Marcos Adan"});
  });


module.exports = router;
