const mongoose = require('mongoose');

const DB = "mongodb+srv://aman:21632AMAN@cluster0.jrfj4bn.mongodb.net/mernstck?retryWrites=true&w=majority";


mongoose.connect(DB).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("not connected to database");
});
