// change the theme if it is dark mode 
document.addEventListener('DOMContentLoaded', () => {
    // retreive the value for theme from local storeage
    const savedTheme = localStorage.getItem('theme');
    // if the theme is dark apply it
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
