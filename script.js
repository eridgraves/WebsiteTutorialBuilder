// Splash screen functionality
const splashScreen = document.querySelector('.splash-screen');
const mainLayout = document.querySelector('.main-layout');
const loadButton = document.getElementById('load-button');
const urlInput = document.getElementById('url-input');
const iframe = document.getElementById('website-frame');

loadButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url) {
        iframe.src = url.startsWith('http') ? url : `https://${url}`;
        splashScreen.style.display = 'none';
        mainLayout.style.display = 'flex';
    } else {
        alert('Please enter a valid URL.');
    }
});

// About button functionality
const aboutButton = document.getElementById('about-button');
aboutButton.addEventListener('click', () => {
    alert('WebsiteTutorialBuilder - Embed and explore websites with additional tools!');
});
