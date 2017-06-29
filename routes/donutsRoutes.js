var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from donuts').then(function(donuts) {
    res.send(donuts.rows);
  });
});

router.get('/donuts/:id', function(req, res) {
  knex.raw(`select * from donuts where id=${req.params.id}`).then(function(donuts) {
    res.send(donuts.rows);
  })
})

module.exports = router;
