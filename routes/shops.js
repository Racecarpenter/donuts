var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from shops').then(function(shops) {
    res.send(shops.rows);
  });
});

module.exports = router;