document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const msg = document.getElementById('form-msg');

    if (name === '' || email === '' || reason === '') {
        alert('Molimo popunite sva polja!');
        return;
    }

    // Simulacija uspješne prijave
    msg.textContent = `Hvala ti, ${name}! Uspješno si poslao prijavu u IT klub.`;
    
    // Reset forme
    this.reset();
    
    setTimeout(() => {
        msg.textContent = '';
    }, 5000);
});