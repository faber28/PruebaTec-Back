const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db/index');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/registro', [
    check('idUser','Identificación obligatorio').not().isEmpty(),
    check('username','Nombre usuario obligatorio').not().isEmpty(),
    check('password','Contraseña obligatoria').not().isEmpty(),
    check('email','Agregue un correo electrónico').isEmail()
] ,async (req, res) => {
    const verificar = validationResult(req);
    if( !verificar.isEmpty()){
        return res.json({motivo: verificar.array()})
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res) => {
    
    const user = await User.findOne({ where: {email: req.body.email}});
    if (user){
        const comparar = bcrypt.compareSync(req.body.password, user.password);
        
        if(comparar){
            const token = createToken(user);
            res.json({success: token, data: user});
        }else{
            res.json({error: 'Error en usuario y/o contraseña'});
        }
    }else{
        res.json({error: 'Error en usuario y/o contraseña'});
    }
})

const createToken = (user) => {
    const tokenload = {
        idUser: user.id,
        creado: moment().unix(),
        expira: moment().add(30, 'minutes').unix()
    }

    return jwt.encode(tokenload, 'pruebapractica')
}
module.exports = router;