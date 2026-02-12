import db from '../database/index.js';

const getAllActivities = async () => {
  const activities = await db.Activity.findAll({});
  return activities;
};

const getActivitiesByDestinationId = async (destinationId) => {
  const activities = await db.Activity.findAll({
    where: {
      destinationId: destinationId,
    },
  });
  return activities;
};

const getActivityById = async (id) => {
  const activity = await db.Activity.findOne({
    where: {
      id: id,
    },
  });
  return activity;
};

const createActivity = async (data) => {
  const {name, description, price, destinationId} = data;
  if (!name || !price || !destinationId) {
    throw new Error('Le Nom, le Prix et la Destination associée sont Obligatoires');
  }
  const existingActivity = await db.Activity.findOne({
    where: {
      name: name,
    },
  });
  if (existingActivity) {
    throw new Error('Cette activité est déjà dans nos listes.');
  }
  const newActivity = await db.Activity.create({name, description, price, destinationId});
};

export default {
  getAllActivities,
  getActivitiesByDestinationId,
  getActivityById,
  createActivity,
};