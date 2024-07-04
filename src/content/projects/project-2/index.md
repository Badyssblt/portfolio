---
title: "Scoped.fr"
summary: "Application web qui créer des tournois."
date: "Janv 2024"
draft: false
tags:
  - Symfony 7
  - Api Platform 3
  - VueJS 3
demoUrl: https://scoped.fr
repoUrl: https://github.com/Badyssblt/Tournament
---

Cette application web a été créer pour développer mes connaissances de Symfony et un framework front VueJS.
J'ai commencé d'abord par créer le backend (en utilisant Postman) avec mes différentes Entity, Controller ect... Pour avoir une vue d'ensemble sur mes données. Le vrai défi de ce projet a été de développer le frontend. En effet, pour maintenant une optique d'API Rest pour mon back, je devais gérer la récupération des données et son stockage. J'ai donc essayé d'intégrer au frontend Pinia, un store assez similaire au Redux de React (mais en plus simple). Cependant, cela n'était pas adapté à mes besoins car en changeant de route, le store se réinitialisait. De plus, une simple approche entre props (passer une variable d'un composant parent au composant enfant) et surtout le passage de données entre composant enfant à son parent, donc l'utilité du context. Après avoir compris ces deux notions, le développement de l'application a été beaucoup plus simple.
