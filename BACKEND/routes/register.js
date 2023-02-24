const router = require("express").Router(); //import package
const { response } = require("express");
const reg_cus = require("../Models/register"); //use
let Reg_cus = require("../Models/register");//use n import model file
const multer = require('multer')


   //storage
   const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage:Storage
}).single('testImage')

http://localhost:8060/user//regCustomer
router.route("/regCustomer").post((req,res)=>{ //post - http request method
                                   //js arrow function

    //create variables
    const first_name = req.body.first_name;      //get insert data add n send to databae to use this variables
    const last_name = req.body.last_name;
    const mobileNo = req.body.mobileNo;
    const email = req.body.email;            //send request in frontend to backend to save data in databas (as a request's body )
    const password = req.body.password;
    const image 
    
    //const images = req.body.images;
    

    const newRegCustomer = new Reg_cus({
        //initiolize that properties
        first_name,
        last_name,
        mobileNo,
        email,
        password,
        
        
    })
    //insert js objects to DB
    newRegCustomer.save().then(() => {       //js promis (same if else)
        res.json("User Registered successfully")  // that msg sent as a response, to front end, json format
    }).catch((err) =>{
        console.log(err);
    })         
})

//retrive

router.get("/regCustomer" , (req,res)=>{
    Reg_cus.find().exec((err,reg_cus) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCustomer:reg_cus
        });
    });
});


//get a single data
/*
router.get("/regCustomer/:id", (req, res) =>{
    let ptId = req.params.id;

    Package.findById(ptId,(err,package)=>{

        if(err){
            return res.status(400).json({success:false, err});


        }

        return res.status(200).json({
            success:true,
            package
        })
    });

})

*/



// Delete
router.route("/regCustomer/delete/:id").delete(async(req,res) => {
    let cId = req.params.id;

    await Reg_cus.findByIdAndDelete(cId).then(()=> {
        res.status(200).send({status:"Logout successfully"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with logout",error: err.message});
    })
})




module.exports = router;