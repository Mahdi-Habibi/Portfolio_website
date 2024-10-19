// commonHead.js (ES6+ Version)

const loadHead = () => {
    // Meta charset
    const metaCharset = document.createElement('meta');
    metaCharset.charset = 'UTF-8';
    document.head.appendChild(metaCharset);

    // Viewport meta tag
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(metaViewport);

    // Default title (can be overridden in the individual page)
    const title = document.createElement('title');
    title.textContent = 'My Common Title'; // This can be customized later
    document.head.appendChild(title);

    // Link to common stylesheet
    const linkStylesheet = document.createElement('link');
    linkStylesheet.rel = 'stylesheet';
    linkStylesheet.href = '../css/styles.css'; // Path to your common CSS
    document.head.appendChild(linkStylesheet);
};

// Add the event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHead);
