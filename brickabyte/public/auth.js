/* Signup */
const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error').forEach(element => {
        element.textContent = '';
    });

    // Get form data
    const formData = new FormData(signupForm);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Client-side validation
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        return;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        return;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        return;
    }

    if (!phone) {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        return;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        return;
    }

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                password
            })
        });

        const data = await response.json();
        console.log(data);

        if (data.newUser) {
            window.location.href = '/Bricka';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});

/* Show Password */
function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var toggle = input.nextElementSibling;
    if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "Hide";
    } else {
        input.type = "password";
        toggle.textContent = "Show";
    }
}

/* Login */

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error').forEach(element => {
        element.textContent = '';
    });

    // Get form data
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    // Client-side validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        return;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        return;
    }

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(data);

        if (data.user) {
            window.location.href = '/Bricka';
        } else {
            // Handle login error
            document.getElementById('loginError').textContent = data.error;
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});

