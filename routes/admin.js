const express = require('express');
const adminSchema = require('../models/adminSchema');
const router = express.Router();

// Get
router.get('/admin', async (req, res) => {
    // ecrire votre code
});


//Find One By ID
router.get('/admin/:id', async (req, res) => {
    // ecrire votre code
})

// Create simple admin without verification
router.post('/admin',  async (req, res) => {
//    ecrire votre code 
console.log('we are in function post')
});
module.exports = router;