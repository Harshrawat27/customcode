document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button[name="popup"]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      alert('Current Date and Time: ' + new Date().toLocaleString());
    });
  });
});
