// Preserve Data in the browser

const form = document.getElementById('form');
let collectedInputData;
form.addEventListener('submit', (event) => {
  const formInputFieldData = new FormData(event.target);
  collectedInputData = {};
  formInputFieldData.forEach((value, key) => {
    collectedInputData[key] = value;
  });
  const formData = JSON.stringify(collectedInputData);
  localStorage.setItem('Data-Collection', formData);
});

const savedFormData = JSON.parse(localStorage.getItem('Data-Collection'));
window.onload = () => {
  document.getElementById('fullName').value = savedFormData.fullName;
  document.getElementById('email').value = savedFormData.email;
  document.getElementById('message').value = savedFormData.message;
};