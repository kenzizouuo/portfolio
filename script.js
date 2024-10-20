// Fonction pour valider le formulaire de contact
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire pour validation

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Vérification des champs
        if (name === "") {
            alert("Le nom est requis.");
            return;
        }
        if (email === "") {
            alert("L'e-mail est requis.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return;
        }
        if (message === "") {
            alert("Le message est requis.");
            return;
        }

        // Message de confirmation
        alert("Merci, " + name + "! Votre message a été envoyé.");
        form.reset(); // Réinitialise le formulaire
    });

    // Fonction pour valider l'adresse e-mail
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

// Effet de survol pour les sections de projets et hobbies
const projectSections = document.querySelectorAll('.project, .hobby');

projectSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.backgroundColor = '#f0f0f0'; // Change la couleur de fond au survol
    });

    section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = '#fff'; // Rétablit la couleur d'origine
    });
});
