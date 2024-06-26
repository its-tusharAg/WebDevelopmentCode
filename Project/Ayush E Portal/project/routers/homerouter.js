const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema');
Router.get('/',(err,res)=>{
    res.render('register',{title:'',password:'',email:''})
})

Router.post('/register',async(req,res)=>{
    try{
            const{
                name,number,email,password,cpassword
            } = req.body;
            if(password === cpassword){
                const userData = new homeSchema({
                name,number,email,password
            })
            userData.save(err=>{  
                if(err){
                   console.log("error")       
                }else
                {
                    res.render('register',{title:'Done',password:'',email:''})
                }
            })
            const useremail = await homeSchema.findOne({email:email });
            if(email === useremail.email){
                res.render('register',{title:'',password:'',email:'email is already registered'})
            }
            else{
                console.log('error ')
            }
            }
            else{
                res.render('register',{title:'',password:'password did not match',email:''})
            }
    }catch(error)
    {
        console.log(error)
        res.render('register',{title:'Error in code',password:'',email:''})
    }
})

//signin
Router.post('/login',(req,res)=>{    
    const{
        email,password
    }=req.body;
    homeSchema.findOne({email:email},(err,result) =>{
        if(email === result.email){  
            res.render('dashboard',{name:result.name })
        }   
        else{
            console.log('Fail')
        }
    })
})
module.exports = Router;  