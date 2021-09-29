// Import models
const User = require('./User');
const Reviews = require('./Reviews')
const VideoGame = require('./Videogame')

// Reviews belong to User
Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});

// User has many Reviews
User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Reviews belong to Video Game
Reviews.belongsTo(VideoGame, {
    foreignKey: 'videogame_id',
});

// VideoGame has many Reviews
VideoGame.hasMany(Reviews, {
    foreignKey: 'videogame_id'
});

module.exports = { User, Reviews, VideoGame }; 