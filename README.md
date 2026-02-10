Groupe La Passerelle - Site Vitrine ESN
📋 Informations Projet
Projet: Site vitrine Groupe La Passerelle
Auteur: Picka Kelly Dorvely
Date: Février 2026
Description: Réalisation d'un site web responsive en HTML5, CSS3 et JavaScript pur pour une ESN fictive pour un devoir de section Licence 2 de Génie Informatique à ECES.

🎯 Objectifs
Créer un site professionnel et crédible pour une ESN fictive

Implémenter 10 pages minimum avec contenu réaliste

Assurer la responsivité sur mobile, tablette et desktop

Intégrer des fonctionnalités JavaScript interactives

Optimiser le SEO avec intégration de la trace personnelle de l'auteur

Respecter les standards web (HTML sémantique, CSS organisé, JS lisible)

📁 Structure du Projet

groupe-la-passerelle/
│
├── 📄 index.html                    # Page d'accueil principale
├── 📄 presentation.html             # Présentation historique et valeurs
├── 📄 expertise-reseaux.html        # Expertise Réseaux & Infrastructure
├── 📄 expertise-data.html           # Expertise Analyse de Données
├── 📄 expertise-programmation.html  # Expertise Développement Logiciel
├── 📄 expertise-bdd.html            # Expertise Bases de Données
├── 📄 expertise-securite.html       # Expertise Cybersécurité
├── 📄 actualites.html               # Blog et actualités tech
├── 📄 recrutement.html              # Offres d'emploi et candidatures
├── 📄 contact.html                  # Formulaire de contact et coordonnées
│
├── 📂 css/                          # Styles CSS organisés
│   ├── 📄 style.css                 # Styles principaux (600+ lignes)
│   │   ├── Variables CSS globales
│   │   ├── Reset et base
│   │   ├── Layout principal
│   │   ├── Composants réutilisables
│   │   ├── Animations CSS3
│   │   └── Thème clair/sombre
│   │
│   ├── 📄 responsive.css            # Responsive Design (200+ lignes)
│   │   ├── Media queries tablette
│   │   ├── Media queries mobile
│   │   └── Adaptations spécifiques
│   │
│   └── 📄 animations.css            # Animations avancées (à créer)
│       ├── Keyframes personnalisés
│       ├── Transitions spécifiques
│       └── Effets d'entrée/sortie
│
├── 📂 js/                           # JavaScript modulaire
│   ├── 📄 main.js                   # Initialisation globale (existe)
│   │   ├── Gestion des dépendances
│   │   ├── Initialisation modules
│   │   └── Configuration globale
│   │
│   ├── 📄 menu.js                   # Navigation & menu burger (130 lignes)
│   │   ├── Toggle menu mobile
│   │   ├── Animation hamburger
│   │   ├── Fermeture auto
│   │   ├── Navigation active
│   │   └── Scroll fluide
│   │
│   ├── 📄 carousel.js               # Carrousel témoignages (120 lignes)
│   │   ├── Classe Carousel
│   │   ├── Auto-play avec pause
│   │   ├── Navigation tactile
│   │   ├── Indicateurs dots
│   │   └── Responsive
│   │
│   ├── 📄 darkmode.js               # Thème sombre (80 lignes)
│   │   ├── Classe DarkMode
│   │   ├── localStorage persistant
│   │   ├── Préférence système
│   │   ├── Transition CSS
│   │   └── Icônes dynamiques
│   │
│   ├── 📄 news-filter.js            # Filtrage actualités (180 lignes)
│   │   ├── Classe NewsFilter
│   │   ├── Filtres par catégorie
│   │   ├── Animation transition
│   │   ├── Pagination simulée
│   │   └── Newsletter
│   │
│   ├── 📄 recruitment.js            # Formulaire recrutement (200 lignes)
│   │   ├── Classe RecruitmentForm
│   │   ├── Modale d'application
│   │   ├── Validation complète
│   │   ├── Upload PDF
│   │   ├── Feedback utilisateur
│   │   └── FAQ interactive
│   │
│   ├── 📄 contact.js                # Formulaire contact (150 lignes)
│   │   ├── Classe ContactForm
│   │   ├── Validation en temps réel
│   │   ├── Messages d'erreur
│   │   ├── Simulation envoi
│   │   └── Google Maps intégration
│   │
│   ├── 📄 validation.js             # Validation formulaires (120 lignes)
│       ├── Classe FormValidator
│       ├── Validation email/téléphone
│       ├── Messages d'erreur
│       ├── Prévention double submit
│       └── Success messages
│        
├── 📂 images/                       # Ressources visuelles

🎨 Design & Palette de Couleurs
Thème: Modernisme Apple-like Élégant
Bleu Primaire: #0071e3 (Apple Blue - Professionnel, innovation)

Fond Clair: #f5f5f7 (Apple Light Gray - Élégant, moderne)

Fond Sombre: #1d1d1f (Apple Dark Gray - Sophistiqué)

Texte Primaire: #1d1d1f / #f5f5f7 (selon thème)

Texte Secondaire: #86868b / #a1a1a6

Bordures: #d2d2d7 / #424245

Typographie
Police Principale: Inter (Google Fonts)

Style: Modern, clean, optimisé pour la lisibilité

Poids: 300 (light) à 700 (bold) selon hiérarchie

⚙️ Fonctionnalités JavaScript
1. Menu Burger Responsive
- Navigation fluide sur mobile/tablette
- Animation hamburger → croix
- Fermeture automatique au clic sur lien
- Accessibilité ARIA complète

2. Carrousel de Témoignages
- Transition fluide entre slides
- Navigation par boutons (prev/next) et dots
- Auto-play avec pause au survol
- Support tactile pour mobile
- Indicateurs visuels actifs

3. Dark Mode Toggle
- Basculement thème clair/sombre
- Persistance via localStorage
- Transition douce CSS
- Icônes ☀️/🌙 adaptatives
- Respect préférence système

4. Validation de Formulaires
- Validation en temps réel
- Messages d'erreur contextualisés
- Vérification formats (email, téléphone)
- Messages de succès UX
- Prévention double soumission

5. Filtrage des Actualités
- Filtrage par catégories en JavaScript pur
- Animation de transition fluide
- Interface intuitive
- État actif visible

6. Gestion Candidatures
- Ouverture/fermeture modale
- Validation complète des champs
- Upload fichier PDF
- Feedback utilisateur immédiat

📱 Responsive Design

  Breakpoints:
- Mobile: `< 768px` (approche mobile-first)
- Tablette: `768px - 1024px`
- Desktop: `> 1024px`

   Adaptations:
- Menu → Burger sur mobile
- Grilles flexibles
- Typographie échelonnée
- Images responsives
- Boutons optimisés tactile

  🔍 Optimisation SEO

   Meta Tags Essentiels
- Title optimisé par page
- Description unique pour chaque page
- Keywords pertinentes
- Open Graph pour partage social
- Viewport pour mobile

    Structure Sémantique
- Utilisation appropriée des balises HTML5
- Hiérarchie H1-H6 respectée
- Alt text pour images
- URLs propres et descriptives

    Performance
- CSS optimisé et minifié
- JavaScript non bloquant
- Images optimisées
- Chargement rapide
- 
  🏗️ Architecture Technique

   HTML5 Sémantique
- Structure logique et accessible
- Balises sémantiques: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Formulaires accessibles avec labels
- Navigation clavier compatible

   CSS3 Moderne
- Variables CSS pour thèmes
- Flexbox & Grid pour layouts
- Animations CSS3 fluides
- Media queries avancées
- Design system cohérent

   JavaScript Vanilla
- Code modulaire et organisé
- Classes ES6 pour fonctionnalités
- Gestion d'événements efficace
- Pas de dépendances externes
- Compatibilité cross-browser

  📊 Contenu Réaliste

   Expertises Couvertes
1. Réseaux & Infrastructure - Cloud, virtualisation, réseaux sécurisés
2. Analyse de Données - Big Data, BI, Machine Learning, Data Visualization
3. Programmation - Développement web, mobile, logiciels sur mesure
4. Bases de Données - SQL/NoSQL, administration, optimisation, migration
5. Cybersécurité - Audit, conformité RGPD, protection, monitoring

  Pages Spécialisées
-  Accueil - Présentation globale et points forts
-  Présentation - Historique, équipe, valeurs
-  Expertises - 5 pages détaillées par domaine
-  Actualités - Articles tech avec filtrage
-  Recrutement - Offres d'emploi et candidatures
-   Contact - Formulaire et coordonnées

 ✅ Critères d'Évaluation

  Respect Cahier des Charges
- [x] 10 pages distinctes minimum
- [x] HTML5, CSS3, JavaScript pur uniquement
- [x] Design responsive (mobile, tablette, desktop)
- [x] 3+ fonctionnalités JavaScript avancées
- [x] Code propre et bien commenté
- [x] Hébergement en ligne

   Professionnalisme
- [x] Design cohérent et élégant (inspiration Apple)
- [x] Contenu crédible pour une ESN
- [x] Interface utilisateur intuitive
- [x] Expérience utilisateur fluide
- [x] Accessibilité de base

  Qualité Technique
- [x] Structure HTML sémantique
- [x] CSS organisé et maintenable
- [x] JavaScript modulaire et efficace
- [x] Pas d'erreurs console
- [x] Compatibilité navigateurs modernes

 👤 À Propos de l'Auteur

**PICKA KELLY DORVELY**  
Étudiant en Génie Informatique - Licence 2  
ECES (École Centrale d'Enseignement Supérieur)  
Brand Manager et Consultant Digital en Début de carrière  
Designer Web passionné  

Ressources & Liens
- YouTube: MV4
- LinkedIn: Kelly Dorvely PICKA
- Profil: about.me/pickakellydorvely
- **Communauté:** 400 Electronics

📄 Licence

Ce projet est réalisé à titre scolaire dans le cadre du cours de Développement Web.  
Tous droits réservés © 2026 Groupe La Passerelle (fictif).

🗓️ Notes de Développement

  Chronologie
- **Date de livraison:** Février 2026
- **Version:** 1.0.0

  Technologies Utilisées
- HTML5 (sémantique)
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla (ES6+)
- Google Fonts (Inter)
- Font Awesome (icônes)

  Points Forts
- Design moderne inspiré d'Apple
- Code 100% vanilla sans frameworks
- Performance optimisée
- Expérience utilisateur fluide
- Documentation complète

---

*"L'excellence numérique au service de votre entreprise."*  
**Groupe La Passerelle**

---
  Remerciements: Merci Mr. Emmanuelle pour ce projet enrichissant !
