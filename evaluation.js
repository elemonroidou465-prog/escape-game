// ===== 1. LES DONNÉES : les 6 salles =====
// Chaque salle est un objet { nom: valeur }, un peu comme une struct en C++.
// Les contenus des salles 2 à 6 sont des exemples : remplacez-les par les vôtres.
const salles = [
  {
    sousTitre: "SALLE 1 · HTML · CHAPITRE 1",
    titre: "La structure de base",
    fichier: "salle-1.html",
    code: ["<body>", "  <h1>Bonjour</h2>", "  <p>Bienvenue dans la salle 1</p>", "</body>"],
    ligneErreur: 1,                       // la ligne fautive (on compte à partir de 0)
    correction: "  <h1>Bonjour</h1>",
    reponseA: "Remplacer <code>&lt;/h2&gt;</code> par <code>&lt;/h1&gt;</code>",
    reponseB: "Supprimer la balise <code>&lt;body&gt;</code>",
    bonne: "A",
    explication: "Une balise fermante doit correspondre à la balise ouvrante : <h1> se ferme avec </h1>."
  },
  {
    sousTitre: "SALLE 2 · HTML · CHAPITRE 2",
    titre: "Formulaires, listes, sémantique",
    fichier: "salle-2.html",
    code: ["<ul>", "  <li>Pomme</p>", "  <li>Mangue</li>", "</ul>"],
    ligneErreur: 1,
    correction: "  <li>Pomme</li>",
    reponseA: "Remplacer <code>&lt;ul&gt;</code> par <code>&lt;p&gt;</code>",
    reponseB: "Remplacer <code>&lt;/p&gt;</code> par <code>&lt;/li&gt;</code>",
    bonne: "B",
    explication: "Un élément de liste s'ouvre avec <li> et se ferme avec </li>."
  },
  {
    sousTitre: "SALLE 3 · CSS · CHAPITRE 1",
    titre: "Les sélecteurs CSS, couleurs, texte",
    fichier: "style.css",
    code: ["h1 {", "  color red;", "  font-size: 30px;", "}"],
    ligneErreur: 1,
    correction: "  color: red;",
    reponseA: "Ajouter <code>:</code> après <code>color</code>",
    reponseB: "Remplacer <code>h1</code> par <code>.h1</code>",
    bonne: "A",
    explication: "En CSS, une propriété s'écrit toujours avec deux-points : color: red;"
  },
  {
    sousTitre: "SALLE 4 · CSS · CHAPITRE 2",
    titre: "La mise en page, Flexbox",
    fichier: "style.css",
    code: [".boite {", "  display: flexbox;", "  gap: 10px;", "}"],
    ligneErreur: 1,
    correction: "  display: flex;",
    reponseA: "Remplacer <code>display</code> par <code>position</code>",
    reponseB: "Remplacer <code>flexbox</code> par <code>flex</code>",
    bonne: "B",
    explication: "Pour activer Flexbox, on écrit display: flex; et non flexbox."
  },
  {
    sousTitre: "SALLE 5 · JAVASCRIPT · CHAPITRE 1",
    titre: "Les variables en JS, conditions",
    fichier: "salle-5.js",
    code: ["let age = 20;", "if (age = 18) {", '  console.log("Majeur");', "}"],
    ligneErreur: 1,
    correction: "if (age >= 18) {",
    reponseA: "Remplacer <code>=</code> par <code>&gt;=</code> dans le <code>if</code>",
    reponseB: "Remplacer <code>let</code> par <code>int</code>",
    bonne: "A",
    explication: "Un seul = donne une valeur à une variable. Pour comparer dans un if, on utilise >=, === ..."
  },
  {
    sousTitre: "SALLE 6 · JAVASCRIPT · CHAPITRE 2",
    titre: "Les fonctions, DOM, événements",
    fichier: "salle-6.js",
    code: ["function dire(nom) {", '  console.log("Salut " + nom);', "}", "dire;"],
    ligneErreur: 3,
    correction: 'dire("Ali");',
    reponseA: "Remplacer <code>function</code> par <code>fonction</code>",
    reponseB: 'Remplacer <code>dire;</code> par <code>dire("Ali");</code>',
    bonne: "B",
    explication: "Une fonction s'appelle avec des parenthèses. Sans elles, elle n'est pas exécutée."
  }
];

const consigne = "Trouve l'erreur dans le code, puis choisis la bonne correction pour ouvrir la porte. Attention : une mauvaise réponse te coûte une vie.";


// ===== 2. LES VARIABLES DU JEU =====
let numeroSalle = 0;     // 0 = salle 1, 1 = salle 2, ...
let vies = 3;
let termine = false;     // true quand la salle est gagnée ou perdue


// ===== 3. ON RÉCUPÈRE LES ÉLÉMENTS DE LA PAGE =====
const sousTitre = document.getElementById("sous-titre-salle");
const titreSalle = document.getElementById("titre-salle");
const nomFichier = document.getElementById("nom-fichier");
const zoneCode = document.getElementById("code");
const textVies = document.getElementById("vies-texte");
const coeurs = document.querySelectorAll(".coeur");
const porte = document.getElementById("porte");
const etatPorte = document.getElementById("etat-porte");
const message = document.getElementById("message");
const messageTitre = document.getElementById("message-titre");
const messageTexte = document.getElementById("message-texte");
const boutonA = document.getElementById("reponse-a");
const boutonB = document.getElementById("reponse-b");
const boutonRecommencer = document.getElementById("btn-recommencer");
const boutonSuivant = document.getElementById("btn-suivant");


// ===== 4. LES FONCTIONS =====

// Dessine le code à l'écran (corrige = true : la ligne fautive est réparée)
function afficherCode(corrige) {
  const salle = salles[numeroSalle];
  zoneCode.innerHTML = "";                       // on vide l'ancien code

  for (let i = 0; i < salle.code.length; i++) {
    const ligne = document.createElement("p");   // on crée un <p>
    let texte = salle.code[i];

    if (i === salle.ligneErreur && corrige) {
      texte = salle.correction;
    }
    ligne.textContent = (i + 1) + "  " + texte + " ";

    if (i === salle.ligneErreur) {
      const etiquette = document.createElement("span");
      if (corrige) {
        ligne.className = "corrige";
        etiquette.className = "etiquette vert";
        etiquette.textContent = "CORRIGÉ";
      } else {
        ligne.className = "erreur";
        etiquette.className = "etiquette";
        etiquette.textContent = "ERREUR";
      }
      ligne.appendChild(etiquette);              // on met l'étiquette dans la ligne
    }

    zoneCode.appendChild(ligne);                 // on met la ligne dans le bloc de code
  }
}

// Allume ou éteint les cœurs selon le nombre de vies
function afficherVies() {
  for (let i = 0; i < coeurs.length; i++) {
    if (i < vies) {
      coeurs[i].classList.remove("perdu");
    } else {
      coeurs[i].classList.add("perdu");
    }
  }
  textVies.textContent = vies + " sur 3";
}

// Prépare l'écran pour la salle courante
function afficherSalle() {
  const salle = salles[numeroSalle];
  vies = 3;
  termine = false;

  sousTitre.textContent = salle.sousTitre;
  titreSalle.textContent = salle.titre;
  nomFichier.textContent = salle.fichier;

  boutonA.innerHTML = '<span class="lettre">A</span><span>' + salle.reponseA + '</span>';
  boutonB.innerHTML = '<span class="lettre">B</span><span>' + salle.reponseB + '</span>';
  boutonA.className = "reponse";
  boutonB.className = "reponse";
  boutonA.disabled = false;
  boutonB.disabled = false;

  porte.className = "porte";
  porte.textContent = "🔒";
  etatPorte.textContent = "Porte verrouillée";

  message.className = "message";
  messageTitre.textContent = "Ta mission";
  messageTexte.textContent = consigne;

  boutonSuivant.hidden = true;

  afficherCode(false);
  afficherVies();
}

// Appelée quand on clique sur A ou B
function choisir(lettre) {
  if (termine) {
    return;                                      // la salle est finie : on ne fait rien
  }

  const salle = salles[numeroSalle];
  let bouton = boutonB;
  if (lettre === "A") {
    bouton = boutonA;
  }

  if (lettre === salle.bonne) {
    // ----- BONNE RÉPONSE -----
    termine = true;
    bouton.classList.add("bonne");
    boutonA.disabled = true;
    boutonB.disabled = true;

    porte.classList.add("ouverte");
    porte.textContent = "🔓";
    etatPorte.textContent = "Porte ouverte";

    message.classList.add("succes");
    messageTitre.textContent = "Bravo, la porte s'ouvre !";
    messageTexte.textContent = salle.explication;

    afficherCode(true);

    if (numeroSalle < salles.length - 1) {
      messageTexte.textContent = salle.explication + " Tu passes à la salle suivante.";
      boutonSuivant.hidden = false;
    } else {
      messageTitre.textContent = "Bravo, tu as ouvert les 6 portes !";
    }

  } else {
    // ----- MAUVAISE RÉPONSE -----
    vies = vies - 1;
    bouton.classList.add("mauvaise");
    afficherVies();

    if (vies === 0) {
      termine = true;
      boutonA.disabled = true;
      boutonB.disabled = true;
      message.classList.add("echec");
      messageTitre.textContent = "Plus aucune vie !";
      messageTexte.textContent = "La porte reste fermée. Relis le cours, puis recommence la salle.";
    } else {
      messageTitre.textContent = "Mauvaise réponse";
      messageTexte.textContent = "Il te reste " + vies + " vie(s). Essaie encore !";
    }
  }
}


// ===== 5. LES ÉVÉNEMENTS : que faire quand on clique ? =====
boutonA.addEventListener("click", function () {
  choisir("A");
});

boutonB.addEventListener("click", function () {
  choisir("B");
});

boutonRecommencer.addEventListener("click", afficherSalle);

boutonSuivant.addEventListener("click", function () {
  numeroSalle = numeroSalle + 1;
  afficherSalle();
});


// ===== 6. ON DÉMARRE =====
afficherSalle();
