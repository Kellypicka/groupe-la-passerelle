class DarkMode {
    constructor() {
        this.toggleBtn = document.querySelector('.theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.isDarkMode = false;
        
        this.init();
    }
    
    init() {
        // Vérifier la préférence utilisateur
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
            this.enableDarkMode();
        }
        
        // Écouter les changements de préférence système
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                e.matches ? this.enableDarkMode() : this.disableDarkMode();
            }
        });
        
        // Bouton de bascule
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
    
    enableDarkMode() {
        document.body.classList.add('dark-mode');
        this.isDarkMode = true;
        this.updateIcon();
        localStorage.setItem('theme', 'dark');
    }
    
    disableDarkMode() {
        document.body.classList.remove('dark-mode');
        this.isDarkMode = false;
        this.updateIcon();
        localStorage.setItem('theme', 'light');
    }
    
    toggle() {
        this.isDarkMode ? this.disableDarkMode() : this.enableDarkMode();
    }
    
    updateIcon() {
        if (this.themeIcon) {
            this.themeIcon.textContent = this.isDarkMode ? '🌙' : '☀️';
        }
    }
}

// Initialiser le mode sombre
document.addEventListener('DOMContentLoaded', function() {
    new DarkMode();
});