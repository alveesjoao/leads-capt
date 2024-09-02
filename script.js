document.querySelector('.button-17').addEventListener('click', function() {
    const leadsSection = document.getElementById('leads');
    
    const offsetTop = leadsSection.offsetTop;

    window.scrollTo({
        top: offsetTop - 100, 
        behavior: 'smooth'
    });
});
