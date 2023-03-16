function navBarHandler() {
    let navbarMobile = document.querySelector('.navbar-mobile');
    let navbarMobileEls = document.querySelectorAll('.navbar-mobile li span')
    let navListEls = document.querySelectorAll('.nav-list li a')
    console.log(navbarMobileEls)
    let navIcon = document.querySelector('.nav-icon');


    navListEls.forEach(link => {
        link.addEventListener('click', function(e) {
            navListEls.forEach(link => {
                link.classList.remove('active')
            })

            e.currentTarget.classList.add('active')

        })
    })

    navbarMobileEls.forEach(link => {
        link.addEventListener('click', function(e) {
            navbarMobileEls.forEach(link => {
                link.classList.remove('active')
            })

            e.currentTarget.classList.add('active')

        })
    })

    navIcon.addEventListener('click', function() {
        navbarMobile.classList.toggle('hidden')
    })
}