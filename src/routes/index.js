const router = require('express').Router();
const RouteContacto = require('./contacto/route');
const RouteUser = require('./user/route');
const middlewares = require('../middlewares/middleware')

router.use('/contacto', middlewares.verificarToken, RouteContacto);
router.use('/user', RouteUser);

module.exports = router;