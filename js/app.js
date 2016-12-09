(function () {
  var input = document.getElementById('name')

  input.addEventListener('keypress', eventHandler, false)

  function eventHandler (event) {
    if (event.which === 13) {
      if (input.value.length === 0) {
        var warning = 'text-danger'
        var message = 'The text field is empty. Please enter your name.'
        writeToDocument(event, message, warning)
      } else {
        message = 'Hello ' + input.value + ', nice to meet you!'
        writeToDocument(event, message)
      }
    }
  }

  function writeToDocument (event, message, warning) {
    var column = document.querySelector('.col-md-6')
    var p = document.createElement('p')
    p.innerHTML = message
    p.classList.add(warning)
    column.appendChild(p)
    event.preventDefault()
  }
})()

