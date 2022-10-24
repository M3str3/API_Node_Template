//Initializing the router
const { Router } = require("express");
const router = Router();

//Controller
const example_controller = require('../controllers/example')

//Routes
router.get('/', example_controller.hello);



//Export
module.exports = router;