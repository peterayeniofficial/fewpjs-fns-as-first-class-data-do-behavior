/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour = time.split(":")[0]
  hour = parseInt(hour)
  if (hour < 12) {
    return "Good Morning"
  }else if (hour >17){
    return "Good Evening"
  }else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(greeting){
  const msg = document.getElementById("greeting")

  msg.innerText = greeting

}
