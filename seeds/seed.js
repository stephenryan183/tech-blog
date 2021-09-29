const sequelize = require('../config/connection');
const { User, VideoGame, Reviews } = require('../models');

const userData = require('./userData.json');
const videogameData = require(`./videogameData.json`)
const reviewData = require(`./reviewData.json`)


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {});

    await VideoGame.bulkCreate(videogameData, {});

    await Reviews.bulkCreate(reviewData, {});
    
    process.exit(0);
}
    seedDatabase();