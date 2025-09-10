let express=require("express")
let cors=require('cors')
let dotenv=require("dotenv")
let product=require("./routes/productroutes")
let connectdb=require("./config/databaseconfig")
dotenv.config()
let app=express()
app.use(cors())

let PORT=process.env.PORT
connectdb()
app.use (express.json())
app.use('/',product)

app.listen(PORT,()=> {
    console.log(`server is runnning ${PORT}`)
})