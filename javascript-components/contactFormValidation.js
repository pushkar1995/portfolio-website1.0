const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  const lowercaseEmail = emailValue.toLowerCase();
  if (lowercaseEmail !== emailValue) {
    document.getElementById('error').innerHTML = 'Email must be in lowercase letters';
    event.preventDefault();
    emailInput.value = '';
    emailInput.focus();
  }
});