// 1. On récupère l'élément HTML qui a l'id "ecran"
const ecran = document.getElementById("ecran");

// 2. Appelée quand on clique sur un chiffre ou un opérateur
//    Exemple : <button onclick="ajouter('7')"> appelle ajouter("7")
function ajouter(valeur) {
  // On colle la valeur à la fin de ce qui est déjà affiché
  console.log("ajouter", valeur);

  ecran.value = ecran.value + valeur;
}

// 3. Appelée quand on clique sur "C"
function effacer() {
  ecran.value = "";
}

// 4. Appelée quand on clique sur "="
function calculer() {
  // Ce qui est affiché à l'écran, par exemple "12+7"
  let resultat = eval(ecran.value);
  console.log("resultat", resultat)

  // On affiche le résultat à l'écran
  ecran.value = resultat;
}
