const express = require("express")

const Submission = require("../models/submission.model")
const crudController = require("./crud.controller")

const router = express.Router();

router.get("", async (req, res) => {
    try {
      // const tags = await Post.find({tag_ids: "dskfgdskf"}).lean().exec()
      const posts = await Submission.find()
        .populate({ path: "evaluation_id", select: ["date_of_evaluation"]})
        .populate({ path: "student_id", select: ["roll_id"]})
        .lean()
        .exec();
        arr=posts.map((ele)=>{
            return ele.marks
        })

        console.log(Math.max(...arr));
        return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  router.post("",crudController(Submission).post)


module.exports = router