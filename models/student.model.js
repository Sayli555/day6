// You will create below models
// Users :- has all the basic details like firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt
// Student :- has fields like roll id, current batch, createdAt, updatedAt
// Batch :- has fields like Batch name, createdAt, updatedAt
// Evaluation :- has some evaluation related details like date_of_evaluation, instructor( this will reference the user collection), batch_id ( this will reference the batches collection)
// Submission :- has some submissions related details like evaluation_id(this will reference the evaluations collection), student_id(this will reference the user collection), marks, createdAt, updatedAt
// Now we need to store students evaluation results so you need to first figure out where ideally it should be saved and then we should be able to run the following queries

// fetch all students who gave a particular evaluation
// fetch the student with his personal details who scored the highest marks in the evaluation
// Refactor the code into an MVC pattern

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    roll_id:{type:Number , required:true},
    current_batch:{type:String , required:true},
    user_id : {type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,}
},{
    versionKey: false,
    timestamps : true,
})

module.exports = mongoose.model("student",studentSchema );