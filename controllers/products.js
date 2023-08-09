const product = require("../models/product");

const getAllProducts = async (req, res) => {
  const {name,price,sort}=req.query;
  const queryObject={};
  if(name){
    // regex is used for good searching 
    queryObject.name={$regex:name,$options:"i"} ; 
  }
  if(price){
    queryObject.price=price;
  }
  let apiData=product.find(queryObject)
  if(sort){
    let sortFix=sort.replace  (",","");
    apiData=apiData.sort(sortFix)
  }

let page=Number(req.query.page)||1;
let limit=Number(req.query.limit)||5;
let skip=(page -1)* limit;
apiData=apiData.skip(skip).limit(limit)

  console.log(queryObject);
 
  // const myData = await product.find(queryObject);
  const myData = await apiData;
  res.status(200).json({ myData,nbHits:myData.length });


  // const myData = await product.find(req.query);
  // console.log("query is working fine ", queryObject);
 
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "i am getAllProductsTestin" });
};
module.exports = { getAllProducts, getAllProductsTesting };
