const connectDB=require("./db/connect");
const product =require("./models/product");
const productJson=require("./products.json");
const start=async()=>{
    try{
        await connectDB(uri);
        await product.deleteMany();
        await product.create(productJson);
        console.log("success") ;
    }catch(err){
        console.log(err);
    }
};


start()

// we can write above logic in this way 
// connectDB(uri);
// product.create(productJson);
// console.log("success")