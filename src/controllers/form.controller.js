const formController = {

  index: async (req, res) => {
    res.status(200).render('form/index', {});
    // res.status(200).send('choice');
  },
  destination: async (req, res) => {
    res.status(200).render('form/destination', {});
    // res.status(200).send('destination')
  },
  activity : async (req, res) => {
    res.status(200).render('form/activity', {})
    // res.status(200).send('activity')
  }
};

export default formController;