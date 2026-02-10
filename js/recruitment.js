class RecruitmentForm {
    constructor() {
        this.applicationForm = document.getElementById('application-form');
        this.applyButtons = document.querySelectorAll('.btn-apply');
        this.closeButton = document.getElementById('close-form');
        this.form = document.getElementById('recruitment-form');
        this.formTitle = document.getElementById('form-title');
        this.jobIdInput = document.getElementById('job-id');
        
        this.init();
    }
    
    init() {
        // Gestion des boutons "Postuler"
        this.applyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const jobId = button.getAttribute('data-job');
                this.openForm(jobId);
            });
        });
        
        // Fermer le formulaire
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.closeForm());
        }
        
        // Fermer en cliquant à l'extérieur
        if (this.applicationForm) {
            this.applicationForm.addEventListener('click', (e) => {
                if (e.target === this.applicationForm) {
                    this.closeForm();
                }
            });
        }
        
        // Gestion de la soumission du formulaire
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        
        // Gestion de la FAQ
        this.initFAQ();
    }
    
    openForm(jobId) {
        const jobCard = document.querySelector(`.btn-apply[data-job="${jobId}"]`).closest('.job-card');
        const jobTitle = jobCard.querySelector('h3').textContent;
        
        this.formTitle.textContent = `Postuler : ${jobTitle}`;
        this.jobIdInput.value = jobId;
        
        this.applicationForm.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Scroll vers le formulaire
        setTimeout(() => {
            this.applicationForm.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    
    closeForm() {
        this.applicationForm.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.form.reset();
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Validation
        if (!this.validateForm()) {
            return;
        }
        
        // Simulation d'envoi
        const submitBtn = this.form.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        
        // Simuler l'envoi
        setTimeout(() => {
            this.showSuccess();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            this.closeForm();
        }, 2000);
    }
    
    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'Ce champ est obligatoire');
                isValid = false;
            } else {
                this.clearError(input);
            }
            
            // Validation spécifique pour l'email
            if (input.type === 'email' && input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    this.showError(input, 'Email invalide');
                    isValid = false;
                }
            }
            
            // Validation spécifique pour le fichier
            if (input.type === 'file') {
                const file = input.files[0];
                if (file && file.type !== 'application/pdf') {
                    this.showError(input, 'Veuillez sélectionner un fichier PDF');
                    isValid = false;
                }
            }
        });
        
        // Validation de la checkbox de confidentialité
        const privacyCheckbox = this.form.querySelector('input[name="privacy"]');
        if (!privacyCheckbox.checked) {
            this.showError(privacyCheckbox, 'Vous devez accepter la politique de confidentialité');
            isValid = false;
        }
        
        return isValid;
    }
    
    showError(element, message) {
        let errorElement = element.parentElement.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            element.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        if (element.type !== 'checkbox') {
            element.style.borderColor = '#ff3b30';
        }
    }
    
    clearError(element) {
        const errorElement = element.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        element.style.borderColor = '';
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #34c759;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        
        successMessage.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
                <div>
                    <strong>Candidature envoyée !</strong>
                    <div style="font-size: 0.875rem; opacity: 0.9;">Nous vous contacterons rapidement.</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => successMessage.remove(), 300);
        }, 5000);
    }
    
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    }
                });
                
                // Ouvrir/fermer celui-ci
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                }
            });
        });
    }
}

// Initialiser
document.addEventListener('DOMContentLoaded', function() {
    new RecruitmentForm();
});
