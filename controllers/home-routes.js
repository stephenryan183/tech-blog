const router = require('express').Router();
const { Reviews, VideoGame, User } = require('../models');
const withAuth = require('../utils/auth');

// Get homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
    res.status(200);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get the login page
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
});



// Route to access the dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const videoGameData = await VideoGame.findAll();
    const videogames = videoGameData.map((videogame) => videogame.get({ plain: true }));

  const videogameFile = videoGameData.map(videogame => videogame.videogame_name.toLowerCase().replace(" ",""))
  const zip = (a, b) => a.map((h, i) => ({ data: h, file: b[i] }));
  const videogameArray = zip(videogames,videogameFile)
  // const videogameObjectArray = videogameArray.map((videogame) => videogame.get({ plain: true, }));
    res.render('dashboard', {
     videogameArray,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Find by Id
router.get('/videogames/:id', async (req, res) => {

  try {

    const videogameData = await VideoGame.findByPk(req.params.id, {
      include: [
        {
          model: Reviews,
          include: [
            {
              model: User
            }
          ]
        }
      ]
    })
    const videogame = videogameData.get({ plain: true });
    console.log(videogame.reviews[0].user);

    res.render('reviews', {
      videogame,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(400).json(err);
  }

})

module.exports = router;