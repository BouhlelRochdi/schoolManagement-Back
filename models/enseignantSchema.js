const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const enseignantSchema = new schema({
    name: String,
    description: String,
    // company: { type: Schema.Types.ObjectId, ref: 'company' },
    // tags: [{ type: Schema.Types.ObjectId, ref: 'tags' }]
},
{
    timestamps: true,
    versionKey: false
});


const enseignantModel = mongoose.model('enseignant', enseignantSchema);
module.exports = enseignantModel;