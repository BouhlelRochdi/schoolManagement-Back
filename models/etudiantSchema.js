const mongoose = require('mongoose');
const schema = mongoose.Schema;

const etudiantSchema = new schema({
    name: String,
    description: String
},
{
    timestamps: true,
    versionKey: false
});


const etudiantModel = mongoose.model('etudiants', etudiantSchema);
module.exports = etudiantModel;