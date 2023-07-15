const db = require('../models')
 
const findCatByCode = async(errorCode) => {
    try {
      return await db.Cat.findOne({ where: { errorCode } });
    } catch (error) {
      let errorMessaje =`Error al obtener la entidad Cat por el código: ${errorCode}`
      console.error(`${errorMessaje} ${error}`);
      throw new Error(errorMessaje);
    }
};

const findAllCats = async() => {
  try {
    return await db.Cat.findAll();
  }catch(error) {
    let errorMessaje = 'Error en la persistencia al obtener todas las entidades Cat'
    console.error(`${errorMessaje} ${error}`);
    throw new Error(errorMessaje);
  }
}

module.exports = {
  findCatByCode,
  findAllCats
};