document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        searchAuthor(searchInput.value); // Passer la valeur du champ de recherche à la fonction searchAuthor
    });

    function searchAuthor(searchTerm) {
        var authors = [
            // ... (liste des auteurs)
            'Platon', 'Aristote', 'Zhuangzi', 'Epicure', 'Cicéron', 'Lucrèce',
            'Sénèque', 'Epictète', 'Marc Aurèle', 'Nagarjuna', 'Sextus Empiricus', 'Plotin', 'Augustin',
            'Avicenne', 'Anselme', 'Averroès', 'Maïmonide', 'Thomas d’Aquin', 'Guillaume d’Occam',
            'Machiavel', 'Montaigne', 'Bacon', 'Hobbes', 'Descartes', 'Pascal',
            'Locke', 'Spinoza', 'Malebranche', 'Leibniz', 'Vico', 'Berkeley',
            'Montesquieu', 'Hume', 'Rousseau', 'Diderot', 'Condillac', 'Smith',
            'Kant', 'Bentham', 'Hegel', 'Schopenhauer', 'Comte', 'Cournot', 'Feuerbach',
            'Tocqueville', 'Mill', 'Kierkegaard', 'Marx', 'Engels', 'James',
            'Nietzsche', 'Freud', 'Durkheim', 'Bergson', 'Husserl', 'Weber', 'Alain',
            'Mauss', 'Russell', 'Jaspers', 'Bachelard', 'Heidegger', 'Wittgenstein',
            'Benjamin', 'Popper', 'Jankélévitch', 'Jonas', 'Aron', 'Sartre', 'Arendt',
            'Levinas', 'Beauvoir', 'Lévi-Strauss', 'Merleau-Ponty', 'Weil', 'Hersch', 'Ricœur',
            'Anscombe', 'Murdoch', 'Rawls', 'Simondon', 'Foucault', 'Putnam'
        ];
    
        if (authors.includes(searchTerm)) {
            window.location.href = 'pages/' + searchTerm + '.html';
        } else {
            alert('Aucun auteur trouvé.');
        }
    }  
});

// Liste des noms de philosophes
const philosophes = [
    "Platon", "Aristote", "Zhuangzi", "Epicure", "Cicéron", "Lucrèce",
    "Sénèque", "Epictète", "Marc Aurèle", "Nagarjuna", "Sextus Empiricus", "Plotin", "Augustin",
    "Avicenne", "Anselme", "Averroès", "Maïmonide", "Thomas d’Aquin", "Guillaume d’Occam",
    "Machiavel", "Montaigne", "Bacon", "Hobbes", "Descartes", "Pascal",
    "Locke", "Spinoza", "Malebranche", "Leibniz", "Vico", "Berkeley",
    "Montesquieu", "Hume", "Rousseau", "Diderot", "Condillac", "Smith",
    "Kant", "Bentham", "Hegel", "Schopenhauer", "Comte", "Cournot", "Feuerbach",
    "Tocqueville", "Mill", "Kierkegaard", "Marx", "Engels", "James",
    "Nietzsche", "Freud", "Durkheim", "Bergson", "Husserl", "Weber", "Alain",
    "Mauss", "Russell", "Jaspers", "Bachelard", "Heidegger", "Wittgenstein",
    "Benjamin", "Popper", "Jankélévitch", "Jonas", "Aron", "Sartre", "Arendt",
    "Levinas", "Beauvoir", "Lévi-Strauss", "Merleau-Ponty", "Weil", "Hersch", "Ricœur",
    "Anscombe", "Murdoch", "Rawls", "Simondon", "Foucault", "Putnam"
];

// Triez la liste des philosophes par ordre alphabétique
philosophes.sort();

// Créez une liste avec des en-têtes de lettre pour organiser les philosophes par ordre alphabétique
let currentLetter = null;
const ul = document.getElementById("philosophes-list");

philosophes.forEach(philosophe => {
    const firstLetter = philosophe.charAt(0).toUpperCase();

    if (firstLetter !== currentLetter) {
        // Ajoutez un en-tête de lettre avec la classe .lettre
        const liHeader = document.createElement("li");
        liHeader.textContent = `--- ${firstLetter} ---`;
        liHeader.classList.add("lettre"); // Ajoutez la classe .lettre
        ul.appendChild(liHeader);
        currentLetter = firstLetter;
    }

    // Ajoutez le nom du philosophe
    const liPhilosophe = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = philosophe; // Utilisez "philosophe" au lieu de "nom"
    a.href = `pages/${philosophe}.html`; // Assurez-vous de construire correctement le lien
    a.classList.add("lien");
    liPhilosophe.appendChild(a);
    ul.appendChild(liPhilosophe); // Utilisez "ul" au lieu de "philosophesList"
});

const philosophesAvecDates = [
    { nom: "Platon", dates: "427-347 av. J.-C." },
    { nom: "Aristote", dates: "384-322 av. J.-C." },
    { nom: "Zhuangzi", dates: "369-286 av. J.-C." },
    { nom: "Epicure", dates: "341-270 av. J.-C." },
    { nom: "Cicéron", dates: "106-43 av. J.-C." },
    { nom: "Lucrèce", dates: "98-55 av. J.-C." },
    { nom: "Sénèque", dates: "4 av. J.-C. - 65 ap. J.-C." },
    { nom: "Epictète", dates: "55-135" },
    { nom: "Marc Aurèle", dates: "121-180" },
    { nom: "Nagarjuna", dates: "150-250" },
    { nom: "Sextus Empiricus", dates: "200-280" },
    { nom: "Plotin", dates: "204-270" },
    { nom: "Augustin", dates: "354-430" },
    { nom: "Avicenne", dates: "980-1037" },
    { nom: "Anselme", dates: "1033-1109" },
    { nom: "Averroès", dates: "1126-1198" },
    { nom: "Maïmonide", dates: "1135-1204" },
    { nom: "Thomas d’Aquin", dates: "1225-1274" },
    { nom: "Guillaume d’Occam", dates: "1287-1347" },
    { nom: "Machiavel", dates: "1469-1527" },
    { nom: "Montaigne", dates: "1533-1592" },
    { nom: "Bacon", dates: "1561-1626" },
    { nom: "Hobbes", dates: "1588-1679" },
    { nom: "Descartes", dates: "1596-1650" },
    { nom: "Pascal", dates: "1623-1662" },
    { nom: "Locke", dates: "1632-1704" },
    { nom: "Spinoza", dates: "1632-1677" },
    { nom: "Malebranche", dates: "1638-1715" },
    { nom: "Leibniz", dates: "1646-1716" },
    { nom: "Vico", dates: "1668-1744" },
    { nom: "Berkeley", dates: "1685-1753" },
    { nom: "Montesquieu", dates: "1689-1755" },
    { nom: "Hume", dates: "1711-1776" },
    { nom: "Rousseau", dates: "1712-1778" },
    { nom: "Voltaire", dates: "1694-1778" },
    { nom: "Kant", dates: "1724-1804" },
    { nom: "Diderot", dates: "1713-1784" },
    { nom: "Smith", dates: "1723-1790" },
    { nom: "Condillac", dates: "1714-1780" },
    { nom: "Comte", dates: "1798-1857" },
    { nom: "Hegel", dates: "1770-1831" },
    { nom: "Schopenhauer", dates: "1788-1860" },
    { nom: "Feuerbach", dates: "1804-1872" },
    { nom: "Tocqueville", dates: "1805-1859" },
    { nom: "Mill", dates: "1806-1873" },
    { nom: "Kierkegaard", dates: "1813-1855" },
    { nom: "Marx", dates: "1818-1883" },
    { nom: "Engels", dates: "1820-1895" },
    { nom: "James", dates: "1842-1910" },
    { nom: "Nietzsche", dates: "1844-1900" },
    { nom: "Freud", dates: "1856-1939" },
    { nom: "Durkheim", dates: "1858-1917" },
    { nom: "Bergson", dates: "1859-1941" },
    { nom: "Husserl", dates: "1859-1938" },
    { nom: "Weber", dates: "1864-1920" },
    { nom: "Alain", dates: "1868-1951" },
    { nom: "Mauss", dates: "1872-1950" },
    { nom: "Russell", dates: "1872-1970" },
    { nom: "Jaspers", dates: "1883-1969" },
    { nom: "Bachelard", dates: "1884-1962" },
    { nom: "Heidegger", dates: "1889-1976" },
    { nom: "Wittgenstein", dates: "1889-1951" },
    { nom: "Benjamin", dates: "1892-1940" },
    { nom: "Popper", dates: "1902-1994" },
    { nom: "Jankélévitch", dates: "1903-1985" },
    { nom: "Jonas", dates: "1903-1993" },
    { nom: "Aron", dates: "1905-1983" },
    { nom: "Sartre", dates: "1905-1980" },
    { nom: "Arendt", dates: "1906-1975" },
    { nom: "Levinas", dates: "1906-1995" },
    { nom: "Beauvoir", dates: "1908-1986" },
    { nom: "Lévi-Strauss", dates: "1908-2009" },
    { nom: "Merleau-Ponty", dates: "1908-1961" },
    { nom: "Weil", dates: "1909-1943" },
    { nom: "Hersch", dates: "1914-1984" },
    { nom: "Ricœur", dates: "1913-2005" },
    { nom: "Anscombe", dates: "1919-2001" },
    { nom: "Murdoch", dates: "1919-1999" },
    { nom: "Simondon", dates: "1920-2001" },
    { nom: "Rawls", dates: "1921-2002" },
    { nom: "Foucault", dates: "1926-1984" },
    { nom: "Putnam", dates: "1926-2016" }
];

const frise = document.querySelector(".frise");

philosophesAvecDates.forEach(philosophe => {
    const evenement = document.createElement("div");
    evenement.classList.add("evenement");

    const lien = document.createElement("a");
    lien.href = `pages/${philosophe.nom}.html`;

    const image = document.createElement("img");
    image.src = `images/${philosophe.nom.toLowerCase()}.jpg`; // Assurez-vous d'avoir les images correspondantes
    image.alt = philosophe.nom;

    const nomPhilosophe = document.createElement("p");
    nomPhilosophe.textContent = philosophe.nom;

    const datesPhilosophe = document.createElement("p");
    datesPhilosophe.textContent = philosophe.dates;

    lien.appendChild(image);
    evenement.appendChild(lien);
    evenement.appendChild(nomPhilosophe);
    evenement.appendChild(datesPhilosophe);

    frise.appendChild(evenement);
});

const notions = [
    "L’art", "Le bonheur", "La conscience", "Le devoir",
    "L’Etat", "L’inconscient", "La justice", "Le langage",
    "La liberte", "La nature", "La raison", "La religion",
    "La science", "La technique", "Le temps", "Le travail",
    "La verite"
];

// Créer une table et un corps de table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Définir le nombre de colonnes
const numColumns = 6;

// Remplir la table avec les notions
for (let i = 0; i < notions.length; i += numColumns) {
    const row = document.createElement("tr");

    for (let j = 0; j < numColumns; j++) {
        const cell = document.createElement("td");
        const index = i + j;

        if (index < notions.length) {
            const notionLink = document.createElement("a");
            notionLink.textContent = notions[index];
            notionLink.href = `pages/${notions[index]}.html`;
            notionLink.classList.add("lien");

            cell.appendChild(notionLink);
        }

        row.appendChild(cell);
    }

    tbody.appendChild(row);
}

// Ajouter le corps de la table à la table
table.appendChild(tbody);

// Obtenir l'élément contenant la table
const tableContainer = document.getElementById("table-container");

// Ajouter des classes pour appliquer le style CSS
table.classList.add("table");
tableContainer.appendChild(table);