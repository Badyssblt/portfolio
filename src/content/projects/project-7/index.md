---
title: "CodeCircle"
summary: "Blog public et personnel"
date: "2024-08-16T23:00:00.000Z"
draft: false
tags:
  - Express
  - Nuxt
  - VueJS 3
  - Tailwind
  - Javascript
  - API
  - Vite
demoUrl: https://codecircle.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/CodeCircle
---

Cette application web a été développé avec Nuxt 3 et ExpressJS. J'ai choisi Nuxt car je voulais réaliser ce projet en vue, cependant, ce dernier ne permet pas de SSR (Server Side Rendering) ce qui engendre un mauvais référencement SEO. Nuxt ajoute donc le SSR mais aussi d'autres outils pour grandement facilité le développement (facilité du Router, aucun import même des components qui ne sont pas natifs).

J'ai voulu réalisé cette application pour partagé des choses à travers le développement web, mais aussi que d'autres personnes puisse partagé ce qu'ils veulent à propos du développement. Nuxt ajoute un server qui tourne avec Nitro, mais j'ai voulu utilisé Express pour mon server car je l'avais déjà utilisé auparavant donc je voulais le redécouvrir. Avec l'utilisation de Symfony, j'ai découvert l'ORM Doctrine, je me suis donc demandé s'il n'existait pas des ORM pour Express, et j'ai trouvé PrismaJS. C'est un ORM très puissant et plus centralisé (pour Node.js) que Doctrine (tout se fait dans la route, avec la gestion des champs que l'on veux renvoyé, ou encore la recherche sur des champs). Un défaut de Prisma est la création des tables (cela se nomme les Models) car c'est dans un unique fichier (schema.prisma) et la syntaxe est différent d'autres choses déjà connu (+1 pour Doctrine).

Le plus gros défi a été le déploiement du serveur. J'ai dû me renseigner sur comment déployer une application Express sur mon VPS personnel (Debian avec Apache). J'ai trouvé pm2, qui permet d'héberger des applications JavaScript en local sur son VPS, et Apache crée un proxy inverse pour diriger le trafic vers l'application (via un fichier de configuration). C'est plutôt simple, mais très différent de ce à quoi j'étais habitué avec des applications Symfony, par exemple.
