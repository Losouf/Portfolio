document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-column nav ul li a');

    function activateNavLink() {
        let index = sections.length;

        while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    activateNavLink(); // Activer lors du chargement initial de la page
    window.addEventListener('scroll', activateNavLink); // Activer lors du défilement
});
