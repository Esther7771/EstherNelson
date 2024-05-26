document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Emails must match.');

            
            confirmEmail.style.borderColor = 'red';

            
            alert('Emails do not match. Please try again.');
        } else {
            confirmEmail.setCustomValidity('');

            
            confirmEmail.style.borderColor = 'green';

            
            alert('Verification successful!');


        }
    }

    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});