const express = require("express")

const Evaluation = require("../models/evaluation.model") 
const crudController = require("./crud.controller")

const router = express.Router();

router.get("",crudController(Evaluation).get)
router.post("",crudController(Evaluation).post)
``

module.exports=router
