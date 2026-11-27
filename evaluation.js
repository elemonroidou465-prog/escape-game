

const salles = [

  {
    langage: "HTML",
    chapitre: 1,
    titre: "La structure de base",
    fichier: "salle-1.html",
    lignes: [
      '<span class="balise">&lt;body&gt;</span>',
      '  <span class="balise">&lt;h1&gt;</span>Bonjour<span class="orange">&lt;/h2&gt;</span>',
      '  <span class="balise">&lt;p&gt;</span>Bienvenue dans la salle 1<span class="balise">&lt;/p&gt;</span>',
      '<span class="balise">&lt;/body&gt;</span>'
    ],
    ligneErreur: 2,
    ligneCorrigee: '  <span class="balise">&lt;h1&gt;</span>Bonjour<span class="balise">&lt;/h1&gt;</span>',
    texteA: 'Remplacer <code>&lt;/h2&gt;</code> par <code>&lt;/h1&gt;</code>',
    texteB: 'Supprimer la balise <code>&lt;body&gt;</code>',
    bonneReponse: "A",
    explication: 'Une balise fermante doit correspondre à la balise ouvrante : <code>&lt;h1&gt;</code> se ferme avec <code>&lt;/h1&gt;</code>.'
  },


  {
    langage: "HTML",
    chapitre: 2,
    titre: "Formulaires, listes, sémantique",
    fichier: "salle-2.html",
    lignes: [
      '<span class="balise">&lt;ul&gt;</span>',
      '  <span class="balise">&lt;li&gt;</span>Pomme<span class="balise">&lt;/li&gt;</span>',
      '  <span class="balise">&lt;li&gt;</span>Mangue<span class="balise">&lt;/li&gt;</span>',
      '<span class="orange">&lt;/ol&gt;</span>'
    ],
    ligneErreur: 4,
    ligneCorrigee: '<span class="balise">&lt;/ul&gt;</span>',
    texteA: 'Remplacer <code>&lt;li&gt;</code> par <code>&lt;p&gt;</code>',
    texteB: 'Remplacer <code>&lt;/ol&gt;</code> par <code>&lt;/ul&gt;</code>',
    bonneReponse: "B",
    explication: 'La liste commence avec <code>&lt;ul&gt;</code>, elle doit donc finir avec <code>&lt;/ul&gt;</code> et pas avec <code>&lt;/ol&gt;</code>.'
  },

  {
    langage: "CSS",
    chapitre: 1,
    titre: "Les sélecteurs CSS, couleurs, texte",
    fichier: "salle-3.css",
    lignes: [
      '<span class="balise">.titre</span> {',
      '  color: <span class="orange">#14152e</span>',
      '  font-size: <span class="rose">24px</span>;',
      '}'
    ],
    ligneErreur: 2,
    ligneCorrigee: '  color: <span class="rose">#14152e</span>;',
    texteA: 'Ajouter un <code>;</code> à la fin de la ligne <code>color</code>',
    texteB: 'Supprimer la ligne <code>font-size</code>',
    bonneReponse: "A",
    explication: 'Chaque ligne CSS se termine par un point-virgule <code>;</code>. Sans lui, la ligne suivante ne marche pas.'
  },

  {
    langage: "CSS",
    chapitre: 2,
    titre: "La mise en page, Flexbox",
    fichier: "salle-4.css",
    lignes: [
      '<span class="balise">.menu</span> {',
      '  display: <span class="orange">flexbox</span>;',
      '  gap: <span class="rose">16px</span>;',
      '}'
    ],
    ligneErreur: 2,
    ligneCorrigee: '  display: <span class="vert">flex</span>;',
    texteA: 'Remplacer <code>gap</code> par <code>margin</code>',
    texteB: 'Remplacer <code>flexbox</code> par <code>flex</code>',
    bonneReponse: "B",
    explication: 'Pour utiliser Flexbox, on écrit <code>display: flex;</code>. Le mot <code>flexbox</code> n\'existe pas en CSS.'
  },

  {
    langage: "JavaScript",
    chapitre: 1,
    titre: "Les variables en JS, conditions",
    fichier: "salle-5.js",
    lignes: [
      '<span class="violet">let</span> age = <span class="rose">20</span>;',
      '<span class="violet">if</span> (age <span class="orange">=</span> <span class="rose">18</span>) {',
      '  console.log(<span class="vert">"Majeur"</span>);',
      '}'
    ],
    ligneErreur: 2,
    ligneCorrigee: '<span class="violet">if</span> (age <span class="vert">&gt;=</span> <span class="rose">18</span>) {',
    texteA: 'Remplacer <code>=</code> par <code>&gt;=</code> dans la condition',
    texteB: 'Supprimer le mot <code>let</code>',
    bonneReponse: "A",
    explication: 'Un seul <code>=</code> sert à donner une valeur. Pour comparer, on utilise <code>&gt;=</code>, <code>==</code> ou <code>===</code>.'
  },

  {
    langage: "JavaScript",
    chapitre: 2,
    titre: "Les fonctions, DOM, événements",
    fichier: "salle-6.js",
    lignes: [
      '<span class="violet">function</span> saluer() {',
      '  alert(<span class="vert">"Salut !"</span>);',
      '}',
      'bouton.addEventListener(<span class="vert">"click"</span>, <span class="orange">saluer()</span>);'
    ],
    ligneErreur: 4,
    ligneCorrigee: 'bouton.addEventListener(<span class="vert">"click"</span>, <span class="vert">saluer</span>);',
    texteA: 'Remplacer <code>"click"</code> par <code>"clic"</code>',
    texteB: 'Enlever les parenthèses : <code>saluer()</code> devient <code>saluer</code>',
    bonneReponse: "B",
    explication: 'Avec les parenthèses, la fonction s\'exécute tout de suite. Sans elles, elle s\'exécute seulement au clic.'
  }

];


// ---------- 2. Ce dont le jeu se souvient (change -> let) ----------
let numeroSalle = 0;       // 0 = salle 1, 1 = salle 2, etc.
let vies = 3;              // nombre de vies restantes
let partieFinie = false;   // devient true quand on gagne ou quand on perd


// ---------- 3. Les cœurs ----------

function afficherCoeurs() {
  const forme = '<path d="M12 21 C12 21 3 15 3 9 C3 6 5 4 7.5 4 C9.5 4 11 5 12 6.5 C13 5 14.5 4 16.5 4 C19 4 21 6 21 9 C21 15 12 21 12 21 Z"/>';
  let html = "";

  for (let i = 1; i <= 3; i++) {
    if (i <= vies) {
      // cœur plein
      html = html + '<svg class="coeur" viewBox="0 0 24 24">' + forme + '</svg>';
    } else {
      // cœur vide
      html = html + '<svg class="coeur coeur-vide" viewBox="0 0 24 24">' + forme + '</svg>';
    }
  }

  document.getElementById("coeurs").innerHTML = html;
  document.getElementById("vies-nombre").innerHTML = vies + " sur 3";
}


// ---------- 4. Le code à corriger ----------

// Écrit les lignes de code dans la fenêtre
// corrige = true  -> la ligne de l'erreur est montrée corrigée (en vert)
// corrige = false -> la ligne de l'erreur est montrée avec l'erreur
function afficherCode(corrige) {
  const salle = salles[numeroSalle];
  let html = "";

  for (let i = 0; i < salle.lignes.length; i++) {
    const numero = i + 1;
    let texte = salle.lignes[i];
    let classe = "ligne";
    let etiquette = "";

    // Est-ce la ligne qui contient l'erreur ?
    if (numero == salle.ligneErreur) {
      if (corrige == true) {
        classe = "ligne ligne-corrigee";
        texte = salle.ligneCorrigee;
        etiquette = '<span class="etiquette etiquette-verte">CORRIGÉ</span>';
      } else {
        classe = "ligne ligne-erreur";
        etiquette = '<span class="etiquette">ERREUR</span>';
      }
    }

    html = html + '<div class="' + classe + '">' +
      '<span class="numero">' + numero + '</span>' +
      '<span class="ligne-texte">' + texte + '</span>' +
      etiquette +
      '</div>';
  }

  document.getElementById("code").innerHTML = html;
}


// ---------- 5. La porte, le cadenas et le message ----------

// ouverte = true -> porte ouverte, sinon porte verrouillée
function afficherPorte(ouverte) {
  if (ouverte == true) {
    document.getElementById("porte-fermee").style.display = "none";
    document.getElementById("porte-ouverte").style.display = "block";
    document.getElementById("porte-texte").innerHTML = "Porte ouverte";
    document.getElementById("porte-texte").style.color = "#86efac";
  } else {
    document.getElementById("porte-fermee").style.display = "block";
    document.getElementById("porte-ouverte").style.display = "none";
    document.getElementById("porte-texte").innerHTML = "Porte verrouillée";
    document.getElementById("porte-texte").style.color = "#e8eaff";
    document.getElementById("porte-rond").setAttribute("fill", "#f5b02e");
    document.getElementById("anse").classList.remove("anse-ouverte");
  }
}

// Ouvre le cadenas (bonne réponse) : l'anse se lève
function ouvrirCadenas() {
  document.getElementById("anse").classList.add("anse-ouverte");
  document.getElementById("porte-texte").innerHTML = "Cadenas ouvert";
  document.getElementById("porte-texte").style.color = "#86efac";
}

// Ouvre la porte, affiche le message de victoire et le bouton "Salle suivante"
function ouvrirPorte() {
  // Si on a cliqué sur "Recommencer" entre-temps, on ne fait rien
  if (partieFinie == false) {
    return;
  }

  const salle = salles[numeroSalle];
  afficherPorte(true);

  if (numeroSalle == salles.length - 1) {
    afficherMessage("Bravo, toutes les portes sont ouvertes !", salle.explication + " Tu as terminé les 6 salles.", "vert");
  } else {
    afficherMessage("Bravo, la porte s'ouvre !", salle.explication + " Tu passes à la salle suivante.", "vert");
  }

  document.getElementById("bouton-suivant").style.display = "block";
}

// Fait vibrer le cadenas (mauvaise réponse)
function faireVibrerCadenas() {
  const cadenas = document.getElementById("cadenas");

  // On enlève la classe, puis on la remet : ça relance l'animation à chaque erreur
  cadenas.classList.remove("vibre");
  cadenas.getBoundingClientRect();
  cadenas.classList.add("vibre");
}

// Change le message sous la porte
// couleur peut être "" (bleu), "vert" ou "rouge"
function afficherMessage(titre, texte, couleur) {
  const boite = document.getElementById("message");

  boite.className = "message";
  if (couleur == "vert") {
    boite.className = "message message-vert";
  }
  if (couleur == "rouge") {
    boite.className = "message message-rouge";
  }

  document.getElementById("message-titre").innerHTML = titre;
  document.getElementById("message-texte").innerHTML = texte;
}


// ---------- 6. Les boutons de réponse ----------

// Remet UN bouton (A ou B) à zéro : couleur normale, cliquable, sans signe
function remettreBouton(lettre) {
  document.getElementById("bouton-" + lettre).className = "reponse";
  document.getElementById("bouton-" + lettre).disabled = false;
  document.getElementById("signe-" + lettre).innerHTML = "";
}

// Bloque les deux boutons
function bloquerBoutons() {
  document.getElementById("bouton-A").disabled = true;
  document.getElementById("bouton-B").disabled = true;
}

// Donne l'autre lettre : A -> B et B -> A
function autreLettre(lettre) {
  if (lettre == "A") {
    return "B";
  }
  return "A";
}


// ---------- 7. Afficher une salle ----------

// Appelée au début de chaque salle et quand on clique sur "Recommencer"
function afficherSalle() {
  const salle = salles[numeroSalle];

  // On redonne 3 vies et on remet la partie en route
  vies = 3;
  partieFinie = false;

  // Titre du bandeau
  document.getElementById("salle-info").textContent = code ;
    "SALLE " + (numeroSalle + 1) + " · " + salle.langage.toUpperCase() + " · CHAPITRE " + salle.chapitre;
  document.getElementById("salle-titre").innerHTML = salle.titre;
  document.getElementById("nom-fichier").innerHTML = salle.fichier;

  // Cœurs, code, porte, message
  afficherCoeurs();
  afficherCode(false);
  afficherPorte(false);
  afficherMessage(
    "Ta mission",
    "Trouve l'erreur dans le code, puis choisis la bonne correction pour ouvrir la porte. Attention : une mauvaise réponse te coûte une vie.",
    ""
  );

  // Réponses A et B
  document.getElementById("texte-A").innerHTML = salle.texteA;
  document.getElementById("texte-B").innerHTML = salle.texteB;
  remettreBouton("A");
  remettreBouton("B");

  // Boutons du bas
  document.getElementById("bouton-suivant").style.display = "none";
  document.getElementById("bouton-recommencer").className = "bouton-recommencer";

  // Dernière salle : le bouton change de nom
  if (numeroSalle == salles.length - 1) {
    document.getElementById("bouton-suivant").innerHTML = "Terminer →";
  } else {
    document.getElementById("bouton-suivant").innerHTML = "Salle suivante →";
  }
}


// ---------- 8. Fonctions appelées par les boutons ----------

// Appelée quand on clique sur A ou B
function choisir(lettre) {

  // Si la partie est finie, on ne fait rien
  if (partieFinie == true) {
    return;
  }

  const salle = salles[numeroSalle];

  if (lettre == salle.bonneReponse) {

    // ----- BONNE RÉPONSE -----
    partieFinie = true;

    document.getElementById("bouton-" + lettre).className = "reponse reponse-juste";
    document.getElementById("signe-" + lettre).innerHTML = "✓";
    document.getElementById("bouton-" + autreLettre(lettre)).className = "reponse reponse-grise";
    bloquerBoutons();

    afficherCode(true);

    // 1) le cadenas s'ouvre tout de suite
    ouvrirCadenas();

    // 2) 0,8 seconde plus tard, la porte s'ouvre
    setTimeout(ouvrirPorte, 800);

  } else {

    // ----- MAUVAISE RÉPONSE -----
    vies = vies - 1;
    afficherCoeurs();
    faireVibrerCadenas();

    document.getElementById("bouton-" + lettre).className = "reponse reponse-fausse";
    document.getElementById("signe-" + lettre).innerHTML = "✕";

    if (vies == 0) {
      // Plus de vie : c'est perdu
      partieFinie = true;
      document.getElementById("bouton-" + autreLettre(lettre)).className = "reponse reponse-grise";
      bloquerBoutons();

      afficherMessage(
        "Plus aucune vie !",
        "La porte reste fermée. Relis le cours sur « " + salle.titre + " », puis recommence la salle.",
        "rouge"
      );
      document.getElementById("bouton-recommencer").className = "bouton-recommencer recommencer-dore";

      // La porte devient rose
      document.getElementById("porte-rond").setAttribute("fill", "#ff7b8f");
      document.getElementById("porte-texte").style.color = "#ff7b8f";

    } else {
      // Il reste des vies
      afficherMessage(
        "Mauvaise réponse",
        "Tu perds une vie. Il t'en reste " + vies + ". Regarde bien la ligne en surbrillance.",
        "rouge"
      );
    }
  }
}

// Bouton "Recommencer" : on refait la même salle
function recommencer() {
  afficherSalle();
}

// Bouton "Salle suivante"
function salleSuivante() {
  if (numeroSalle == salles.length - 1) {
    // C'était la dernière salle : retour à l'accueil
    window.location.href = "index.html";
  } else {
    numeroSalle = numeroSalle + 1;
    afficherSalle();
    window.scrollTo(0, 0);
  }
}


// ---------- 9. Démarrage de la page ----------

// On regarde si l'adresse contient ?salle=3 (par exemple)
const adresse = new URLSearchParams(window.location.search);
const salleDemandee = parseInt(adresse.get("salle"));

if (salleDemandee >= 1 && salleDemandee <= salles.length) {
  numeroSalle = salleDemandee - 1;
}

afficherSalle();

