// je recupere les boutons
let emporiumH1 = document.querySelector("nav")
let header = document.querySelector("header")

// au scroll ma navbar reste fix
window.addEventListener("scroll",()=>{
    // doc pour le pageYoffset(scrolly)  => https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

    // ici je fix ma nav et meet mon h1 a gauche
    if (window.pageYOffset >= "5") {
        header.style.position="fixed"
        header.style.width="100%"
        header.style.top="0"
        header.style.zIndex="1000"
        header.classList.remove("flex-column")
        header.classList.add("justify-content-between")
        header.querySelector("h1").style.fontSize="30px"
        header.querySelector("h1").style.marginLeft="10px"
        header.querySelector("h1").style.marginBottom="10px"
        // header.classList.remove("mx-auto")
        // header.querySelector(".connexionn").style.fontSize="10px"
        // header.querySelector(".connexionn").style.padding="1px"
        // header.querySelector("h1").style.transition="2s"
    } else {
        header.style.position="static"
        header.classList.add("flex-column")
        header.classList.remove("justify-content-between")
        header.querySelector("h1").style.fontSize="50px"
    }
})

export {emporiumH1}


