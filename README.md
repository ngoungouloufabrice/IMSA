# 🎓 IMSA - Plateforme de Gestion Académique

![IMSA Logo](/public/imsa-logo-officiel.png)

Bienvenue sur le dépôt officiel de la plateforme web de l'**Institut de Management et des Sciences Appliquées (IMSA)**. Cette application moderne est conçue pour faciliter l'accès aux informations de l'institut et simplifier le processus de pré-inscription pour les nouveaux étudiants.

## ✨ Fonctionnalités Clés

-   **🏠 Accueil Dynamique** : Présentation de l'institut, des statistiques et des différents établissements.
-   **📝 Pré-inscription en Ligne** : Formulaire complet permettant aux futurs étudiants de soumettre leurs informations.
-   **📄 Génération de PDF** : Système automatisé pour générer et télécharger instantanément des attestations de pré-inscription professionnelles.
-   **📚 Catalogue de Formations** : Consultation des filières et spécialités disponibles (Licence & Master).
-   **📱 Design Responsive & Premium** : Interface fluide et moderne adaptée à tous les types d'écrans (Desktop, Tablette, Mobile).
-   **🎭 Animations Fluides** : Utilisation de `Motion` pour des transitions et des révélations de contenu élégantes.

## 🛠️ Stack Technique

L'application repose sur les technologies les plus modernes du Web :

-   **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
-   **Langage** : JavaScript (ES6+)
-   **Styling** : [Tailwind CSS 4](https://tailwindcss.com/) & [Material UI (MUI)](https://mui.com/)
-   **Animations** : [Motion](https://motion.dev/) (anciennement Framer Motion)
-   **Génération PDF** : `@react-pdf/renderer` & `html2pdf.js`
-   **Déploiement** : Prêt pour [Vercel](https://vercel.com/)

## 🚀 Installation et Démarrage

### Pré-requis

-   Node.js (version 18 ou supérieure recommandée)
-   npm ou yarn

### Étapes d'installation

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/ngoungouloufabrice/IMSA.git
    cd imsa
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

4.  **Accéder à l'application** :
    Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

## 📂 Structure du Projet

```text
imsa/
├── app/                # Application Next.js (App Router)
│   ├── components/     # Composants UI réutilisables
│   ├── pre-registration/ # Module de pré-inscription (Formulaire + PDF)
│   ├── globals.css     # Styles globaux Tailwind
│   └── layout.js       # Layout principal
├── public/             # Assets statiques (Logos, Images, Cachets)
├── data/               # Données statiques (Filières, Cours)
└── next.config.mjs     # Configuration Next.js
```

## 📝 Licence

Ce projet est la propriété de l'**Institut de Management et des Sciences Appliquées (IMSA)**. Tous droits réservés.

---

💻 Développé avec ❤️ pour l'excellence académique.
