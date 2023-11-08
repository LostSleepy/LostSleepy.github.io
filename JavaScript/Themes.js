function toggleTheme(value) {
    var sheets = document.getElementsByTagName('link');
    sheets[0].href = value;

    // Store the selected theme in local storage
    localStorage.setItem('selectedTheme', value);
    // Update the image source based on the selected theme
var minimenuButton = document.getElementById('minimenu-button');
if (value === './CSSIndex/Dark.css') {
    minimenuButton.src = './multimediajujutsu/Iconos/palette-solid-white.svg';
} else {
    minimenuButton.src = './multimediajujutsu/Iconos/palette-solid.svg';
}
}
// Check if a theme is stored in local storage and apply it
document.addEventListener('DOMContentLoaded', function() {
    var storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        toggleTheme(storedTheme);
    }
});