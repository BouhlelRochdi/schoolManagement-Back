const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const enseignantSchema = new schema({
    name: String,
    description: String,
    admin: { type: Schema.Types.ObjectId, ref: 'admin' },
    etudiants: [{ type: Schema.Types.ObjectId, ref: 'etudiants' }]
},
{
    timestamps: true,
    versionKey: false
});


const enseignantModel = mongoose.model('enseignant', enseignantSchema);
module.exports = enseignantModel;