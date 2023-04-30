const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Song = new Schema({
  song_name: {
    type: String
  },
  artist: {
    type: String
  }
}, {
  collection: 'songs'
})
module.exports = mongoose.model('Song', Song)