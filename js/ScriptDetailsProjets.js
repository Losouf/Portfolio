window.addEventListener('hashchange', function() {
    var id = location.hash.substr(1);
    var projets = document.querySelectorAll('.projet'); 

    projets.forEach(function(projet) {
        projet.classList.remove('active');
    });

    var projetActif = document.getElementById(id); 
    if (projetActif) {
        projetActif.classList.add('active'); 
    } else {
        window.location.href = '../'; 
    }
});


if (location.hash) {
    window.dispatchEvent(new Event('hashchange'));
}