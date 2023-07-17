var express = require('express');
const db = require('./index')
var router = express.Router();

router.get('/', async (_req, res) => {
    try {
        let allCats = await db.Cat.findAll({
            order: [['errorCode', 'ASC']]
        });
        allCats.sort(() => Math.random() - 0.5)
        res.render('./index', { cats: allCats, title: "Explora los errores HTTP con gatites" })
        //res.status(200).json(cats);
    } catch (error) {
        console.error('Error al obtener la entidad Cat:', error);
        //res.status(error.status).send({ error: error.message });
        res.render('./error', { error: error });
    }
});

router.get('/:id',
    async (req, res) => {
        try {
            const cat = await db.Cat.findOne({ where: { errorCode: req.params.id } });
            if (cat == null) {
                const error = new Error('Not Found');
                error.status = 404;
                throw error;
            }
            res.render('./detail', { cat: cat })
            //res.status(200).json(cat);
        } catch (error) {
            console.error(`Error al obtener la entidad Cat por el código: ${req.params.id}`, error);
            //res.status(error.status).send({ error: error.message });  
            res.render('./error', { error: error });
        }
    });

module.exports = router;
