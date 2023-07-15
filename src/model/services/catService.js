const catRepository = require('../repositories/catRepository');

async function getAllCatsSorted() {
  try {
    const cats = await catRepository.findAllCats();
    cats.sort(() => Math.random() - 0.5); //si quiero que respete orden por codigo quito esta linea
    return cats;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

async function getCatByCode(errorCode) {
  try {
    const cat = await catRepository.findCatByCode(errorCode);
    if (cat == null) {
      throwNotFoundError()
    }
    return cat;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

function throwNotFoundError() {
  const error = new Error('Not Found');
  error.status = 404;
  throw error;
}

module.exports = {
  getAllCatsSorted,
  getCatByCode
};