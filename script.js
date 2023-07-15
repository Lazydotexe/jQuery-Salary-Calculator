$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('.submitButton').on('click', handleSubmit)
  
}


function handleSubmit(event) {
    event.preventDefault();
    console.log('inside of handleSubmit')
}












































// const employeesData = [{
//     firstName: "Jenn",
//     lastName: "Flemming",
//     idNumber: 8675309,
//     jobtitle: "Head of Operations",
//     annualSalary: 1500000
// },{
//     firstName: "Andrew",
//     lastName: "Cannon",
//     idNumber: 8008,
//     jobtitle: "Web Developer",
//     annualSalary: 70000
// },{
//     firstName: "John",
//     lastName: "Cena",
//     idNumber: 7337,
//     jobtitle: "Janitor",
//     annualSalary: 40000
// },{
//     firstName: "Bobby",
//     lastName: "Flay",
//     idNumber: 12345,
//     jobtitle: "Driver",
//     annualSalary: 30000
// },
// ]

// console.log(employeesData);