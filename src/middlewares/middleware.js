const jwt = require('jwt-simple');
const moment = require('moment');

const verificarToken = (req, res, next) => {

    if(!req.headers['usertoken']) {
        return res.json({ error: 'Se esperaba un token en el header'})
    }

    const userToken = req.headers['usertoken'];
    let tokenload = {};

    try {
        tokenload = jwt.decode(userToken, 'pruebapractica');
    }catch (error){
        return res.json({error: 'Token incorrecto'});
    }

    if(tokenload.expira < moment().unix()){
        return res.json({error: 'Token ha expirado'});
    }

    req.idUser = tokenload.idUser;

    next();
}

module.exports = {
    verificarToken: verificarToken
}