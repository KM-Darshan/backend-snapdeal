
let Products=require("../module/productschema")

let product=async (req,res)=>
    {
        let name=req.body.name
        let price=req.body.price
        let img=req.body.img
        let description=req.body.description
        let category=req.body.category

        console.log(name,price,img,description,category)
        let newProduct=new Products({name,price,img,description,category})
        await newProduct.save()
  
    res.send(" successfull")
}


module.exports=product