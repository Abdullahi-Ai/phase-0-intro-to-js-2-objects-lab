// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "1234 Main St"
  };
  
  // 2. updateEmployeeWithKeyAndValue() - Returns a new object with the updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 3. destructivelyUpdateEmployeeWithKeyAndValue() - Mutates the original employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 4. deleteFromEmployeeByKey() - Returns a new object with the key removed
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 5. destructivelyDeleteFromEmployeeByKey() - Mutates the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }