// doc pour cacher https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
// https://stackoverflow.com/questions/13456474/how-to-hide-content-in-html
//https://stackoverflow.com/questions/41269317/issues-with-using-classlist-to-hide-and-show-elements

// je recupere mes boutons inscription et connexion
let connexion = document.querySelector(".inscrit")
let inscription = document.querySelector(".enregistre")
// je recupere mes class gauche et droite que j'ai rajouter
let gauche = document.querySelector(".gauche")
let droite = document.querySelector(".droite")

// quand j'appuie sur le botuon click
connexion.addEventListener("click", () => {
    // de base ma div droite sera deja caché avec l'html
    // ici je cache le contenu
    if (!droite.classList.contains('hide-content')) {
        // marche aussi avec display none
        // document.getElementById("element").style.display = "none"; 
        droite.classList.add('hide-content');
    }
    if (gauche.classList.contains('hide-content')) {
        gauche.classList.remove('hide-content');
    }
})

inscription.addEventListener("click", () => {
    if (!gauche.classList.contains('hide-content')) {
        gauche.classList.add('hide-content');
    }
    if (droite.classList.contains('hide-content')) {
        droite.classList.remove('hide-content');
    }
})

export {connexion,inscription};