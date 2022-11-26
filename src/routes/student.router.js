const express = require("express");
const Student = require("../controllers/student.controller.js");
const getStudent = require("../controllers/student.controller.js");

const router = express.Router();
const student=new Student();

router.get("/", async (req,res)=>{

res.status(200).json(await student.getStudent());    
});

module.exports=router;
