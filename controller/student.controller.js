const express = require("express")

const Student = require("../models/student.model")
const crudController = require("./crud.controller")

const router = express.Router();

router.get("", async (req, res) => {
    try {
      // const tags = await Post.find({tag_ids: "dskfgdskf"}).lean().exec()
      const posts = await Student.find()
        .populate({ path: "user_id", select: ["first_name", "last_name"] })
        .lean()
        .exec();
  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });router.post("",crudController(Student).post)


module.exports = router