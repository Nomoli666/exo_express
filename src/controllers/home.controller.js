import destinationService from '../services/destination.service.js';

const homeController = {

  home: async (req, res) => {
    const destination = await destinationService.getAllDestinations();
    res.status(200).render('home/home', {
    destination: destination,
    });
  },
  contact: async (req, res) => {
    res.status(200).render('home/contact', {})
  }
};

export default homeController;