const express = require("express");
const bodyParser = require('body-parser');
const app=express();
const router = express.Router();
const userModel=require('./model/registerschema')
require('./mongoconnection')
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async (req,res)=>{
    
   
    try{
     let data = await userModel.find({});
     res.render('index',{data:data})
   } catch(err){
     console.log(err);
   }
    

   });

// data post api
app.post('/', (req, res) => {
    let user = new userModel({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        project: req.body.project
    });

    user.save()
        .then((result) => {
            console.log("Save data: " + result);
            res.redirect('/')
           
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error saving data');
        });
});






// delete api


router.get("/delete/:id", async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        console.log(deletedUser);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting user');
    }
});


//edit api down here
router.get("/edit/:id", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.render('edit', { user: user });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error editing user');
    }
});

// Handle the editing process
router.post("/edit/:id", async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(updatedUser);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating user');
    }
});

app.use('/', router);
app.listen(8090,()=>{
    console.log('port is run')
})