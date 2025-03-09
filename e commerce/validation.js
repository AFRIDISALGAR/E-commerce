$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear previous error messages
        $('.error').remove();

        // Validate Name
        if ($('#name').val().trim() === '') {
            $('#name').after('<span class="error text-danger">Name is required</span>');
            return;
        }

        // Validate Email
        const email = $('#email').val().trim();
        if (email === '') {
            $('#email').after('<span class="error text-danger">Email is required</span>');
            return;
        } else if (!isValidEmail(email)) {
            $('#email').after('<span class="error text-danger">Please enter a valid email address</span>');
            return;
        }

        // Validate Message
        if ($('#msg').val().trim() === '') {
            $('#msg').after('<span class="error text-danger">Message is required</span>');
            return;
        }

        // If all validations pass, submit the form
        this.submit();
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});