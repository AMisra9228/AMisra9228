document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Placeholder message — integrate with backend or email service for real functionality
  document.getElementById('form-message').textContent = "Thank you! Your message has been received.";
  this.reset();
});
