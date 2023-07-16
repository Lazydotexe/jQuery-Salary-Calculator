$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('.submitButton').on('click', handleSubmit) //This line of code accesses the .submitButton, and on 'click' will run handleSubmit function
  $('#tableInfo').on('click', '#deleteButton', deleteInfo)
  
}
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let monthlySalary = 0; // To correctly add the monthly salary to itself in each iteration of the handleSubmit function, i needed to move the monthlySalary variable outside the function scope

function handleSubmit(event) { //function with 'handleSubmit' identifier and 'event' perameter
    event.preventDefault(); // this line will cancel any default code that html will try to run due to the form element.
    
    // console.log('inside of handleSubmit') 
    const firstName = $("#firstName").val(); //----- These lines of code create a var equil the value jquey gets from the #first/last/id/job/annualSalary id's
    const lastName = $("#lastName").val();  //------ it will hold this info to be use later in the code.
    const idNumber = $("#idNumber").val(); //-------|
    const jobTitle = $("#jobTitle").val();//--------|
    let annualSalary = $("#annualSalary").val();//--|
   
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   
   
    $("#tableInfo").append(`  
  <tr class="tableData">     
    <td>${firstName}</td>   
    <td>${lastName}</td>   
    <td>${idNumber}</td>  
    <td>${jobTitle}</td> 
    <td id="money">$${Math.floor(annualSalary).toLocaleString()}</td>
    <td><button id="deleteButton">Delete</button</td> 
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

function deleteInfo() {
  // console.log('inside deleteInfo')
  let removeSalary = $('#money').text()
  let newSalary = parseInt(removeSalary.replace(/[$,]/g, "")) / 12
  console.log(Math.floor(newSalary));
  console.log(Math.floor(monthlySalary));
  monthlySalary -= newSalary;
  $('span').remove();

  $('#totalMonthly').append(`<span id="total">$${Math.floor(monthlySalary).toLocaleString()}</span>`)



  
  $(this).parent().parent().remove();
  // console.log(this);
  


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