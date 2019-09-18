// Get input field
var input = document.querySelector('input');

// Get element to append greeting to
var greeting = document.querySelector('.col-md-6');

// Listen for keydown event on input field
input.addEventListener('keydown', function(event) {

  // If enter key was pressed
  if (event.key === 'Enter') {
    // Get user input
    var userInput = input.value;
    // if user input length is not empty
    if (userInput.length > 0) {
      // Create <p> element
      var p = document.createElement('p');
      // Update inner text of created <p> element
      p.innerText = `Hello ${userInput}, nice to meet you!`;
      // Append created <p> element with inner text to greeting element
      greeting.appendChild(p);
    } else {
      alert('Please enter your name');
    }
    // Prevent default behavior
    event.preventDefault();
    // Clear input field
    input.value = '';
  }

}, false);
