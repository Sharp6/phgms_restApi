var PhgmsRoutes = function(gms) {
	var express = require('express');
	var router = express.Router();

	/* API */
	router.route('/')
		.get(function(req,res) {
			return res.send(gms.getState());
		});
		
	return router;
}

module.exports = PhgmsRoutes;