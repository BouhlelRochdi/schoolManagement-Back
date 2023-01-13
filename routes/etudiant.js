const express = require('express');
const etudiantchema = require('../models/etudiantSchema');
const router = express.Router();
const path = require('path');

//Get all etudiants
router.get('/etudiant', async (req, res) => {
   const etudiant = await etudiantchema.find();
    res.status(200).json(etudiant);
});


//Find One By ID
router.get('/etudiant/:id', async (req, res) => {
   const etudiant = await etudiantchema.findById(req.params.id);
    res.status(200).json(etudiant);
})


// ajout etudiant
router.post('/etudiant', async (req, res) => {
   if (!req.body) {
      res.status(400).json({ message: "No body found" });
   }
   const etudiant = await etudiantchema.create(req.body);
   res.status(200).json(etudiant);
})

//Update etudiant
router.put('/etudiant/update/:id', async (req, res) => {
   if( !req.params.id){
      res.status(400).json({ message: "No id found" });
   }
   const etudiant = await etudiantchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
   res.status(200).json(etudiant);
});

//Delete etudiant
router.delete('/etudiant/:id', async (req, res) => {
   const etudiant = await etudiantchema.findByIdAndDelete(req.params.id);
   if(etudiant) res.json({ message: `The company ${company.name} deleted successfully!` });
});
module.exports = router;