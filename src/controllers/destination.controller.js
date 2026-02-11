import destinationService from '../services/destination.service.js';
import activityService from '../services/activity.service.js';

const destinationController = {

  listing: async (req, res) => {
    const destinations = await destinationService.getAllDestinations();
    console.log(`(👉ﾟヮﾟ)👉  👈(ﾟヮﾟ👈)`);
    res.status(200).render('./destinations/listing', {
      destinations: destinations,
    });
  },

  details: async (req, res) => {
    const id = +req.params.id;
    const destination = await destinationService.getDestinationById(id);
    const activities = await activityService.getActivitiesByDestinationId(id)

    if (!destination) {
      res.status(404).send(`No destination found`);
      return;
    }
    res.status(200).render('./destinations/details', {
      dest: destination,
      acti: activities,
    });
  },
};

export default destinationController;