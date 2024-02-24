const mongoose = require('mongoose');
 var mon = 'mongodb+srv://Rohitkumar:rohit@cluster0.9cenbvx.mongodb.net/?retryWrites=true&w=majority'
 mongoose.connect(mon,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
 })

 .then(() => console.log('connection Ok'))
 .catch((err) => console.log(err))


 module.exports=mongoose