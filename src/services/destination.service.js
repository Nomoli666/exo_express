import db from '../database/index.js'

const getAllDestinations = async ()=> {
  const destinations = await db.Destination.findAll({
  });
  return destinations;
};

const getDestinationById = async (id) => {
  const destination = await db.Destination.findOne({
    where: {
      id: id,
    }
  })
  return destination;
}

export default {
  getAllDestinations,
  getDestinationById,
}