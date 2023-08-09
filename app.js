const express = require("express");
const app = express();
const port =  8000;
const connectDB = require("./db/connect");
const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/products", products_routes);
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
