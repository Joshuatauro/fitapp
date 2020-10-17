toggler = document.querySelector(".navbar__container__hamburger")
navLink = document.querySelector(".navbar__container__links")

//dark mode var


let status = false
// let darkValue = false

toggler.addEventListener('click' , function(){
    if (status ===  false){
        toggler.classList.add('show')
        navLink.classList.add('open')
        status = true
    }

    else{
        toggler.classList.remove('show')
        navLink.classList.remove('open')
        status = false
    }
})

// DARK MODE
darkMode = document.querySelector(".navbar__container__button")

navbar = document.querySelector(".navbar")
hero = document.querySelector(".hero")
choose = document.querySelector(".choose-us")
about = document.querySelector(".about")
pricing = document.querySelector('.pricing')
contact = document.querySelector(".contact")

let darkValue = false

darkMode.addEventListener('click' , function(){
    if (darkValue === false){
        navbar.classList.add("darkMode")
        hero.classList.add("darkMode")
        choose.classList.add("darkMode")
        about.classList.add("darkMode")
        pricing.classList.add('darkMode')
        contact.classList.add('darkMode')

        darkMode.classList.add('dark')

        darkValue = true
    }
    else{
        darkMode.classList.remove('dark')

        navbar.classList.remove("darkMode")
        hero.classList.remove('darkMode')
        choose.classList.remove("darkMode")
        about.classList.remove("darkMode")
        pricing.classList.remove('darkMode')
        contact.classList.remove("darkMode")

        darkValue = false
    }
})


// clearing content in field

var button = document.querySelector('.submit-button')

button.addEventListener('click' , function(){
    document.querySelector(".name").value = ''
    document.querySelector(".email").value = ''
    document.querySelector('textarea').value = ''
})