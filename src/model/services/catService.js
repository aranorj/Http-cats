const catRepository = require('../repositories/catRepository');

const getAllCatsSorted = async() => {
  try {
    const cats = await catRepository.findAllCats();
    cats.sort(() => Math.random() - 0.5); //si quiero que respete orden por codigo quito esta linea
    return cats;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

const getCatByCode = async(errorCode) => {
  try {
    const cat = await catRepository.findCatByCode(errorCode);
    if (cat == null) {
      throwNewCustomError('Not Found', 404)
    }
    return cat;
  } catch (error) {
    console.error(error.message + error);
    throw error;
  }
}

throwNewCustomError = (message, status) => {
  const error = new Error(message, status);
  error.status = status;
  throw error;
}

module.exports = {
  getAllCatsSorted,
  getCatByCode
};