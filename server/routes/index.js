const express = require('express');

const router = express.Router();

/* GET */
router.get('/', (req, res) => {
  res.render('index', { title: 'New Title', author: 'Marcos Adan' });
});

module.exports = router;
