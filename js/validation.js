class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (!this.form) return;
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.validateForm(e));
        
        // Validation en temps réel
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }
    
    validateForm(e) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            this.showSuccess();
            // Ici, vous pouvez ajouter l'envoi AJAX
            this.form.reset();
        }
    }
    
    validateField(field) {
        let isValid = true;
        const value = field.value.trim();
        const errorElement = field.parentElement.querySelector('.error-message');
        
        // Règles de validation
        if (field.hasAttribute('required') && !value) {
            this.showError(field, 'Ce champ est obligatoire');
            isValid = false;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Veuillez saisir un email valide');
                isValid = false;
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9\s\+\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                this.showError(field, 'Numéro de téléphone invalide');
                isValid = false;
            }
        }
        
        if (isValid && errorElement) {
            errorElement.style.display = 'none';
            field.style.borderColor = '';
        }
        
        return isValid;
    }
    
    showError(field, message) {
        let errorElement = field.parentElement.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        field.style.borderColor = '#ff3b30';
    }
    
    clearError(field) {
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
            field.style.borderColor = '';
        }
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            background: #34c759;
            color: white;
            padding: 16px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
        `;
        successMessage.textContent = 'Message envoyé avec succès !';
        
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// Initialiser pour la page contact
document.addEventListener('DOMContentLoaded', function() {
    new FormValidator('contact-form');
    
    // Validation spécifique pour le formulaire de recrutement
    if (document.getElementById('recruitment-form')) {
        new FormValidator('recruitment-form');
    }
});