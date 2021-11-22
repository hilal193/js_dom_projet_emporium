// mes span j'ai fais span pas de bouton
let indicator = document.getElementsByClassName('indic');
// je recupere toutes mes images
let img = document.querySelectorAll('.img');
// premier span
    indicator[0].addEventListener('click',()=>{
        // ici je change la position de mes image
        // translateX = horizontal de gauche a droite
        // j'ai du mal avec position X
    img[0].style.transform = "translateX(0%)"
    img[1].style.transform = "translateX(120%)"
    // img[1].style.transform = "translateX(150%)"
    img[2].style.transform = "translateX(240%)"
    // img[2].style.transform = "translateX(300%)"
    img[3].style.transform = "translateX(360%)"
    // img[3].style.transform = "translateX(450%)"
    img[4].style.transform = "translateX(600%)"
    img[5].style.transform = "translateX(750%)"
    img[6].style.transform = "translateX(900%)"
})
indicator[1].addEventListener("click",() =>{
    // pareil je dois jouer avec les pourcentage
    img[0].style.transform = "translateX(-150%)"
    img[1].style.transform = "translateX(0%)"
    img[2].style.transform = "translateX(120%)"
    img[3].style.transform = "translateX(240%)"
    img[4].style.transform = "translateX(360%)"
    img[5].style.transform = "translateX(480%)"
    img[6].style.transform = "translateX(600%)"

})
indicator[2].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-240%)"
    img[1].style.transform = "translateX(-120%)"
    img[2].style.transform = "translateX(0%)"
    img[3].style.transform = "translateX(120%)"
    img[4].style.transform = "translateX(240%)"
    img[5].style.transform = "translateX(360%)"
    img[6].style.transform = "translateX(460%)"

}
)
indicator[3].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-360%)"
    img[1].style.transform = "translateX(-240%)"
    img[2].style.transform = "translateX(-120%)"
    img[3].style.transform = "translateX(0%)"
    img[4].style.transform = "translateX(120%)"
    img[5].style.transform = "translateX(240%)"
    img[6].style.transform = "translateX(360%)"

}
)
indicator[4].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-480%)"
    img[1].style.transform = "translateX(-360%)"
    img[2].style.transform = "translateX(-240%)"
    img[3].style.transform = "translateX(-120%)"
    img[4].style.transform = "translateX(0%)"
    img[5].style.transform = "translateX(120%)"
    img[6].style.transform = "translateX(240%)"

}
)
// Je laisse que 4 span/bouton comme dans video
// le 5 et le 6 eme span sert pour la responsive

indicator[5].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-7500%)"
    img[1].style.transform = "translateX(-600%)"
    img[2].style.transform = "translateX(-450%)"
    img[3].style.transform = "translateX(-300%)"
    img[4].style.transform = "translateX(-150%)"
    img[5].style.transform = "translateX(0%)"
    img[6].style.transform = "translateX(150%)"

}
)
indicator[6].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-900%)"
    img[1].style.transform = "translateX(-750%)"
    img[2].style.transform = "translateX(-600%)"
    img[3].style.transform = "translateX(-450%)"
    img[4].style.transform = "translateX(-300%)"
    img[5].style.transform = "translateX(-150%)"
    img[6].style.transform = "translateX(0%)"

}
)
export {indicator,img}