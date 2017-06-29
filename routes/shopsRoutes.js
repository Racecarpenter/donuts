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
  knex.raw(`select * from employees where store_id=${req.params.id}`).then(function(shops) {
    res.render('shopsID', {
      employees: employees.rows
    });
  })
})

router.post('/edit/:id', function(req, res) {
  knex.raw(`update shops set name = '${req.body.name}', city = '${req.body.city}' where id=${req.params.id}`).then(function() {
    knex.raw(`select * from shops`).then(function(shops) {
      res.render('shops', {
        shops: shops.rows
      })
    })
  })
})


router.post('/remove/:id', function(req, res) {
  knex.raw(`delete from shops where id=${req.params.id}`).then(function() {
    knex.raw(`select * from shops`).then(function(shops) {
      res.render('shops', {
        shops: shops.rows
      })
    })
  })
})

router.post('/add', function(req, res) {
  knex.raw(`insert into shops(name, city) values('${req.body.name}', '${req.body.city}')`).then(function() {
    knex.raw(`select * from shops`).then(function(shops) {
      res.render('shops', {
        shops: shops.rows
      });
    })
  })
})


module.exports = router;
