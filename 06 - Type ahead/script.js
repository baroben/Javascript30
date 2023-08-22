const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let jsonData; // Déclarer une variable pour stocker les données JSON

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de réseau');
    }
    return response.json(); // Convertir la réponse en JSON
  })
  .then(data => {
    jsonData = data; // Stocker les données dans la variable
    console.log('Données récupérées:', jsonData); // Utiliser les données
  })
  .catch(error => console.error('Une erreur s\'est produite :', error));

const input = document.querySelector(".search");
const suggestions = document.querySelector('.suggestions');

input.addEventListener('input', event => {
    const inputValue = event.target.value;
    const filteredCities = jsonData.filter(row => {
      return row.city.includes(inputValue) || row.state.includes(inputValue);
    });
    const html = filteredCities.map((town) =>{
      return `<li>${town.city}, ${town.state}</li>`;
    }).join('');
    suggestions.innerHTML = html;
})

