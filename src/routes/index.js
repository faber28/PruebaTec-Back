const router = require('express').Router();

const RouteContacto = require('../controllers/contacto/controller');
const RouteUser = require('../controllers/user/controller');
const middlewares = require('../middlewares/middleware')

router.use('/contacto', middlewares.verificarToken, RouteContacto);
router.use('/user', RouteUser);

module.exports = router;