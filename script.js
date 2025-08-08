// Minimal script example for button actions
document.querySelectorAll('.secure-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Your package has been secured!');
    });
});
