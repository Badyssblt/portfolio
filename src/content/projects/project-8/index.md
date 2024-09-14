---
title: "Modulify"
summary: "Site de partage de composants web"
date: "2024-09-03T23:00:00.000Z"
draft: false
tags:
  - Symfony 7
  - Nuxt
  - VueJS 3
  - Tailwind
  - Javascript
  - Github API
  - Firebase
demoUrl: https://modulify.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/Modulify
---

Cette application web a été développée avec Nuxt 3 (front) et Symfony 7 (backend). Sur ce site, je partage des composants pour le développement en tout genre (du controller Symfony aux plugins Nuxt, ou encore des composants Tailwind). Pour stocker mes fichiers, j'ai utilisé Firebase, qui offre une option gratuite avec largement assez d'espace disque. Je ne voulais pas stocker mes fichiers sur mon VPS, car l'espace ne serait probablement pas suffisant.

Avant de commencer ce projet, j'ai tout d'abord réfléchi aux différentes fonctionnalités que je souhaitais, comme la possibilité de télécharger les fichiers ou encore de les importer directement dans son repository GitHub. Ensuite, j'ai commencé le design sur Figma.

Le plus difficile dans ce projet a été l'envoi des fichiers vers Firebase, mais surtout la gestion de l'importation d'un composant sur GitHub, qui a été un réel défi. Pour cela, j'ai d'abord dû créer une connexion OAuth2 avec GitHub et Symfony, puis me renseigner sur la documentation de l'API GitHub.