const catService = require('../model/services/catService')

const catController = { 
    
    getOne: async (req, res) => {
        try {
          const cat = await catService.getCatByCode(req.params.id);
          res.render('./detail', {cat: cat})
          //res.status(200).json(cat);
        } catch (error) {
          console.error(`Error al obtener la entidad Cat por el código: ${req.params.id}`, error);
          //res.status(error.status).send({ error: error.message });  
          res.render('./error', {error: error});
        }
    },

    index: async(_req, res) => {       
        try {
          const cats = await catService.getAllCatsSorted();
          res.render('./index', {cats: cats})
          //res.status(200).json(cats);
        } catch (error) {
          console.error('Error al obtener la entidad Cat:', error);
          //res.status(error.status).send({ error: error.message });
          res.render('./error', {error: error});
        }
    }
}

module.exports = catController;