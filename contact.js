window.addEventListener("scroll", function () {
    var navbar = document.querySelector('.navbar');


    if (window.scrollY > 100) { 
        navbar.classList.add('sticky');
        breadcrumb.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
        breadcrumb.classList.remove('sticky');
    }
});

