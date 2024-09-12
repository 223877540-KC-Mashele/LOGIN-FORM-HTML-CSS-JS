document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.sign-in-container form');
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const submitButton = loginForm.querySelector('button');
  
  // Create error message elements
  const emailError = document.createElement('span');
  emailError.classList.add('error');
  emailError.textContent = 'Email is required';
  
  const passwordError = document.createElement('span');
  passwordError.classList.add('error');
  passwordError.textContent = 'Password is required';
  
  // Append error messages to the form
  emailInput.insertAdjacentElement('afterend', emailError);
  passwordInput.insertAdjacentElement('afterend', passwordError);

  // Function to validate the form
  function validateForm() {
      let valid = true;

      // Clear previous errors
      emailError.style.display = 'none';
      passwordError.style.display = 'none';

      // Check if email field is empty
      if (emailInput.value.trim() === '') {
          emailError.style.display = 'block';
          valid = false;
      }

      // Check if password field is empty
      if (passwordInput.value.trim() === '') {
          passwordError.style.display = 'block';
          valid = false;
      }

      return valid;
  }

  // Add event listener to the form's submit event
  loginForm.addEventListener('submit', (event) => {
      if (!validateForm()) {
          event.preventDefault(); // Prevent form submission if validation fails
      }
  });

  // Add event listeners to remove error messages on input
  emailInput.addEventListener('input', () => {
      if (emailInput.value.trim() !== '') {
          emailError.style.display = 'none';
      }
  });

  passwordInput.addEventListener('input', () => {
      if (passwordInput.value.trim() !== '') {
          passwordError.style.display = 'none';
      }
  });
});
