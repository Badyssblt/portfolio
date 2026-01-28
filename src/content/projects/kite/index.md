---
title: "Suite Kite"
summary: "Suite d'outils pour le développement"
date: "2025-10-12T23:00:00.000Z"
draft: false
tags:
  - Unreal Engine 5
  - Blueprint
demoUrl: https://readmind.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/ReadMind

------------

À chaque nouveau projet web, je perdais un temps considérable à répéter les mêmes étapes : installer les dépendances, configurer l'authentification, mettre en place la base de données, ajouter Stripe pour les paiements... Ces tâches répétitives prenaient plusieurs heures avant même de commencer à coder la vraie valeur du projet.

Je me suis rendu compte que 80% de mes projets partageaient la même base technique. Pourquoi refaire ce travail à chaque fois ?

## La solution : Kite CLI

J'ai créé **Kite**, une interface en ligne de commande qui génère des projets prêts à l'emploi en quelques secondes.

### Comment ça marche

1. L'utilisateur lance `kite create`
2. Il choisit son framework (Nuxt, Next.js...)
3. Il sélectionne les modules dont il a besoin (authentification, base de données, paiements, etc.)
4. Kite génère un projet fonctionnel avec tout déjà configuré

### Fonctionnalité clé : les modules

Plutôt qu'un template monolithique, Kite utilise un système modulaire. Chaque brique (Prisma, Stripe, Auth...) est indépendante et peut être combinée avec les autres. L'utilisateur peut aussi ajouter des modules à un projet existant avec `kite add`.

## Les défis rencontrés

### 1. La gestion des dépendances entre modules

Certains modules dépendent d'autres : par exemple, l'authentification nécessite une base de données. J'ai dû créer un système qui détecte et ajoute automatiquement les dépendances manquantes.

### 2. La fusion intelligente des fichiers

Quand plusieurs modules modifient le même fichier (comme la configuration ou les variables d'environnement), il fallait fusionner ces modifications sans conflits. J'ai développé des stratégies de merge adaptées à chaque type de fichier.

### 3. Supporter plusieurs frameworks

Nuxt et Next.js ont des conventions différentes. J'ai conçu une architecture qui permet d'ajouter facilement de nouveaux frameworks tout en partageant la logique commune.

### 4. L'installation des modules

Initialement, je copiais les fichiers manuellement. J'ai ensuite migré vers des scripts d'installation autonomes, rendant chaque module plus maintenable et indépendant.

## Vision future

Kite CLI n'est que le premier outil d'une suite plus large :

- **Kite Editor** : Un éditeur de code collaboratif en temps réel
- **Conteneurs partagés** : Plusieurs développeurs travaillant sur le même environnement
- **Auto-hébergeable** : Garder le contrôle de ses données et de son infrastructure

L'objectif : réduire les frictions du développement, de la création du projet jusqu'à la collaboration en équipe.
