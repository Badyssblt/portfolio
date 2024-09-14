---
title: "Automatic"
summary: "Suite d'outils en tout genre"
date: "2024-09-09T23:00:00.000Z"
draft: false
tags:
  - Symfony 7
  - Nuxt
  - VueJS 3
  - Tailwind
demoUrl: https://automatic.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/Automatic
---

Cette application web a été développée avec Nuxt 3 (front) et Symfony 7 (backend). Ce site permet de gérer des tâches répétitives en rapport avec le développement web. Pour l'instant, il y a uniquement une simple gestion des mails. Nous pouvons créer un template de mail en passant des données (qui peut être styliser avec TailwindCSS). Il suffira ensuite d'appeler une route de mon API (qui est fourni avec un token et une clé d'API), et passer les données souhaitées. Cela va utiliser l'email de l'utilisateur (ce dernier dois fournir son dsn) et l'envoyer automatiquement. A terme, je souhaite faire une gestion complète des emails, comment envoyer régulièrement des emails, à des destinataires choisis, ou avec crontab.

De plus, je voudrais intégrer la gestion des bases de données (importer ou exporter) des tables dans différents formats. Avoir un suivis de ses données ect... Le seul inconvénient sera de devoir fournir une connexion à sa base de donnée (qui seront hashé).

L'objectif final de cette application sera de pouvoir déployer rapidement ces sites web (static ou non) en fournissant les fichiers du site web.