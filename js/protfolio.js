// toggle menu icon when click => function
let menuIcon = document.querySelector('#manu-icon')
let navLinks = document.querySelector('.nav-bar')

menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('is-active')
})
