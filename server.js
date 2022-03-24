const express = require("express");

const app = express();

const connect= require("./configs/db")
const userController = require("./controller/user.controller")
const evalController = require("./controller/evaluation.controller")
const batchController = require("./controller/batch.controller")
const iaController = require("./controller/instructator.controller")
const studentController = require("./controller/student.controller")
const submissionController = require("./controller/submission.controller")



app.use(express.json())

app.use("/users",userController)
app.use("/evals",evalController)
app.use("/batches",batchController)
app.use("/ias",iaController)
app.use("/students",studentController)
app.use("/submissions",submissionController)



app.listen(1234,async()=>{
    await connect;
    console.log("listening on port 1234")
})

