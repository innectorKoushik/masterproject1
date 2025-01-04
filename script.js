
// Add event listeners for mouse and keyboard interaction
document.querySelector('.services').addEventListener('mouseenter', () => {
  const submenu = document.querySelector('.submenu');
  submenu.style.display = 'block';
});

document.querySelector('.services').addEventListener('mouseleave', () => {
  const submenu = document.querySelector('.submenu');
  submenu.style.display = 'none';
});

// Ensure submenu works with keyboard focus
const servicesLink = document.querySelector('.services > a');
servicesLink.addEventListener('focus', () => {
  const submenu = document.querySelector('.submenu');
  submenu.style.display = 'block';
});


// Modal functionality
const modal = document.getElementById('contactModal');
const consultingBtn = document.getElementById('consultingBtn');
const closeBtn = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

function openModal() {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleSubmit(e) {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
  closeModal();
}

function handleKeydown(e) {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
}

function handleModalClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}

// Event listeners
consultingBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', handleModalClick);
contactForm.addEventListener('submit', handleSubmit);
document.addEventListener('keydown', handleKeydown);

// Example of form validation
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value.trim().length < 50) {
    isValid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Update the handleSubmit function to include validation
function handleSubmit(e) {
  e.preventDefault();
  if (validateForm()) {
    // Add your form submission logic here
    console.log('Form submitted successfully');
    closeModal();
  } else {
    console.log('Form validation failed');
  }
}

// Initialize the script
function init() {
  consultingBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', handleModalClick);
  contactForm.addEventListener('submit', handleSubmit);
  document.addEventListener('keydown', handleKeydown);
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

console.log('Script loaded successfully');