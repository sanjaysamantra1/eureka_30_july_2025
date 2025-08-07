let employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
]
let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
]

//add Dept info for each employee
let resultArr = employees.map(emp => {
    let deptInfo = departments.find(dept => dept.eId === emp.eId);
    if (deptInfo) {
        emp.dept = deptInfo.dept;
    }
    return emp;
});
console.log(resultArr)