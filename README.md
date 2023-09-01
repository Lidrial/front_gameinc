# GameInc - Votre plateforme de jeux en ligne

GameInc est une application web innovante qui vous permet de découvrir, jouer et partager vos jeux préférés en ligne. Que vous soyez un joueur passionné ou un développeur de jeux, GameInc est votre destination ultime pour vivre une expérience de jeu exceptionnelle.

## Technologies utilisées

- **Frontend** : Notre frontend est développé en React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives. Nous utilisons également Tailwind CSS pour la gestion de la mise en page et du style.

- **Backend** : Le backend de GameInc est basé sur le framework PHP Laravel, qui offre des fonctionnalités puissantes pour la gestion des utilisateurs, des jeux et des interactions.

- **Base de données** : Nous utilisons une base de données MySQL pour stocker les informations sur les utilisateurs, les jeux et les interactions.

## Fonctionnalités clés

- **Découvrez de nouveaux jeux** : Parcourez une vaste bibliothèque de jeux pour découvrir de nouveaux titres passionnants dans une variété de genres.

- **Ajoutez des jeux à vos favoris** : Marquez vos jeux préférés pour y accéder rapidement et les suivre.

- **Inscrivez-vous en tant que joueur ou développeur** : Choisissez votre rôle pour accéder à des fonctionnalités spécifiques à votre profil.

- **Partagez vos propres jeux** : Si vous êtes un développeur, soumettez vos jeux pour qu'ils soient présentés sur GameInc!



## Guide d'installation

1. Clonez ce dépôt sur votre machine locale.
2. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
3. Installez les dépendances backend en exécutant `composer install` dans le répertoire du projet Laravel.
4. Configurez la base de données en renommant le fichier `.env.example` en `.env` et en configurant les paramètres de base de données.
5. Générez une clé d'application Laravel en exécutant `php artisan key:generate`.
6. Exécutez les migrations pour créer les tables de base de données avec `php artisan migrate`.
7. Lancez l'application en exécutant `npm run dev` pour le frontend et `php artisan serve` pour le backend.
