const express= require("express");

const path=require("path");


const app = express()
// require('dotenv').config()

const PORT = process.env.PORT || 5000;


// set path for all views
// app.set('views',path.join(__dirname,"views"))
// determin the pathe for public file that contain css js img
app.use(express.static(path.join(__dirname, '/public')));

app.get('/' , (req , res)=>{

    res.render("index.ejs");

})

app.listen(PORT , ()=> console.log('> Server is up and running on PORT : ' + PORT))