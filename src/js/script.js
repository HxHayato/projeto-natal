let menuMobile = document.querySelector('.menu-mobile')
let iconMenu = document.querySelector('#menu-mobile')
let nav = document.querySelector('.navbar-mobile')

menuMobile.addEventListener('click', (e) => {
    if (iconMenu.className == 'bx bx-menu-alt-right'){

        iconMenu.classList.remove('bx-menu-alt-right')
        iconMenu.classList.add('bx-x')

        nav.style.display = 'block'

    } else if (iconMenu.className == 'bx bx-x') {

        iconMenu.classList.remove('bx-x')
        iconMenu.classList.add('bx-menu-alt-right')
    
        nav.style.display = 'none'
        // nav.style.height = 'auto'
    }
})