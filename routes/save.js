var express = require('express');
var router = express.Router();
var mysql = require('../mysql');

var document ={};

/* GET users listing. */
router.route('/')

    .post(function(req, res, next){
    	var users = {FirstName: req.body.FirstName,LastName:req.body.LastName,Rank:req.body.Rank };


		mysql.query('INSERT INTO users SET ?', users, function(err,innres){
		  if(err) throw err;

		  console.log('Last insert ID:', innres.insertId);

        	document = req.body;
        	res.json({'UID':innres.insertId});
    	});


    })



	.get(function(req, res, next) {

		mysql.query('SELECT * FROM users',function(err,rows){
		  if(err) throw err;

		  console.log('Data received from Db:\n');
		  console.log(rows);

			res.json(rows);
		});
	});

router.route('/:uid')
	.get(function(req, res, next) {

		mysql.query('SELECT * FROM users where UID='+req.params.uid,function(err,rows){
		  if(err) throw err;

		  console.log('Data received from Db:\n');
		  console.log(rows);

			res.json(rows);
		});
	});


module.exports = router;
