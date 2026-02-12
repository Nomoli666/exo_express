import activityService from '../services/activity.service.js';

const activityController = {

  listing: async (req, res) => {
    const activities = await activityService.getAllActivities();
    res.status(200).render('./activities/listing', {
      activities: activities,
    });
  },

  details: async (req, res) => {
    const id = +req.params.id;
    console.log(`(👉ﾟヮﾟ)👉 ${id} 👈(ﾟヮﾟ👈)`);
    const activity = await activityService.getActivityById(id);
    if (!activity) {
      res.status(404).send(`No activity found`);
      return;
    }
    res.status(200).send(`Destination ${id}`);
  },

  listingByDestination: async (req, res) => {
    const activities = await activityService.getActivitiesByDestinationId(destinationId);
    if (!activities) {
      res.status(404).send(`No activities found`);
      return;
    }
    res.status(200).send(`Destination ${activities}`);
  },

  create: (req, res) => {
    res.status(200).render('./activities/create', {
    });
  }
};


export default activityController;