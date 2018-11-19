(function (exports) {

  function eventHandler (event) {
    const input = event.target.closest('#name');
    const column = document.querySelector('.col-md-6');
    const p = document.createElement('p');
    if (event.which === 13) {
      if (input.value.length === 0) {
        p.innerText = 'The text field is empty. Please enter your name.';
        p.classList.add('text-danger');
      } else {
        p.innerText = `Hello ${input.value}, nice to meet you!`;
      }
      column.appendChild(p);
      event.preventDefault();
    }
  }

  exports.eventHandler = eventHandler;

})(typeof exports === 'undefined' ? window.app = {} : exports)
