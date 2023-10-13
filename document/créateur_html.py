import os

# Liste des noms de philosophes
philosophes = [
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
]

modele_html = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Philo - {}</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="icon" href="../images/icon.png" type="image/png">
</head>
<body>
    <section class="section section1">
        <div class="retour">
            <a class="lien" href="../index.html">&#8592; RETOUR</a>
        </div>
        <div class="titre titre1">
            <h1>{}</h1>
        </div>
    </section>
    <img class="wave wave1" src="../images/wave (1).png">
    <section class="section section6">
        <div class="philosophe">
            <img class="philosophe" src="../images/{}.jpg" alt="{}">
            <p><h1>{}</h1></p>
            <p>date</p>
        </div>
        <div class="bio">
            <h1>Biographie :</h1>
            <p>biographie</p>
        </div>
    </section>
    <img class="wave wave2" src="../images/wave (2).png">
    <script src="../script.js"></script>
</body>
</html>
"""

# Chemin du répertoire contenant les fichiers HTML
repertoire = 'C:\\Users\\matth\\OneDrive\\Documents\\site_philo\\pages'

# Parcours de la liste des philosophes
for philosophe in philosophes:
    # Construire le chemin complet du fichier HTML
    chemin_fichier = os.path.join(repertoire, f"{philosophe}.html")
    
    # Écriture du contenu HTML dans le fichier
    with open(chemin_fichier, 'w') as fichier:
        fichier.write(modele_html.format(philosophe, philosophe, philosophe, philosophe, philosophe))

print("Les fichiers HTML ont été renommés avec succès.")