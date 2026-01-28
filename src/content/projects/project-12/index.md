---
title: "Jeu d'automatisation"
summary: "Jeu vidéo style voxel développé avec Unreal Engine 5"
date: "2025-01-28T00:00:00.000Z"
draft: false
tags:
  - Unreal Engine 5
  - Blueprint
  - Workbench
  - Game Development
---

Développement d'un jeu d'automatisation à progression linéaire avec une direction artistique voxel.

## Réalisations

Le projet a débuté par la création d'un système d'inventaire complet avec gestion des objets ramassables. En parallèle, je crée les assets 3D avec Workbench pour obtenir le style voxel souhaité.

## Défis et solutions

### Architecture Blueprint

La principale difficulté réside dans la gestion d'une architecture Blueprint qui se complexifie rapidement. Contrairement au développement web où le code texte permet une navigation et un refactoring aisés, le visual scripting demande une rigueur d'organisation dès le départ.

Pour y remédier, j'ai mis en place plusieurs pratiques :
- **Blueprint Function Library** : centralisation des casts et fonctions utilitaires en fonctions pures pour simplifier leur utilisation à travers le projet
- **Architecture par Components** : découpage de la logique en composants réutilisables (Inventory, etc.) pour favoriser la modularité et éviter la duplication
- **Structure de dossiers claire** : organisation rigoureuse des assets et blueprints pour maintenir la lisibilité du projet à mesure qu'il grandit

### Animations

Le principal obstacle a été le retargeting des animations. Mes personnages n'étant pas des modèles Mixamo, les outils automatiques d'Unreal Engine produisaient des résultats insatisfaisants. J'ai dû apprendre à retargeter manuellement les squelettes pour obtenir des animations propres, ce qui m'a demandé de comprendre en profondeur le fonctionnement des rigs et du système d'animation d'UE5.

### Création d'assets

L'apprentissage de Workbench pour la création d'assets voxel représente une montée en compétence supplémentaire, en parallèle du développement gameplay.

## Statut

Projet en cours de développement à temps partiel. Pas encore de version jouable publiée.
