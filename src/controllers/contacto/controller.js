const router = require('express').Router();
const { Contacto } = require('../../db/index');

router.get('/:id', async (req,res)=> {
    const contacto = await Contacto.findAll({
        where: {idUser: req.params.id}
    });
    res.json(contacto);
});

router.get('/editar/:id', async (req,res)=> {
    const contacto = await Contacto.findByPk(req.params.id);
    res.json(contacto);
});

router.post('/', async (req, res) => {
    const contacto = await Contacto.create(req.body);
    res.json(contacto);
});

router.put('/:idContacto', async (req,res) => {
    const contacto = await Contacto.update(req.body, {
        where: { id: req.params.idContacto}
    });
    res.json({success: 'Se ha modificado el contacto'});
});

router.delete('/:idContacto', async (req, res) => {
    const contacto= await Contacto.destroy({
        where: {id: req.params.idContacto}
    });
    res.json({success: 'Se ha eliminado el contacto correctamente'});
})

module.exports = router;