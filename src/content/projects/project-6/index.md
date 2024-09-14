---
title: "EventFlow"
summary: "Création et inscription à des évènements"
date: "2024-07-17T23:00:00.000Z"
draft: false
tags:
  - Symfony 7
  - React
  - Tailwind
  - Javascript
  - API
  - Vite
  - Stripe
demoUrl: https://eventflow.badyssblilita.fr
repoUrl: https://github.com/Badyssblt/EventFlow
---

Cette application web a été développée avec React 18 (front) et Symfony 7 (back). Elle permet de créer des événements gratuits ou payants, avec l'utilisation de l'API Stripe.

Elle implique aussi la gestion de tickets protégés (au niveau front et back) qui peuvent être scannés par le créateur de l'événement pour valider le ticket (QR Code). Le plus gros challenge n'a pas été réellement le développement de l'application, mais l'envoi de mails. Plus précisément, je voulais un mail "professionnel" comme contact@badyssblilita.fr. Pour cela, j'avais déjà acheté un nom de domaine, donc je me suis longuement renseigné pour obtenir cet email. J'ai donc opté pour Zoho Mail. J'ai créé une entrée MX, avec des champs TXT pour Zoho. Finalement, cela a été plutôt simple; le plus compliqué a été la recherche du service qui permet cela.

Avec l'envoi de mails, j'ai ajouté une fonctionnalité qui permet d'inviter des personnes via un mail. J'ai créé une table Invitation avec comme champs l'userId, le statut, et un token qui sera passé en state avec le router de React pour ne pas le mettre dans l'URL. Ainsi, le front recevra le token et fera un appel à l'API pour modifier le statut de l'invitation et créer aussi le ticket.
