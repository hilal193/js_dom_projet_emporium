// je recupere mes boutons
let white = document.querySelector('#btnJour')
let black = document.querySelector('#btnNuit')

// au click du bouton blanc
white.addEventListener('click', ()=>{
    let bgNoir = document.querySelectorAll('.bg-dark')
    let textNoir = document.querySelectorAll('.text-white')
    let icon= document.querySelectorAll('.icon1')
    // let icon2= document.querySelectorAll('.icon2')
    bgNoir.forEach(element => {
        element.classList.remove('bg-dark')
        element.classList.remove('navbar-dark')
        element.classList.add('bg-white')
        element.classList.add('navbar-light')
        element.classList.add('text-white')
    })
    textNoir.forEach(element =>{
        element.classList.remove('text-white')
        element.classList.add('text-dark')
    })
    icon.forEach(element => {
        element.classList.remove('text-dark')
        element.classList.add('text-white')
    });
    // icon2.forEach(element => {
    //     element.classList.remove('text-dark')
    //     element.classList.add('text-dark')
    // });
})

// au click du bouton noir
black.addEventListener('click', ()=>{
    let bgBlanc = document.querySelectorAll('.bg-white')
    let textBlanc = document.querySelectorAll('.text-dark')
    let boutonJour = document.querySelectorAll("#btnJour");
    let icon2= document.querySelectorAll('.icon2')

    bgBlanc.forEach(element => {
        element.classList.remove('bg-white')
        element.classList.remove('bg-light')
        element.classList.add('bg-dark')
    })
    textBlanc.forEach(element => {
        element.classList.remove('text-dark')
        element.classList.add('text-white')
    })
    boutonJour.forEach(element => {
        element.classList.remove("bg-dark")
        element.classList.add("bg-white")
    });
    icon2.forEach(element => {
        element.classList.remove('text-white')
        element.classList.add('text-dark')
    });
})

export {white, black}