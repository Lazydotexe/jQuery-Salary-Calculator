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
  const jobTitle = $("#jobTitle").val();//--------| I think of it as, Hey jquery, look at #id name and grab its value and put it inside the variable i made.
  let annualSalary = $("#annualSalary").val();//--|

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  $("#tableInfo").append(`  
  <tr class="tableData">     
    <td>${firstName}</td>   
    <td>${lastName}</td>   
    <td>${idNumber}</td>  
    <td>${jobTitle}</td> 
    <td id="money">$${Math.round(annualSalary).toLocaleString()}</td>
    <td><button id="deleteButton">Delete</button</td> 
  </tr> `)


  $('span').remove();
  monthlySalary += annualSalary / 12
  if (monthlySalary >= 20000) {
    console.log('monthley salary', monthlySalary)
    $('span').addClass('yesRed');
    $('#totalMonthly').append(`<span class="yesRed">$${Math.round(monthlySalary).toLocaleString()}</span>`)

  } else {
    $('#totalMonthly').append(`<span id="total">$${Math.round(monthlySalary).toLocaleString()}</span>`)
  }
  $('#myForm')[0].reset();
}




  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Line 74 sets removeSalary = this/<button> then targets the parant element (<td>) then 
// targets the sibling of <td> that has the id #money and / .text() or gets / the string listed there

// Line 75 has a lot going on...  .parseInt() converts a string to a int. like "26,000" to 26000. .replace()
// will replace one thing for another. Coupled with the first / (expression) character and the [] which holds 
// the items to be replaced followed by a g for global. The g lets the [ ] check basically for more then one occurance
// so if the variable had multiple commas or other special characters it would catch them all. AFTER the comma is 
// where you put what you want to replace with. In this case do not want the included to i just replace with an
// empty string. Finally the whole varialbe is divided by 12

// Line XX re defines monthlySalary = monthlySalary - newSalary
// Line XX removes the whole <span> element including what it contains to prep for a new span to be put in its place
// Line XX accesses #totalMonthly id and appends a new span element with a string interpolation of monthlySalary (rounded up and converted from a int to a string)
// Line XX accesses (this) or the <button> and then targets the .closest <tr> element and removes it thus removing the whole row of info once delete it clicked.


function deleteInfo() {
  let removeSalary = $(this).parent().siblings("#money").text(); 
  let newSalary = parseInt(removeSalary.replace(/[$,]/g, "")) / 12;  
  monthlySalary -= newSalary;
  $('span').remove();
  $('#totalMonthly').append(`<span id="total">$${Math.round(monthlySalary).toLocaleString()}</span>`);
  $(this).closest("tr").remove();
}

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------













































