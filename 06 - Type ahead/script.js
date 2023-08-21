const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
  .then(response => response.json()) // Convertir la réponse en JSON
  .then(data => console.log(data))    // Utiliser les données
  .catch(error => console.error('Une erreur s\'est produite', error));