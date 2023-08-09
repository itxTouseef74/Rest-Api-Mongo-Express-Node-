const mongoose=require("mongoose")

uri="mongodb+srv://Touseef:Touseef2252@productapi.zdyxio2.mongodb.net/ProductApi?retryWrites=true&w=majority"

const connectDB=()=>{
    console.log("db connect")
    return mongoose.connect(uri)
}
module.exports=connectDB;