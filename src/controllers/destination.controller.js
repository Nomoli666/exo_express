import destinationService from '../services/destination.service.js';
import activityService from '../services/activity.service.js';

const destinationController = {

  listing: async (req, res) => {
    const {name, country} = req.query;

    const destinations = await destinationService.getAllDestinations({name, country});
    res.status(200).render('./destinations/listing', {
      destinations: destinations,
      search: {
        name, country,
      },
    });
  },

  details: async (req, res) => {
    const id = +req.params.id;
    const destination = await destinationService.getDestinationById(id);
    const activities = await activityService.getActivitiesByDestinationId(id);

    if (!destination) {
      res.status(404).send(`No destination found`);
      return;
    }
    res.status(200).render('./destinations/details', {
      dest: destination,
      acti: activities,
    });
  },

  create: (req, res) => {
    res.status(200).render('./destinations/create', {error: null});
  },

  createSubmit: async (req, res) => {
    try {
      const newDestination = await destinationService.createDestination(req.body);
    } catch (e) {
      res.status(400).render('destinations/create', {error: e.message});
      return;
    }
    res.redirect('/destinations');
  },
};


export default destinationController;