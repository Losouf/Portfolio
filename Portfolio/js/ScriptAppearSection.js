    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) && 
            rect.bottom > 0 && 
            rect.left < (window.innerWidth || document.documentElement.clientWidth) && 
            rect.right > 0
        );
    }

    function animateOnScroll() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (isElementInViewport(section) && !section.classList.contains('section-active')) {
                section.classList.add('section-active');
            }
        });
    }
    

    window.addEventListener('scroll', animateOnScroll);

    window.addEventListener('load', function() {
        document.getElementById('loader-wrapper').style.display = 'none'; 
        const accueilSection = document.getElementById('Accueil'); 
        accueilSection.classList.add('section-active'); 
        animateOnScroll(); 
    });