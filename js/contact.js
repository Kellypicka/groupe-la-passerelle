class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.openMapBtn = document.getElementById('open-map');
        
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.initRealTimeValidation();
        }
        
        if (this.openMapBtn) {
            this.openMapBtn.addEventListener('click', () => this.openGoogleMaps());
        }
    }
    
    initRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        
        // Reset
        field.classList.remove('error');
        this.clearError(field);
        
        // Validation des champs requis
        if (field.hasAttribute('required') && !value) {
            this.showError(field, 'Ce champ est obligatoire');
            return false;
        }
        
        // Validation email
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Email invalide');
                return false;
            }
        }
        
        // Validation téléphone
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9\s\+\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                this.showError(field, 'Numéro de téléphone invalide');
                return false;
            }
        }
        
        return true;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        
        // Validation de tous les champs
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showFormError('Veuillez corriger les erreurs dans le formulaire');
            return;
        }
        
        // Envoi du formulaire
        this.submitForm();
    }
    
    submitForm() {
        const submitBtn = this.form.querySelector('.btn-submit');
        const submitText = submitBtn.querySelector('.submit-text');
        const loadingSpinner = submitBtn.querySelector('.loading-spinner');
        
        // Afficher l'indicateur de chargement
        submitText.style.display = 'none';
        loadingSpinner.style.display = 'flex';
        submitBtn.disabled = true;
        
        // Simuler l'envoi (dans un cas réel, on enverrait à un serveur)
        setTimeout(() => {
            // Réinitialiser le formulaire
            this.form.reset();
            
            // Cacher l'indicateur de chargement
            submitText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
            submitBtn.disabled = false;
            
            // Afficher le message de succès
            this.showSuccessMessage();
        }, 2000);
    }
    
    showError(field, message) {
        field.classList.add('error');
        field.style.borderColor = '#ff3b30';
        
        let errorElement = field.parentElement.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    clearError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
    
    showFormError(message) {
        // Scroll vers le premier champ en erreur
        const firstError = this.form.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Afficher un message d'erreur général
        this.showNotification(message, 'error');
    }
    
    showSuccessMessage() {
        const successMessage = `
            <div style="text-align: center;">
                <div style="font-size: 3rem; color: #34c759; margin-bottom: 16px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="margin-bottom: 12px;">Message envoyé !</h3>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">
                    Nous vous répondrons dans les plus brefs délais.
                </p>
            </div>
        `;
        
        this.showNotification(successMessage, 'success');
        
        // Scroll vers le haut du formulaire
        this.form.scrollIntoView({ behavior: 'smooth' });
    }
    
    showNotification(content, type) {
        // Supprimer les notifications existantes
        const existingNotifications = document.querySelectorAll('.form-notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Créer la nouvelle notification
        const notification = document.createElement('div');
        notification.className = `form-notification form-notification-${type}`;
        notification.innerHTML = content;
        
        // Styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#34c759' : '#ff3b30'};
            color: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: var(--shadow);
            z-index: 3000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
        
        if (type === 'success') {
            notification.style.background = '#34c759';
        } else {
            notification.style.background = '#ff3b30';
        }
        
        document.body.appendChild(notification);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    openGoogleMaps() {
        const address = encodeURIComponent('123 Avenue des Champs-Élysées, 75008 Paris');
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    }
}

// Initialiser
document.addEventListener('DOMContentLoaded', function() {
    new ContactForm();
});