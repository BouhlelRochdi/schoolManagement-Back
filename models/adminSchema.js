const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adminSchema = new schema({
    name: String,
    description : String,
    email: String,
    password: String,
    role: {type : String, default : 'admin'},
    // events: [{ type: Schema.Types.ObjectId, ref: 'event' }]
},
{
    timestamps: true,
    versionKey: false
});


const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;