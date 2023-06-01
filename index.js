// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

//Your JavaScript code for form submission message and validation

$(document).ready(function() {
  var form = $('.contact__form');
  var messageContainer = $('.message-container');

  form.on('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
      displayMessage("success", "Form submitted successfully!");
      form[0].reset();
    } else {
      displayMessage("danger", "Please fill out all the required fields correctly.");
    }
  });

  function validateForm() {
    var nameInput = $('#name');
    var emailInput = $('#email');
    var messageInput = $('#message');

    if (nameInput.val().trim() === "" || emailInput.val().trim() === "" || messageInput.val().trim() === "") {
      return false;
    }

    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailInput.val().trim())) {
      return false;
    }

    return true;
  }

  function displayMessage(type, message) {
    var alertClass = "alert-" + type;
    var messageElement = $('<div>').addClass('alert ' + alertClass).text(message);

    // Additional styles for the message
    messageElement.css({
      'font-size': '20px',
      'font-weight': 'bold',
      'text-align': 'center',
      'margin-top': '10px'
    });

    messageContainer.empty().append(messageElement);

    setTimeout(function() {
      messageElement.remove();
    }, 5000);
  }
});
