// Set the date we're counting down to
var countDownDate = new Date("2018, 11, 29").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  document.getElementById("time-dowm-counter").innerHTML = days + " Días"

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-dowm-counter").innerHTML = "0 Días";
  }
}, 1000);