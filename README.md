# Mw Acad – Site de promotion des formations

Site personnalisé pour **Mw Acad** (Mwima Mupila GASPARD), formations à Kinshasa et en ligne.

## Contenu du site

- **Accueil** : phrase d’accroche, présentation, boutons d’action
- **Formations** : 6 formations (Python, Réseaux, Cybersécurité, Bureautique, Informatique générale, Art oratoire) avec tarifs Python et « nous contacter » pour les autres
- **À propos** : présentation de Mwima Mupila GASPARD et de Mw Acad
- **Inscriptions & FAQ** : questions fréquentes (inscription, durée, présentiel/en ligne, prérequis, tarifs)
- **Actualités & blog** : zone pour articles / actualités (à compléter)
- **Contact** : email, téléphone, Kinshasa, réseaux sociaux (à compléter), formulaire
- **Mentions légales** et **Politique de confidentialité** : structures à compléter
- **Bannière cookies** : accepter / refuser, lien vers la politique de confidentialité

## Thèmes

Deux thèmes au choix (boutons dans le header) :

- **Sombre** : fond sombre, texte clair
- **Clair** : fond clair, texte foncé

Le choix est enregistré dans le navigateur (localStorage).

## Ouvrir le site

1. Ouvrez le dossier `site-mwacad` dans l’explorateur.
2. Double-cliquez sur `index.html` pour l’ouvrir dans votre navigateur.

Ou en ligne de commande : `start index.html` (Windows) dans le dossier `site-mwacad`.

## Personnalisation

### Logo

- Fichier actuel : `images/logo.svg` (logo « MA » + texte « Mw Acad » à côté dans le header).
- Pour changer le logo : remplacez `images/logo.svg` par votre image (PNG, SVG, JPG) ou modifiez le `src` de l’image dans `index.html` (recherchez `logo.svg`).

### Images des formations

- Dossier : `images/formations/`
- Fichiers attendus : `python.jpg`, `reseaux.jpg`, `cybersecurite.jpg`, `bureautique.jpg`, `informatique-generale.jpg`, `art-oratoire.jpg`
- Voir `images/formations/README.txt` pour la liste et les dimensions conseillées.
- Si l’image est absente, un placeholder avec le nom du cours s’affiche. Pour utiliser une autre image, changez le `src` dans `index.html` (recherchez « formation-img » ou le nom du fichier).

### Réseaux sociaux

- Dans `index.html`, section Contact, cherchez la div `social-links`.
- Remplacez les `href="#"` par vos liens (LinkedIn, Facebook, etc.) et le texte « Réseau 1 », « Réseau 2 » par le nom du réseau.

### Modules des formations

- Dans chaque carte formation, une div `formation-modules` est prévue. Vous pouvez y ajouter une liste de modules (voir le commentaire dans le code pour Python).

### Blog / actualités

- Dupliquez le bloc `<article class="blog-card">...</article>` dans la section « Actualités & blog » pour ajouter des articles. Modifiez l’image (`images/blog/...`), la date, le titre, le résumé et le lien.

### Mentions légales et confidentialité

- Ouvrez `pages/mentions-legales.html` et `pages/confidentialite.html` et complétez les champs indiqués (éditeur, hébergeur, droits, durée de conservation, etc.).

## Fichiers principaux

| Fichier              | Rôle                                      |
|----------------------|-------------------------------------------|
| `index.html`         | Page d’accueil (structure et contenu)    |
| `styles.css`         | Mise en forme et 3 thèmes                 |
| `script.js`          | Thème, menu mobile, cookies, formulaire   |
| `pages/mentions-legales.html` | Mentions légales (à compléter)   |
| `pages/confidentialite.html`  | Confidentialité (à compléter)    |
| `images/logo.svg`   | Logo (remplaçable)                        |

## Évolutions prévues

- Boutique pour la vente
- Autres formations

Ces fonctionnalités pourront être ajoutées plus tard (nouvelles pages ou sections).
