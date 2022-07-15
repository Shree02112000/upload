const { response } = require("express")
const Employee = require("../models/Employee")

const index = ( req,res ,next)=>{
   
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(err=>{
        res.json({
            message:'An error occured'
        })
    })
}

const show =(req,res,next)=>{

    let employeeID =req.body.employeeID
   // console.log(employeeID);
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}

    const store=(req,res,next)=>{
        const employee = new Employee({
      
            name:req.body.name,
            designation:req.body.designation,
            email:req.body.email,
            phone:req.body.phone,
            age:req.body.age
        })
      employee.save()
      .then(response=>{
        res.json({
            message:'employee added successfully'
        })
      })
       .catch(error=>{
        res.json({
            message:'An error occured'
        })
       })
    }
    
    const update=(req,res,next)=>{
            let employeeID=req.body.employeeID
            let updatedData={
                name:req.body.name,
                designation:req.body.designation,
                email:req.body.email,
                phone:req.body.phone,
                age:req.body.age
                
            }
            Employee.findByIdAndUpdate(employeeID,{$set: updatedData})
            .then(()=>{
                res.json({
                    message:'employee updated successfully'
                })
            })
                .catch((error)=>{
                    res.json({
                        message:'an error occured'
                    })
                })
                
    }

    const destroy=(req,res,next)=>{
        let employeeID=req.body.employeeID
        Employee.findByIdAndRemove(employeeID )
        .then(()=>{
            res.json({
                message:'enployee deleted successfully'
            })
        })
        .catch((err)=>{
            res.json({
                message:'an error occcured'
            })
        })
    }

    module.exports = {

        index,show,store,update,destroy
    }