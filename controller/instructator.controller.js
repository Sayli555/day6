const express = require("express")

const Instructor = require("../models/instructator.model")
const crudController = require("./crud.controller")

const router = express.Router();

router.get("", async (req, res) => {
    try {
      // const tags = await Post.find({tag_ids: "dskfgdskf"}).lean().exec()
      const posts = await Instructor.find()
        .populate({ path: "user_id", select: ["first_name", "last_name"] })
        .populate({ path: "student_ids", select: [" roll_id", "current_batch"] })
        .lean()
        .exec();
  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
router.post("",crudController(Instructor).post)


module.exports = router