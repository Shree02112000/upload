const express=require('express')
const router= express.Router()

const EmployeeController  = require('../controller/Employeecontroller')

router.get('/',EmployeeController.index)
router.get('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.put('/update',EmployeeController.update)
router.delete('/delete',EmployeeController.destroy)

module.exports = router