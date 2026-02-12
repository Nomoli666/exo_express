import db from '../database/index.js';
import {Op} from 'sequelize';

const getAllDestinations = async (filters) => {
  const where = {};
  if (filters) {
    if (filters.name) {
      where.name = {
        [Op.iLike]: `%${filters.name}%`,
      };
    }
    if (filters.country) {
      where.country = {
        [Op.iLike]: `%${filters.country}%`,
      };
    }
  }

  const destinations = await db.Destination.findAll({
    where,
    include: [{
      model: db.Activity,
      as: 'activities',
    }],
  });
  return destinations;
};

const getDestinationById = async (id) => {
  const destination = await db.Destination.findOne({
    where: {
      id: id,
    },
  });
  return destination;
};

const createDestination = async (data) => {
  console.log(data);
  const {name, country, description} = data;
  if (!name || !country) {
    throw new Error('Le Nom de la Destination et du Pays sont Obligatoires');
  }
  const existingDestination = await db.Destination.findOne({
    where: {
      name: name,
    },
  });
  if (existingDestination) {
    throw new Error('Cette destination est déjà dans nos listes');
  }
  const newDestination = await db.Destination.create({name, country, description});
};

export default {
  getAllDestinations,
  getDestinationById,
  createDestination,
};