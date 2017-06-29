var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('select * from shops').then(function(shops) {
    res.render('shops', {
      shops: shops.rows
    })
  })
});

router.get('/:id', function(req, res) {
  knex.raw(`select * from shops where id=${req.params.id}`).then(function(shops) {
    res.render('shopsID', {
      shops: shops.rows
    });
  })
})

router.get('/edit/:id', function(req, res) {
  knex.raw(`select * from shops where id=${req.params.id}`).then(function(shops) {
    res.send(shops.rows);
  })
})

router.get('/new', function(req, res) {
  knex.raw(`select * from shops`).then(function(shops) {
    res.send(shops.rows);
  })
})

router.put('/:id', function(req, res) {
  knex.raw(`update shops set name='${req.body.name}', city='${req.body.city}' where id=${req.params.id}`).then(function() {
    knex.raw(`select * from shops`).then(function(shops) {
      res.send(shops.rows);
    })
  })
})

router.post('/', function(req, res) {
  knex.raw(`insert into shops(name, city) values('${req.body.name}', '${req.body.city}')`).then(function() {
    knex.raw(`select * from shops`).then(function(shops) {
      res.render('shopsNEW', {

      });
    })
  })
})


module.exports = router;
