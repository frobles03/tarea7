const express = require("express");
const getSum= require("../controllers/sum.math.controller.js");
const getRes= require("../controllers/res.math.controller.js");
const getMult= require("../controllers/mult.math.controller.js");
const getDiv= require("../controllers/div.math.controller.js");
const router = express.Router();

 router.get("/sum", getSum); //duda
 router.get("/substraction", getRes); 
 router.get("/multiplication", getMult); 
 router.get("/division", getDiv); 


 module.exports=router;