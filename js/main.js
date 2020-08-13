$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));
  // console.log(age);
  if (age > 18) {
    $("#ofAge").show();
  } else if (age === 18) {
    alert("Congrats! You can now vote");
    $("#ofAge").show();
  } else {
    alert("Whoops! You are underage")
    $("#underage").show();
  }
});