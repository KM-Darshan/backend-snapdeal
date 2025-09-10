let mongoose=require("mongoose")
let connectdb=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("connected to mdb"))
    .catch(()=>console.log("failed to connected"))
}
module.exports=connectdb