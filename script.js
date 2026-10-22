// Feature 1: Button click message
function showMessage() {
    document.getElementById("demo").innerHTML = 
        "💻 Great job! You're interacting with my first website project. Thank you for being here!";
}

// Feature 2: Form submit handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    
    const name = document.getElementById("name").value;
    document.getElementById("formResult").innerHTML = 
        `✅ Thank you, ${name}! Your message was sent successfully!`;
    
    // Clear form
    this.reset();
});
