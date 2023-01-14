const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const etudiantSchema = new schema({
    name: String,
    description: String,
    admin: { type: Schema.Types.ObjectId, ref: 'admin' },
    enseignant: [{ type: Schema.Types.ObjectId, ref: 'enseignant' }]
},
{
    timestamps: true,
    versionKey: false
});


const etudiantModel = mongoose.model('etudiants', etudiantSchema);
module.exports = etudiantModel;