document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const formTitle = document.getElementById('form-title');
    
    form.fullName.addEventListener('keydown', updateTitle);
    form.fullName.addEventListener('focus', clearError);
    form.fullName.addEventListener('blur', validateFullName);
    
    form.email.addEventListener('focus', clearError);
    form.email.addEventListener('blur', validateEmail);
    
    form.password.addEventListener('focus', clearError);
    form.password.addEventListener('blur', validatePassword);
    
    form.confirmPassword.addEventListener('focus', clearError);
    form.confirmPassword.addEventListener('blur', validateConfirmPassword);
    
    form.age.addEventListener('focus', clearError);
    form.age.addEventListener('blur', validateAge);
    
    form.phone.addEventListener('focus', clearError);
    form.phone.addEventListener('blur', validatePhone);
    
    form.address.addEventListener('focus', clearError);
    form.address.addEventListener('blur', validateAddress);
    
    form.city.addEventListener('focus', clearError);
    form.city.addEventListener('blur', validateCity);
    
    form.postalCode.addEventListener('focus', clearError);
    form.postalCode.addEventListener('blur', validatePostalCode);
    
    form.dni.addEventListener('focus', clearError);
    form.dni.addEventListener('blur', validateDNI);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Formulario enviado con éxito');
        } else {
            alert('Por favor, corrige los errores en el formulario');
        }
    });
});

function updateTitle() {
    const fullName = document.getElementById('fullName').value;
    document.getElementById('form-title').textContent = `HOLA ${fullName}`;
}

function clearError(event) {
    const errorElement = document.getElementById(`error-${event.target.name}`);
    errorElement.textContent = '';
}

function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    const errorElement = document.getElementById('error-fullName');
    if (fullName.length < 6 || !fullName.includes(' ')) {
        errorElement.textContent = 'El nombre completo debe tener más de 6 letras y al menos un espacio.';
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Por favor, ingresa un email válido.';
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error-password');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.';
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('error-confirmPassword');
    if (confirmPassword !== password) {
        errorElement.textContent = 'Las contraseñas no coinciden.';
        return false;
    }
    return true;
}

function validateAge() {
    const age = parseInt(document.getElementById('age').value, 10);
    const errorElement = document.getElementById('error-age');
    if (isNaN(age) || age < 18) {
        errorElement.textContent = 'Debes ser
