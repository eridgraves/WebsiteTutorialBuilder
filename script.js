// Event listener for Start button
document.querySelector('.start-btn').addEventListener('click', () => {
    const urlInput = document.getElementById('url-input').value;

    // Validate the URL
    if (!urlInput || !urlInput.startsWith('http')) {
        alert('Please enter a valid URL.');
        return;
    }

    // Hide the splash screen and show the main content
    document.querySelector('.splash-screen').style.display = 'none';
    document.querySelector('.container').style.display = 'block';

    // Set the iframe's src to the entered URL
    const iframe = document.querySelector('iframe');
    iframe.src = urlInput;
});

// Event listener for About button
document.querySelector('.about-btn').addEventListener('click', () => {
    alert('WebsiteTutorialBuilder: Build tutorials from any website interactively!');
});
