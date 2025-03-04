// Sticky Navbar functionality
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var sticky = navbar.offsetTop;

    if (window.scrollY > sticky) { 
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// window.onload = function () {
//     gsap.registerPlugin(ScrollTrigger);

//     const projectCards = document.querySelectorAll('.project-card');

//     projectCards.forEach((card, index) => {
//         // Alternate directions based on the index
//         const direction = index % 2 === 0 ? -1 : 1;  // Even index: left, Odd index: right

//         gsap.fromTo(card, {
//             opacity: 1,           // Initial opacity (fully visible)
//             x: 0,                 // Initial position (centered)
//         }, {
//             opacity: 0,           // Fade out
//             x: direction * 200,   // Move the card either left (-1) or right (1) by 200px
//             scrollTrigger: {
//                 trigger: card,             
//                 start: "top top",       
//                 end: "bottom top",          
//                 scrub: 1,                   
//                 toggleActions: "play none none reverse",  
//             }
//         });
//     });
// };

window.onload = function () {
    // Register GSAP plugin for animations
    gsap.registerPlugin(ScrollTrigger);

    const projectCards = document.querySelectorAll('.project-card');
    const searchBar = document.getElementById('search-bar');

    // Function to filter the project cards based on the search input
    searchBar.addEventListener('input', function() {
        const searchQuery = searchBar.value.toLowerCase();

        projectCards.forEach(card => {
            const cardTitle = card.querySelector('h1').textContent.toLowerCase();
            const cardDescription = card.querySelector('.project-description').textContent.toLowerCase();
            const cardDate = card.querySelector('.project-date').textContent.toLowerCase();

            if (cardTitle.includes(searchQuery) || 
                cardDescription.includes(searchQuery) || 
                cardDate.includes(searchQuery)) {
                card.style.display = 'flex'; // Show card if it matches
            } else {
                card.style.display = 'none'; // Hide card if it doesn't match
            }
        });
    });
};

