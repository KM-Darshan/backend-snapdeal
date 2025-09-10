let express=require("express")
let router=express.Router()

let product=require("../controllers/productcontroller")


router.post("/product",product)

module.exports=router