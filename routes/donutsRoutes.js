var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from donuts').then(function(donuts) {
    res.render('donuts', {
      donuts: donuts.rows
    })
  });
});


router.get('/:id', function(req, res) {
  knex.raw(`select * from donuts where id=${req.params.id}`).then(function(donuts) {
    res.render('donutsID', {
      donuts: donuts.rows
    });
  })
})

router.post('/edit/:id', function(req, res) {
  knex.raw(`update donuts set donuts_name = '${req.body.donuts_name}', topping = '${req.body.topping}', price= ${req.body.price} where id=${req.params.id}`).then(function() {
    knex.raw(`select * from donuts`).then(function(donuts) {
      res.render('donuts', {
        donuts: donuts.rows
      })
    })
  })
})

router.post('/remove/:id', function(req, res) {
  knex.raw(`delete from donuts where id=${req.params.id}`).then(function() {
    knex.raw(`select * from donuts`).then(function(donuts) {
      res.render('donuts', {
        donuts: donuts.rows
      })
    })
  })
})

router.post('/add', function(req, res) {
  knex.raw(`insert into donuts(donuts_name, topping, price) values('${req.body.donuts_name}', '${req.body.topping}', ${req.body.price})`).then(function() {
    knex.raw(`select * from donuts`).then(function(donuts) {
      res.render('donuts', {
        donuts: donuts.rows
      });
    })
  })
})

module.exports = router;
