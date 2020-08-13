$(document).ready(function(event) {
  event.preventDefault();
  const age = parseInt(prompt("How old are you?"));
  // console.log(age);
  if (age > 18) {
    $("#ofAge").show();
  } else if (age === 18) {
    alert("Congrats! You can now vote");
  } else {
    $("underage").show();
  }
});