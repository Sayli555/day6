const mongoose = require("mongoose");

const batchSchema= new mongoose.Schema({
    batch_name : {type:String , required:true},
    instructor_ids :[{type:mongoose.Schema.Types.ObjectId,ref:"instructor",required:true}],
    student_ids:[{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true}]
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("batch",batchSchema)