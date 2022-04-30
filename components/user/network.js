const express = require('express')
const router = express.Router()

// Modulos locales
const response = require('../../network/response')
const controller = require('./controller')

//
router.get('/', (req, res) => {
	controller.listUsers()
	.then((users) => {
		response.success(req,res,users,200);

	})
	.catch(e => {
		response.error(req,res,'Unpectex Error ',500)
	})
});	
//!||


router.post('/', function(req,res,) {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req,res,data,201);
    })
    .catch(err => {
        response.error(req,res,'Internal Error', 500,err);
    })
})

module.exports = router