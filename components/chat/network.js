const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')
const router = express.Router()


router.post('/', (req,res,) => {
    controller.addChat(req.body.users)
    .then(data => {
        response.success(req,res,data,201);
    })
    .catch(err => {
        response.error(req,res,'Internal Error', 500,err);
    })
});

router.get('/:userId', (req, res) => {
	controller.listChats(req.params.userId)
	.then((users) => {
		response.success(req,res,users,200);
	})
	.catch(e => {
		response.error(req,res,'Unpectex Error ',500)
	})
});	


//
module.exports = router