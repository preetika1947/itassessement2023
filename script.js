// script.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validation logic here
    // Example: Check if name, email, and message are filled
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    
    // Form submission logic here
    alert("Form submitted successfully!");
    form.reset();
  });
});
