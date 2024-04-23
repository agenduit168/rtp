var elements = document.getElementsByClassName("winrate-percentage");

// Loop through each element
for (var i = 0; i < elements.length; i++) {
  // Generate a random value between 90 and 100
  var randomValue = Math.floor(Math.random() * 71) + 30;
  // Append a percentage sign to the value
  var randomValueWithPercent = randomValue + "%";
  // Set the innerHTML of the element to the value
  elements[i].innerHTML = randomValueWithPercent;
  // Get the next sibling element with id "winrate-bar"
  var barElement = elements[i].nextElementSibling;
  // Set the aria-valuenow attribute of the bar element to the value
  barElement.setAttribute("aria-valuenow", randomValue);
  // Set the style width of the bar element to the value with percentage sign
  barElement.style.width = randomValueWithPercent;
  // Remove the existing class of the bar element
  barElement.classList.remove("bg-green", "bg-yellow", "bg-red");
  // Add a new class of the bar element based on the value
  if (randomValue > 70) {
    // If the value is greater than 50, add bg-green class
    barElement.classList.add("bg-green");
  } else if (randomValue < 70 && randomValue >= 30) {
    // If the value is less than 50 and greater than or equal to 30, add bg-yellow class
    barElement.classList.add("bg-yellow");
  } else {
    // If the value is less than 30, add bg-red class
    barElement.classList.add("bg-red");
  }
}