// Write your solution in this file!
const employee = {name: 'Jon Smith', streetAddress:'19 Cool St., Liberty, NY 12754'}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
        newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee}
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

