// Submission :- has some submissions related details like evaluation_id(this will reference the evaluations collection), student_id(this will reference the user collection), marks, createdAt, updatedAt

const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
    marks:{type:Number , required:true},
    evaluation_id:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true},
    student_id :{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true},
})

module.exports = mongoose.model("submission",submissionSchema)