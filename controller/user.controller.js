const express = require("express");
const User = require("../models/user.model")
const crudController= require("../controller/crud.controller")
const router = express.Router()

router.post("", crudController(User).post);

router.get("", crudController(User).get);

module.exports = router;



