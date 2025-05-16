window.addEventListener("load", function() {
    // Sélectionne tous les éléments avec la classe "container"
    const container = document.querySelector('.container');
    // Ajoute la classe "fade-in-active" après que le contenu a été chargé
    container.classList.add('fade-in-active');

    // Pour cacher le loader après que le contenu a été chargé
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = "none";
    }, 500); // Correspond au temps de la transition du loader
});