
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var sticky = navbar.offsetTop;

    
    if (window.scrollY > sticky) { 
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.querySelector('.typed');
    const textArray = ['Data Analysis', 'Web Designing', 'Machine Learning'];

    const icons = document.querySelectorAll('.icon');
    let i = 0;
    let j = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            currentText = currentText.slice(0, -1); 
        } else {
            currentText = textArray[i].slice(0, j++); 
        }

        typedText.textContent = currentText;

        // Change opacity based on the typed text
        updateIcons(currentText);

        if (!isDeleting && j === textArray[i].length) {
            setTimeout(() => isDeleting = true, 4000);  
        } 
        else if (isDeleting && currentText === '') {
            isDeleting = false;
            i = (i + 1) % textArray.length; 
            j = 0;
        }

        setTimeout(type, isDeleting ? 50 : 50);  
    }

    // Function to update icon opacity and size based on the typed text
    function updateIcons(currentText) {
        if (currentText === 'Data Analysis') {
            icons[0].classList.add('active'); 
            icons[1].classList.remove('active'); 
            icons[2].classList.remove('active'); 
        } else if (currentText === 'Web Designing') {
            icons[0].classList.remove('active'); 
            icons[1].classList.add('active'); 
            icons[2].classList.remove('active'); 
        } else if (currentText === 'Machine Learning') {
            icons[0].classList.remove('active'); 
            icons[1].classList.remove('active'); 
            icons[2].classList.add('active'); 
        }
    }

    type();
});




document.addEventListener("DOMContentLoaded", () => {
    const diffLang = document.querySelector(".diff_lang");

    // Array of different languages for "Hello!"
    const greetings = ["Hello!", "你好!", "வணக்கம்!", "Selamat!"];
    let index = 0;

    // Create a GSAP timeline for the text animation
    function cycleLanguages() {
        gsap.to(diffLang, { opacity: 0, duration: 0.5, onComplete: () => {
            // Change the text
            index = (index + 1) % greetings.length;
            diffLang.textContent = greetings[index];

            // Fade back in
            gsap.to(diffLang, { opacity: 1, duration: 0.5, delay: 0.2 });
        }});

        // Repeat the function after a few seconds
        setTimeout(cycleLanguages, 5000);
    }

    // Start the animation loop
    cycleLanguages();
});
