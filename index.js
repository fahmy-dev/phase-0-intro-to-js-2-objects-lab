// Write your solution in this file!
const employee = {
    name: "Fahmy",
    streetAddress: "SouthCity",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const delemployee = {...employee};
    delete delemployee[key];
    return delemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
