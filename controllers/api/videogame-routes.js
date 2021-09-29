const router = require('express').Router();
const { VideoGame } = require('../../models');

// Get Videogames
router.get('/', async (req,res)=> {
    try {
        const videogameData = await VideoGame.findAll();
        res.json(videogameData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;