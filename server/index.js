if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
}
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection is Successfull")
}).catch((err)=>{
    console.log(err);
})
app.use(express.static(path.join(__dirname, '../' , 'client', 'build')));
app.use("/api/user" , authRoute);
app.use("/api/products" , productRoute);
app.get("*" , async(req , res) =>{
    res.sendFile(path.join(__dirname, '../' , 'client', 'build', 'index.html'));
})
app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Server is running.")
})