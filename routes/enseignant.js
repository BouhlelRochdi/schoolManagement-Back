const express = require('express');
const enseignantSchema = require('../models/enseignantSchema');
const adminSchema = require('../models/adminSchema');
const router = express.Router();


router.get('/enseignant', async (req, res) => {
    const enseignant = await enseignantSchema.find();
     res.status(200).json(enseignant);
 });
 
 
 //Find One By ID
 router.get('/enseignant/:id', async (req, res) => {
    const enseignant = await enseignantSchema.findById(req.params.id);
     res.status(200).json(enseignant);
 })
 
 
 // ajout enseignant
 router.post('/enseignant', async (req, res) => {
    if (!req.body) {
       res.status(400).json({ message: "No body found" });
    }
    const adminId = await adminSchema.findById(req.body.admin, {new: true});
    const ens= {...req.body, admin: adminId};
    const enseignant = await enseignantSchema.create(req.body);
    res.status(200).json(enseignant);
 })
 
 //Update enseignant
 router.put('/enseignant/update/:id', async (req, res) => {
    if( !req.params.id){
       res.status(400).json({ message: "No id found" });
    }
    const enseignant = await enseignantSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(enseignant);
 });
 
 //Delete enseignant
 router.delete('/enseignant/:id', async (req, res) => {
    const enseignant = await enseignantSchema.findByIdAndDelete(req.params.id);
    if(enseignant) res.json({ message: `The company ${company.name} deleted successfully!` });
 });
module.exports = router;