const post = (model)=>async(req,res)=>{
    try{
        const item = await model.create(req.body);

        res.status(201).send(item)
        
    }
   catch(err){
    res.status(500).send(err.message)
   }
};

const get = (model)=>async(req,res)=>{
    try{
        const item = await model.find().lean().exec();

        res.status(201).send(item)
    }
    catch(err){
        res.status(500).send(err.message)
       }
   
}

module.exports=(model)=>{
    return {post:post(model),
        get:get(model)
    }
    
}