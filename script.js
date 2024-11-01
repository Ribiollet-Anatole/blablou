// Fonction pour vérifier la réponse et afficher le pop-up
function checkAnswer(isCorrect, button) {
    // Sélection du pop-up et message
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    // Affichage du message et style du pop-up en fonction de la réponse
    if (isCorrect) {
        popupMessage.textContent = "Bonne réponse ! 🎉";
        popup.classList.add('correct');
        popup.classList.remove('wrong');
    } else {
        popupMessage.textContent = "Mauvaise réponse. 😞";
        popup.classList.add('wrong');
        popup.classList.remove('correct');
    }

    // Affichage du pop-up
    popup.style.display = 'block';
    

    // Masquage du pop-up après 2 secondes
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}
