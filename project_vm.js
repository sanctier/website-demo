window.addEventListener("scroll", function () {
    var navbar = document.querySelector('.navbar');
    var breadcrumb = document.querySelector('.breadcrumb');

    if (window.scrollY > 100) { 
        navbar.classList.add('sticky');
        breadcrumb.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
        breadcrumb.classList.remove('sticky');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".project-item img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("zoomedImage");
    const closeBtn = document.querySelector(".close");

    images.forEach(image => {
        image.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
