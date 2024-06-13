document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    // Validations
    const name = document.getElementById('name').value;
    if (name.length <= 6 || !name.includes(' ')) {
        isValid = false;
        document.getElementById('error-name').textContent = 'Debe tener más de 6 letras y al menos un espacio.';
    }

    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        document.getElementById('error-email').textContent = 'Debe ser un email válido.';
    }

    const password = document.getElementById('password').value;
    if (password.length < 8 || !/\d/.test(password)) {
        isValid = false;
        document.getElementById('error-password').textContent = 'Al menos 8 caracteres, formados por letras y números.';
    }

    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('error-confirm-password').textContent = 'Las contraseñas no coinciden.';
    }

    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18) {
        isValid = false;
        document.getElementById('error-age').textContent = 'Debe ser un número entero mayor o igual a 18.';
    }

    const phone = document.getElementById('phone').value;
    if (!/^\d{7,}$/.test(phone)) {
        isValid = false;
        document.getElementById('error-phone').textContent = 'Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.';
    }

    const address = document.getElementById('address').value;
    if (address.length < 5 || !/\d/.test(address) || !/[a-zA-Z]/.test(address) || !address.includes(' ')) {
        isValid = false;
        document.getElementById('error-address').textContent = 'Al menos 5 caracteres, con letras, números y un espacio en el medio.';
    }

    const city = document.getElementById('city').value;
    if (city.length < 3) {
        isValid = false;
        document.getElementById('error-city').textContent = 'Al menos 3 caracteres.';
    }

    const postalCode = document.getElementById('postal-code').value;
    if (postalCode.length < 3) {
        isValid = false;
        document.getElementById('error-postal-code').textContent = 'Al menos 3 caracteres.';
    }

    const dni = document.getElementById('dni').value;
    if (!/^\d{7,8}$/.test(dni)) {
        isValid = false;
        document.getElementById('error-dni').textContent = 'Número de 7 u 8 dígitos.';
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario, por ejemplo, usando fetch API
        // fetch('/submit-form', { method: 'POST', body: new FormData(event.target) });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Load data from LocalStorage if exists
    const storedData = localStorage.getItem('subscriptionData');
    if (storedData) {
        const data = JSON.parse(storedData);
        document.getElementById('name').value = data.name;
        document.getElementById('email').value = data.email;
        document.getElementById('age').value = data.age;
        document.getElementById('phone').value = data.phone;
        document.getElementById('address').value = data.address;
        document.getElementById('city').value = data.city;
        document.getElementById('postal-code').value = data.postalCode;
        document.getElementById('dni').value = data.dni;
    }

    document.getElementById('subscription-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        let isValid = true;

        // Validations
        const name = document.getElementById('name').value;
        if (name.length <= 6 || !name.includes(' ')) {
            isValid = false;
            document.getElementById('error-name').textContent = 'Debe tener más de 6 letras y al menos un espacio.';
        }

        const email = document.getElementById('email').value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            document.getElementById('error-email').textContent = 'Debe ser un email válido.';
        }

        const password = document.getElementById('password').value;
        if (password.length < 8 || !/\d/.test(password)) {
            isValid = false;
            document.getElementById('error-password').textContent = 'Al menos 8 caracteres, formados por letras y números.';
        }

        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            isValid = false;
            document.getElementById('error-confirm-password').textContent = 'Las contraseñas no coinciden.';
        }

        const age = parseInt(document.getElementById('age').value, 10);
        if (isNaN(age) || age < 18) {
            isValid = false;
            document.getElementById('error-age').textContent = 'Debe ser un número entero mayor o igual a 18.';
        }

        const phone = document.getElementById('phone').value;
        if (!/^\d{7,}$/.test(phone)) {
            isValid = false;
            document.getElementById('error-phone').textContent = 'Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.';
        }

        const address = document.getElementById('address').value;
        if (address.length < 5 || !/\d/.test(address) || !/[a-zA-Z]/.test(address) || !address.includes(' ')) {
            isValid = false;
            document.getElementById('error-address').textContent = 'Al menos 5 caracteres, con letras, números y un espacio en el medio.';
        }

        const city = document.getElementById('city').value;
        if (city.length < 3) {
            isValid = false;
            document.getElementById('error-city').textContent = 'Al menos 3 caracteres.';
        }

        const postalCode = document.getElementById('postal-code').value;
        if (postalCode.length < 3) {
            isValid = false;
            document.getElementById('error-postal-code').textContent = 'Al menos 3 caracteres.';
        }

        const dni = document.getElementById('dni').value;
        if (!/^\d{7,8}$/.test(dni)) {
            isValid = false;
            document.getElementById('error-dni').textContent = 'Número de 7 u 8 dígitos.';
        }

        // If the form is valid, submit it
        if (isValid) {
            const data = {
                name,
                email,
                password,
                age,
                phone,
                address,
                city,
                postalCode,
                dni
            };

            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(responseData => {
                showModal('Suscripción exitosa', JSON.stringify(responseData, null, 2));
                localStorage.setItem('subscriptionData', JSON.stringify(data));
            })
            .catch(error => {
                showModal('Error en la suscripción', error.message);
            });
        }
    });

    function showModal(title, message) {
        const modal = document.getElementById('modal');
        document.getElementById('modal-message').textContent = `${title}\n\n${message}`;
        modal.style.display = 'block';
    }

    window.closeModal = function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
});
