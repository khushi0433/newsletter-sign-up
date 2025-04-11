document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const newsletterCard = document.querySelector('.newsletter-card');
    const successCard = document.querySelector('.success-card');
    const dismissBtn = document.getElementById('dismiss-btn');
    const submittedEmail = document.getElementById('submitted-email');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      
      if (!validateEmail(email)) {
        emailInput.classList.add('error');
        errorMessage.style.display = 'block';
        return;
      }
  
      showSuccess(email);
    });
  
    dismissBtn.addEventListener('click', () => {
      newsletterCard.style.display = 'flex';
      successCard.style.display = 'none';
      emailInput.value = '';
    });
  
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('error')) {
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
      }
    });
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function showSuccess(email) {
      submittedEmail.textContent = email;
      newsletterCard.style.display = 'none';
      successCard.style.display = 'block';
    }
  });