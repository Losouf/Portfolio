document.addEventListener("DOMContentLoaded", function() {
    function showSlides(slideshowClass) {
        let slideIndex = 0;
        let slides = document.querySelectorAll(`${slideshowClass} .mySlides`);
        
        function updateSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; // Cache toutes les images
                slides[i].classList.remove("fade-in"); // Retire l'animation fade-in
                slides[i].classList.remove("fade-out"); // Retire l'animation fade-out
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1; // Réinitialise l'index
            }
            slides[slideIndex - 1].style.display = "block"; // Affiche l'image
            slides[slideIndex - 1].classList.add("fade-in"); // Ajoute l'animation fade-in

            // Après 2 secondes (durée de fade-in), commence l'animation fade-out
            setTimeout(function() {
                slides[slideIndex - 1].classList.remove("fade-in");
                slides[slideIndex - 1].classList.add("fade-out");
            }, 2000); // 3 secondes d'affichage de l'image

            // Change d'image après 4 secondes (3s d'affichage + 1s de fade-out)
            setTimeout(updateSlides, 3000);
        }

        updateSlides(); // Initialisation du carrousel
    }

    // Initialiser chaque carrousel avec sa classe spécifique
    showSlides('.slideshow-1'); // Premier carrousel
    showSlides('.slideshow-2'); // Deuxième carrousel
});