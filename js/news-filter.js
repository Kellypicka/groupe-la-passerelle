class NewsFilter {
    constructor() {
        this.filters = document.querySelectorAll('.filter-btn');
        this.articles = document.querySelectorAll('.article-card');
        this.currentFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.filters.forEach(filter => {
            filter.addEventListener('click', () => {
                const filterValue = filter.getAttribute('data-filter');
                this.setActiveFilter(filter);
                this.filterArticles(filterValue);
            });
        });
    }
    
    setActiveFilter(activeFilter) {
        this.filters.forEach(filter => {
            filter.classList.remove('active');
        });
        activeFilter.classList.add('active');
    }
    
    filterArticles(filterValue) {
        this.currentFilter = filterValue;
        
        this.articles.forEach(article => {
            const category = article.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                article.style.display = 'block';
                setTimeout(() => {
                    article.style.opacity = '1';
                    article.style.transform = 'translateY(0)';
                }, 100);
            } else {
                article.style.opacity = '0';
                article.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    article.style.display = 'none';
                }, 300);
            }
        });
        
        // Animation de réorganisation
        setTimeout(() => {
            const visibleArticles = Array.from(this.articles).filter(article => 
                article.style.display !== 'none'
            );
            
            visibleArticles.forEach((article, index) => {
                article.style.transitionDelay = `${index * 50}ms`;
            });
        }, 50);
    }
}

// Pagination
class Pagination {
    constructor() {
        this.pageButtons = document.querySelectorAll('.page-btn');
        this.currentPage = 1;
        
        this.init();
    }
    
    init() {
        this.pageButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('next')) {
                    this.nextPage();
                } else if (!button.classList.contains('active')) {
                    const page = parseInt(button.textContent);
                    this.goToPage(page);
                }
            });
        });
    }
    
    goToPage(page) {
        this.pageButtons.forEach(btn => btn.classList.remove('active'));
        this.pageButtons[page - 1].classList.add('active');
        this.currentPage = page;
        
        // Simuler le chargement de nouvelles données
        this.simulatePageLoad();
    }
    
    nextPage() {
        const nextPage = this.currentPage + 1;
        if (nextPage <= 3) { // 3 pages max pour l'exemple
            this.goToPage(nextPage);
        }
    }
    
    simulatePageLoad() {
        const container = document.getElementById('articles-container');
        container.style.opacity = '0.5';
        
        setTimeout(() => {
            container.style.opacity = '1';
        }, 300);
    }
}

// Newsletter
class Newsletter {
    constructor() {
        this.form = document.getElementById('newsletter-form');
        if (!this.form) return;
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
    }
    
    validateForm() {
        const emailInput = this.form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            this.showError(emailInput, 'Veuillez saisir votre email');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showError(emailInput, 'Email invalide');
            return;
        }
        
        this.submitForm(email);
    }
    
    showError(input, message) {
        let errorElement = input.parentElement.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = '#ff3b30';
    }
    
    submitForm(email) {
        // Simulation d'envoi
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Inscription en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.showSuccess();
            this.form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            background: #34c759;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            margin-top: 16px;
            text-align: center;
            font-size: 0.9rem;
        `;
        successMessage.textContent = 'Merci pour votre inscription à notre newsletter !';
        
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// Initialiser tout au chargement
document.addEventListener('DOMContentLoaded', function() {
    new NewsFilter();
    new Pagination();
    new Newsletter();
});