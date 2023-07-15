$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('.submitButton').on('click', handleSubmit) //This line of code accesses the .submitButton, and on 'click' will run handleSubmit function
  
}


let monthlySalary = 0; // To correctly add the monthly salary to itself in each iteration of the handleSubmit function, i needed to move the monthlySalary variable outside the function scope

function handleSubmit(event) { //function with 'handleSubmit' identifier and 'event' perameter
    event.preventDefault(); // this line will cancel any default code that html will try to run due to the form element.
    
    console.log('inside of handleSubmit') // testing to see if the function is getting run....It is.
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const idNumber = $("#idNumber").val();
    const jobTitle = $("#jobTitle").val();
    let annualSalary = $("#annualSalary").val();
    $("#tableInfo").append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button>Delete</button</td>
  </tr> `)
    $('span').remove();
    monthlySalary += annualSalary / 12
    if (monthlySalary >= 20000) {
        console.log('monthley salary', monthlySalary)
        $('span').addClass('yesRed');
        $('#totalMonthly').append(`<span class="yesRed">$${Math.floor(monthlySalary).toLocaleString()}</span>`)

    } else {
    $('#totalMonthly').append(`<span id="total">$${Math.floor(monthlySalary).toLocaleString()}</span>`)
    }
    $('#myForm')[0].reset();
   

    

    


    
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