const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
});

module.exports = mongoose.model('Post', PostSchema);
