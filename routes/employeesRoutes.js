var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */


router.get('/', function(req, res, next) {
  knex.raw(`SELECT * from employees`).then(function(employees) {
    res.render('employees', {
      employees: employees.rows
    })
  });
});

module.exports = router;
