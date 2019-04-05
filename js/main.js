// Get input field
var input = document.querySelector('input');

// Listen for keydown event on input field
input.addEventListener('keydown', function(event) {
  var userInput = input.value;
  var greeting = document.querySelector('.col-md-6');
  var p = document.createElement('p');

  // If enter key was pressed
  if (event.key === 'Enter') {
    if (userInput.length > 0) {
      p.innerText = `Hello ${userInput}, nice to meet you!`;
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
