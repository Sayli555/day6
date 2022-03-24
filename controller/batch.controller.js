const express = require("express")

const Batch = require("../models/batch.model")
const crudController = require("./crud.controller")

const router = express.Router();

router.get("",crudController(Batch).get)
router.post("",crudController(Batch).post)


module.exports = router