const formController = {

  index: async (req, res) => {
    res.status(200).render('form/index', {});
    // res.status(200).send('choice');
  },
};

export default formController;