//Initializing the router
const { Router } = require("express");
const router = Router();

//Controller
const example_controller = require('../controllers/example')

//Routes
router.get('/test', example_controller.test);

router.get('/', example_controller.test);



//Export
module.exports = router;