const express = require('express');
const adminSchema = require('../models/adminSchema');
const router = express.Router();

// Get one
router.get('/admin/:id', async (req, res) => {
    const admin = await adminSchema.findById(req.params.id);
    res.status(200).json(admin);
});

//Get all
router.get('/admin', async (req, res) => {
    const admins = await adminSchema.find();
    res.status(200).json(admins);
});

// Create simple admin without verification
router.post('/admin/register', async (req, res) => {
    if (await adminSchema.findOne({ email: req.body.email })) {
        res.status(400).json({ message: "Email Already exist" });
    }
    else {
        const admin = await adminSchema.create(req.body);
        res.status(200).json(admin);
    }
});

//Update Admin
router.post('/admin/update/:id', async (req, res) => {
    if( !req.params.id){
       res.status(400).json({ message: "No id found" });
    }
    const admin = await adminSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(admin);
 });
module.exports = router;