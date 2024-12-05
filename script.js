// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('reserveBtn').addEventListener('click', function() 
    {
    
    });
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);

    // Clear the form
    document.getElementById('contact-form').reset();

});
