const express = require('express')
const {getEmployees,getEmployee,deleteEmployee,addEmployee, updateEmployee} = require('../Controllers/EmployeesController')


const router = express.Router()

router.use(express.json())

router.get('/', getEmployees)
router.get('/:name',getEmployee)
router.post('/', addEmployee)
router.delete('/:id', deleteEmployee)
router.post('/:name',updateEmployee)

module.exports = router