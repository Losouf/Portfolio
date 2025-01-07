    // Fonction pour vérifier si un élément est visible dans le viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) && 
            rect.bottom > 0 && 
            rect.left < (window.innerWidth || document.documentElement.clientWidth) && 
            rect.right > 0
        );
    }

    // Fonction pour ajouter la classe d'animation
    function animateOnScroll() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('section-active');
            }
        });
    }

    // Écouter l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);

    // Appeler la fonction lors du chargement pour vérifier la visibilité initiale
    window.addEventListener('load', function() {
        document.getElementById('loader-wrapper').style.display = 'none'; // Masque le loader
        const accueilSection = document.getElementById('Accueil'); // Sélectionne la section Accueil
        accueilSection.classList.add('section-active'); // Ajoute la classe d'animation
        animateOnScroll(); // Vérifie la visibilité des autres sections
    });