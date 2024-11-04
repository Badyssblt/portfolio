---
title: "ReadMind"
summary: "Application mobile et extension de navigateur"
date: "2024-10-24T23:00:00.000Z"
draft: false
tags:
  - Symfony 7
  - Nuxt
  - Tailwind
  - ReactNative
demoUrl: https://readmind.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/ReadMind
---

Cette application web a été développée avec Nuxt 3 (front) et Symfony 7 (backend). ReadMind a pour but de garder en mémoire le chapitre d'un livre qui est lu. 

ReadMind embarque une application web pour se créer un compte et ainsi obtenir un token qui est a rentré dans l'extension ReadMind. C'est la première extension que je publie sur le Chrome Store et j'ai donc pu découvrir les différents critères afin d'être éligible à la publication. 

De plus, une application mobile est disponible (en React Native) pour la lecture sur mobile. Le principal but de cette application est de pouvoir suivre sa lecture d'une périphérique a l'autre. La principale difficultée a été la façon de récupérer le chapitre actuelle. J'ai utilisé un regex qui permet d'extraire le slug aisin que le numéro de chapitre dans l'url ou l'utilisateur est. Cependant, ceci est un problème car si le site web ne spécifie pas de slug, ou de numéro de chapitre, ceci ne fonctionnera pas. Pour l'instant, ReadMind n'est disponible que pour la lecture de Manga. 

Maintenant, le plus compliqué, a été d'apprendre ReactNative, mais ayant déjà de bonne bases en React, c'est surtout les différents modules qui était à assimiler. 