var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * from employees where id='${req.body.id}'`).then(function(employees) {
    res.render('/employeeID', {
      employees: employees.rows
    })
  });
});

module.exports = router;
