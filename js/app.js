(function () {
  document.documentElement.addEventListener('keypress', eventHandler);

  function eventHandler (event) {
    const input = event.target.closest('#name');
    const warning = 'text-danger';
    let message = 'The text field is empty. Please enter your name.';
    if (event.which === 13) {
      if (input.value.length === 0) {
        writeToDocument(event, message, warning);
      } else {
        message = `Hello ${input.value} nice to meet you!`;
        writeToDocument(event, message);
      }
    }
  }

  function writeToDocument (event, message, warning) {
    const column = document.querySelector('.col-md-6');
    const p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add(warning);
    column.appendChild(p);
    event.preventDefault();
  }
})();
