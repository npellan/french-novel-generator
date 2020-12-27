const app = {
    lieu: [
        'Dans une vallée reculée des Alpes',
        'A la pointe de la Bretagne',
        'A la lisière d\'une forêt des Cévennes',
        'Au milieu des plaines du Berry'
    ],
    personnage: [
        'Mathieu, un ingénieur à la retraite',
        'Paul, un ancien cadre reconverti à l\'agriculture',
        'Louise, une architecte française renommée',
        'Jeanne, une ancienne sportive'
    ],
    verbe: [
        ['se dispute avec', 'à propos d\'une grange abandonnée'],
        ['part parcourir la France avec', 'pour retrouver une amie d\'enfance'],
        ['épie', 'toutes les nuits'],
        ['tente de convaincre', 'de se présenter aux élections municipales']
    ],
    interaction: [
        'sa femme', 
        'son voisin',
        'tout son village',
        'son amant'
    ],
    getRandomNumber: (min, max) => {
        const randomBase = Math.random(); // Chiffre flottant entre 0 et 1
        const randomNumber = randomBase * (max - min) + min; // Chiffre flottant entre min et max
        const roundedRandomNumber = Math.round(randomNumber); // Chiffre entier entre min et max
        return roundedRandomNumber;
        // return Math.round(Math.random() * (max - min) + min);
    },
    getLieu: () => {
        const nb = app.getRandomNumber(0, 3);
        const oneLieu = app.lieu[nb];
        return oneLieu;        
    },
    getPersonnage: () => {
        const nb = app.getRandomNumber(0, 3);
        const onePersonnage = app.personnage[nb];
        return onePersonnage;        
    },
    getVerbe: () => {
        const nb = app.getRandomNumber(0, 3);
        const oneVerbe = app.verbe[nb];
        return oneVerbe;        
    },
    getInteraction: () => {
        const nb = app.getRandomNumber(0, 3);
        const oneInteraction = app.interaction[nb];
        return oneInteraction;        
    },
    getNovel: () => {
        const lieu = app.getLieu();
        const personnage = app.getPersonnage();
        const verbe = app.getVerbe();
        const interaction = app.getInteraction();
        console.log(`${lieu}, ${personnage}, ${verbe[0]} ${interaction}, ${verbe[1]}`);
        return `${lieu}, ${personnage}, ${verbe[0]} ${interaction}, ${verbe[1]}.`
    },
    init: () => {
        const bouton = document.querySelector('.button');
        bouton.addEventListener('click', app.showNovel);
    },
    showNovel: (event) => {
        event.preventDefault();
        const roman = app.getNovel();
        const placeholder = document.querySelector('#roman');
        placeholder.textContent = `${roman}`;
    }
}

document.addEventListener('DOMContentLoaded', app.init);