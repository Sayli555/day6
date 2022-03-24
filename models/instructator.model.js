const mongoose = require("mongoose");

const instSchema = new mongoose.Schema({
   student_ids:[{type:mongoose.Schema.Types.ObjectId,ref :"student"}],
   user_id : {type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,}
},{
    versionKey: false,
    timestamps : true,
})

module.exports = mongoose.model("instructator",instSchema );