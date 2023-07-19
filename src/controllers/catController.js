const db = require('../model/database');

const catController = { 
    
    getOne: async (req, res) => {
        try {
          const cat = await db.Cat.findOne({ where: {errorCode : req.params.id} });
          if (cat == null) {
            throwNewCustomError("Not Found", 404)
          }
          res.render('./detail', {cat: cat})
          //res.status(200).json(cat);
        } catch (error) {
          console.error(`Error al obtener la entidad Cat por el código: ${req.params.id}`, error);
          if(error.status == null){
            error.status = 500;
          }
          //res.status(error.status).send({ error: error.message });  
          res.render('./error', {error: error});
        }
    },

    index: async(_req, res) => {       
        try {
          const cats = await db.Cat.findAll({
            order: [['errorCode', 'ASC']]
          });
          cats.sort(() => Math.random() - 0.5); //si quiero que respete orden por codigo quito esta linea
          res.render('./index', {cats: cats})
          //res.status(200).json(cats);
        } catch (error) {
          console.error('Error al obtener la entidad Cat:', error);
          if(error.status == null){
            error.status = 500;
          }
          //res.status(error.status).send({ error: error.message });
          res.render('./error', {error: error});
        }
    }
}

function throwNewCustomError(message, status) {
  const error = new Error(message, status);
  error.status = 404;
  throw error;
}

module.exports = catController;