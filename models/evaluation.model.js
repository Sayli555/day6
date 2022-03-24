// Evaluation :- has some evaluation related details like date_of_evaluation, instructor( this will reference the user collection), batch_id ( this will reference the batches collection)

const mongoose = require("mongoose")

const evaluationSchema = new mongoose.Schema({
    date_of_evaluation:{type:Date , required:true},
    instructor_ids :[{type:mongoose.Schema.Types.ObjectId,ref:"instructor",required:true}],
    batch_ids :[{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true}],
})

module.exports = mongoose.model("evaluation",evaluationSchema)