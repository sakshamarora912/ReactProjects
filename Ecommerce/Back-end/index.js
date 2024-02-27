const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection with MonogoDb
mongoose.connect("mongodb+srv://sakshamarora9120:hello1234@cluster0.zsuc6j3.mongodb.net/Ecommerce")

// API creation
app.get("",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engin
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage});

//creating upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product
const Product = mongoose.model("Product",{
    id:{type:Number,require:true},
    name:{type:String,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
    new_price:{type:String,require:true},
    old_price:{type:String,require:true},
    date:{type:Date,default:Date.now},
    available:{type:Boolean,default:true},
})

app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let new_id=0;
    if(products.length>0){
        let last_products_array=products.slice(-1);
        let last_product=last_products_array[0];
        new_id=last_product.id+1;
    }
    else{
        new_id=1;
    }
    console.log(new_id);
    const product=new Product({
        id:new_id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API FOR deleting Products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products=await Product.find({});
    console.log("All Products Fetched");
    res.send(products)
    });

app.listen(port,(error)=>{
    if(!error){console.log("Server Running on Port"+port)}
    else{console.log("Error:error")}
})
