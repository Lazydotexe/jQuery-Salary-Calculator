$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('#fireButton').on('click', addFire)
  $('#iceButton').on('click', addIce)
  $('.submit-button').on('click', handleSubmit)
  $('#tableAffirm').on('click', '#affirmRow', deleteRow)
}

let fireEmoji = '🔥'
let iceEmoji = '❄️'

function addFire() {
  console.log(fireEmoji)
  $('#magicalDiv').append(` 
  <span> ${fireEmoji} </span>`);
  // Potential alternative 👇
  // // $('#magicalDiv').append( `  
  // <span class="fireEmoji">🔥</span>`);
}

function addIce() {
  console.log(iceEmoji)
  $('#magicalDiv').append(` 
  <span> ${iceEmoji} </span>`);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log('in handleSubmit')
  const affImput = $("#affirmInput").val();
  const authorImput = $("#authorInput").val();

  console.log('toDoText', affImput)
  $("#tableAffirm").append(`
  <tr id= "affirmRow">
    <td>${affImput}</td>
    <td>${authorImput}</td>
    <td><button>❌</button</td>
  </tr> `)
}

function deleteRow(){
  console.log('inside deleteRow', $(this))
  $(this).remove()

}