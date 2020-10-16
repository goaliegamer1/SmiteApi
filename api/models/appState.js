const mongoose = require('mongoose');

const appStateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    gods: Array,
    relics: Array,
    cooldown: Array,
    objectives: Array
});

module.exports = mongoose.model('appState', appStateSchema);