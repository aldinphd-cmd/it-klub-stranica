document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const msg = document.getElementById('form-msg');

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (name === '' || email === '' || reason === '') {
        alert('Molimo popunite sva polja!');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Molimo unesite ispravnu email adresu!');
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