const { response } = require('express')
const asyncHandler = require('express-async-handler')
const employeeModel = require('../models')

const getEmployees = asyncHandler(async(request,response) => {
    const employees = await employeeModel.find()
    if(!employees)
    {
        response.send({ErrorMessage: "No employees found"})
        return
    }
    else{
    response.send(employees)
    return
    }
})

const getEmployee = asyncHandler(async(request,response) => {
    const name = request.params.name

    const employee = await employeeModel.findOne({"name":name})
    
    if(!employee){
        response.send({ErrorMessage:"No employee found!"})
        return
    }
    else{
        response.send({employee})
        return
    }

})

let deleteEmployee = asyncHandler(async (request,response) =>{
    let deleteId = request.params.id
    let employeeDeleted = await employeeModel.findOneAndDelete({_id:deleteId})

    if(!employeeDeleted){
        response.send({ErrorMessage: "Employee not deleted"})
        return
    }
    else{
        response.send({employeeDeleted})
    }
})

let addEmployee = asyncHandler(async (request,response) => {
    let {name,phoneNumber} = request.body
    let newEmployee = await employeeModel.create({name,phoneNumber})

    if(!newEmployee)
    {
        response.send({
            ErrorMessage:"Employee not added"
        })
        return
    }
    else{
        response.send({newEmployee})
        return
    }

})

let updateEmployee = asyncHandler(async (request,response) =>{
    let name = request.params.name
    let {phoneNumber} = request.body

    let originalEmployee = await employeeModel.findOne({"name":name})

    let updatedEmployee = originalEmployee

    updatedEmployee = {name,phoneNumber}

    await employeeModel.findOneAndDelete({"name":originalEmployee.name})

    let employeeUpdated = await employeeModel.create(updatedEmployee)

    if(!employeeUpdated){
        request.send({
            ErrorMessage: "Employee not updated"
        })
        return
    }
    else{
        response.send({employeeUpdated})
        return
    }

    
})



module.exports = {
    getEmployees,
    getEmployee,
    deleteEmployee,
    addEmployee,
    updateEmployee
}