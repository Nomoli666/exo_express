import db from '../database/index.js';

const getAllActivities = async () => {
  const activities = await db.Activity.findAll({
  });
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

export default {
  getAllActivities,
  getActivitiesByDestinationId,
  getActivityById,
};