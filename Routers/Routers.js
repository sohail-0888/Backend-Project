const express = require('express');
 const {addNotes,adddata}  = require('../Controller/crud')
const  router = express.Router();


router.get('/home',addNotes)
router.get('/data', adddata)

module.exports = router