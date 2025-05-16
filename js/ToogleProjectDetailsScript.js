function toggleDetails(card) {
    const details = card.querySelector('.project-details');
    const overlayText = card.querySelector('.toggle-text');
    const isHidden = details.style.display === 'none' || details.style.display === '';

    // Masquer les détails des autres cartes et réinitialiser le texte
    document.querySelectorAll('.project-card .project-details').forEach((d) => d.style.display = 'none');
    document.querySelectorAll('.project-card .toggle-text').forEach((text) => text.textContent = 'Voir plus');
    document.querySelectorAll('.project-card').forEach((c) => c.style.transform = 'scale(1)');

    // Afficher ou masquer les détails pour la carte cliquée
    details.style.display = isHidden ? 'block' : 'none';
    overlayText.textContent = isHidden ? 'Voir moins' : 'Voir plus';
    card.style.transform = isHidden ? 'scale(1.05)' : 'scale(1)';
}
