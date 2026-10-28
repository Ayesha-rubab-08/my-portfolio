// Smooth scrolling for internal links (if not fully supported by CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple contact form submission handler
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Basic form validation can be added here.
    alert('Thank you for reaching out! I will get back to you soon.');
    // Reset the form after submission
    this.reset();
  });
  